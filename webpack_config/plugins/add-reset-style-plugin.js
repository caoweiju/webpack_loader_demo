/*
* @Author: caoweiju
* @Date: 2019-10-21 19:02:31
 * @Last Modified by: caoweiju
 * @Last Modified time: 2019-10-24 16:55:16
*/

// 一个自定义 webpack_plugin 测试，用来输出所有的打包的vendor片段到终端，并给html文件添加 作者meta

/*
<meta name="description" content="plugin 测试">
<meta name="keywords" content="webpack、JavaScript、plugin">
<meta name="author" content="caoweiju"></meta>
*/
const HtmlWebpackPlugin = require('html-webpack-plugin');

class AddStyleLink {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        var path = this.options.cssPath;
        // 在compilation钩子中来处理 htmlplugin的钩子 然后添加一个空的script标签
        compiler.hooks.compilation.tap('AddStyleLink', compilation => {
            // compilation.hooks.alterAssetTags.tapAsync('FileListPlugin', (assetData, cb) => {
            //     const data = assetData;
            // });
            const HtmlWebpackPlugin_compilation = HtmlWebpackPlugin.getHooks(compilation)
            HtmlWebpackPlugin_compilation.alterAssetTags.tapAsync(
                'AddStyleLink', // <-- Set a meaningful name here for stacktraces
                (data, cb) => {
                    // Manipulate the content
                        //   data.html += 'The Magic Footer'
                    // Tell webpack to move on
                    const { assetTags: { styles = [] } } = data;
                    styles.unshift({
                        attributes: {
                            src: path,
                            rel: "dns-prefetch"
                        },
                        tagName: "link",
                        voidTag: false,
                        content: 'var aaa = 333;',
                        source: 'var aaa = 333;',
                    });
                    cb(null, data)
                }
              )
        });
        
    }
  }
  
  module.exports = AddStyleLink;
  

