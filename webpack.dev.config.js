/*
 * @Author: caoweiju 
 * @Date: 2019-09-23 23:05:32 
 * @Last Modified by: caoweiju
 * @Last Modified time: 2019-10-24 16:53:43
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const webpack = require('webpack');
const pages = require('./page.config');
const FileListPlugin = require('./webpack_config/plugins/log-vendor-plugin');
const AddStyleLink = require('./webpack_config/plugins/add-reset-style-plugin');

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
    //   home: './src/page/home/index.js'
        ...entries
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
    },
    resolve: {
      mainFiles: ["index"],
      extensions: ['.js', '.jsx'],
      alias: {
          '$common': path.join(__dirname + '/src/common')
      }
    },
    devtool: 'eval-source-map',
    mode: 'development',
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
          test: /\.var$/,
          exclude: /(node_modules)/,
          use: {
            loader: path.join(__dirname, '/webpack_config/loaders/var.js'), // 具体配置见 .babelrc 文件
            options: {
              global: 'window',
            }
          }
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: true
              }
            },
            // { loader: 'style-loader' },
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
    },
    externals: {
      React: 'React',
      ReactDom: 'ReactDOM',
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        // compress: true,
        hot: true,
        port: 8001
    },
    plugins: [
        // new HtmlWebpackPlugin({hash: true, template: './template/index.html'}),
        ...htmlPlugins,
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new FileListPlugin(),
        new AddStyleLink({
          cssPath: path.join(__dirname, '/template/loadercss.css')
        }),
    ]
  };
}