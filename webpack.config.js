/*
 * @Author: caoweiju 
 * @Date: 2019-09-23 23:05:32 
 * @Last Modified by: caoweiju
 * @Last Modified time: 2019-09-28 20:28:31
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const pages = require('./page.config.js');

function getEntryAndHtmlPlugin(pages = {}) {
    const entryKey = Object.keys(pages) || [];
    let entries = {};
    let htmlPlugins = [];
    entryKey.forEach( item => {
        const { entry, options = {} } = pages[item];
        entries[item] = entry;
        htmlPlugins.push(new HtmlWebpackPlugin({
            hash: true,
            template: './template/index.html',
            chunks: [item],
            filename: `${item}.html`,
            ...options
        }));
    });
    return {entries, htmlPlugins}
}

module.exports = (env, arg) => {
  const { mode = 'development' } = arg || {};
  const { entries, htmlPlugins } = getEntryAndHtmlPlugin(pages);
  return {
    entry: {
      ...entries
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].js'
    },
    resolve: {
      mainFiles: ["index"],
      extensions: ['.js', '.jsx'],
      alias: {
          '$common': path.join(__dirname + '/src/common')
      }
    },
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader' // 具体配置见 .babelrc 文件
          }
        },
        {
          test: /\.scss$/,
          use: [
            { 
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2, // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
              }
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: "sass-loader"
            }
          ]
        }
      ]
    },
    optimization: {
      splitChunks: {
        // include all types of chunks
        chunks: 'all'
      },
      minimizer: [new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true,
        cache: true,
        uglifyOptions: {
            output: {
                comments: false,
            },
        },
      })],
    },
    externals: {
      React: 'React',
      ReactDom: 'ReactDOM',
    },
    plugins: [
      ...htmlPlugins,
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].[hash].css",
        chunkFilename: "[id].[hash].css"
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      }),
      new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    })
    ]
  };
}