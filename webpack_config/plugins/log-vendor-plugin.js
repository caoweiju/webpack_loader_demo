/*
* @Author: caoweiju
* @Date: 2019-10-21 19:02:31
 * @Last Modified by: caoweiju
 * @Last Modified time: 2019-10-24 16:42:21
*/

// 一个自定义 webpack_plugin 测试，用来输出所有的打包的vendor片段到终端，并给html文件添加 作者meta

/*
<meta name="description" content="plugin 测试">
<meta name="keywords" content="webpack、JavaScript、plugin">
<meta name="author" content="caoweiju"></meta>
*/
const HtmlWebpackPlugin = require('html-webpack-plugin');

class FileListPlugin {
    apply(compiler) {
        // 在compilation钩子中来处理 htmlplugin的钩子 然后添加一个空的script标签
        compiler.hooks.compilation.tap('FileListPlugin', compilation => {
            // compilation.hooks.alterAssetTags.tapAsync('FileListPlugin', (assetData, cb) => {
            //     const data = assetData;
            // });
            const HtmlWebpackPlugin_compilation = HtmlWebpackPlugin.getHooks(compilation)
            HtmlWebpackPlugin_compilation.alterAssetTags.tapAsync(
                'FileListPlugin', // <-- Set a meaningful name here for stacktraces
                (data, cb) => {
                    // Manipulate the content
                        //   data.html += 'The Magic Footer'
                    // Tell webpack to move on
                    const { assetTags: { scripts = [] } } = data;
                    scripts.unshift({
                        attributes: {
                            defer: true,
                            crossorigin: "anonymous"
                        },
                        tagName: "script",
                        voidTag:false,
                        content: 'var aaa = 333;',
                        source: 'var aaa = 333;',
                    });
                    cb(null, data)
                }
              )
        });
        // emit 是异步 hook，使用 tapAsync 触及它，还可以使用 tapPromise/tap(同步)
        compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
            // 在生成文件中，创建一个头部字符串：
            var filelist = 'In this build:\n\n';
    
            // 遍历所有编译过的资源文件，
            // 对于每个文件名称，都添加一行内容。
            for (var filename in compilation.assets) {
            filelist += '- ' + filename + '\n';
            }
    
            // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
            compilation.assets['filelist.md'] = {
            source: function() {
                return filelist;
            },
            size: function() {
                return filelist.length;
            }
            };
    
            callback();
        });
    }
  }
  
  module.exports = FileListPlugin;
  

