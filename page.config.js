/*
 * @Author: caoweiju 
 * @Date: 2019-09-28 19:18:17 
 * @Last Modified by: caoweiju
 * @Last Modified time: 2019-09-28 19:28:59
 */

// 页面相关配置 
module.exports = {
    home: {
        entry: './src/page/home/index.js',
        options: {
            hash: true,
            template: './template/index.html',
            title: '首页',
            filename: 'home.html'
        }
    },
    religion_home: {
        entry: './src/page/religion/home/index.js',
        options: {
            hash: true,
            template: './template/index.html',
            title: '宗教信仰',
            filename: 'religion_home.html'
        }
    }
}