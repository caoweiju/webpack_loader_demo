/*
* @Author: caoweiju
* @Date: 2019-10-21 16:06:12
 * @Last Modified by: caoweiju
 * @Last Modified time: 2019-10-21 18:57:15
*/

// 加载 .var 文件的webpack loader
// import { getOptions } from 'loader-utils';
const loaderUtils = require('loader-utils');

module.exports = function (content, map, meta) {
    const options = loaderUtils.getOptions(this);
    const { global } = options;
    const regxMap = /\$global/g;
    return content.replace(regxMap, global);
};

