# 个人项目的前端工程
这是一个个人项目的前端工程，包括了：
- 个人项目前端页面
- 个人项目的后台页面

所有的前端静态资源(js、css、图片等)都在压缩后上传到个cdn上。

````
win10 port restart
- netstat -ano | findstr :8001
find the PID No [here is 33824] and kill it like this
-  taskkill /PID 33284 /F
````

## 工程简介
工程的项目结构包含了：
- react相关的全家桶(react、react-dom、mobx、react-mobx等)完成前端页面的编写
- babel支持es6+和polyfill(装饰器、fetch、promise、async、await等)
- webpack完成打包(sass、本地调试dev-server、hotload热更新等)

整个工程的技术栈体现如下：
1. 通过`page.config.js`多个页面入口配置，需要配置入口js、html模板等`html-webpack-plugin`打包需要的配置，可以同时打包多个页面，会根据`page.config.js`文件生成多个`html-webpack-plugin`插件配置到webpack中；
2. 使用sass来书写样式，通过`mini-css-extract-plugin`来提取css，生成独立的css文件，通过`css-loader postcss-loader sass-loader`来加载css，postCss可以用来自动添加厂商前缀；
3. `optimize-css-assets-webpack-plugin`用来压缩线上css文件,`uglifyjs-webpack-plugin`用来压缩线上js文件；
3. 使用`splitChunks`来讲大size的js文件拆分，同时需要使用最新版本V4-beta(@next的beta版本)的`html-webpack-plugin`才支持其`chunks`的配置默认将所需的chunks加载到html中。
4. 通过`externals`外部引用react相关的文件，可以自己控制react的版本，根据页面来控制页面的模板引用不同版本react；
5. `devServer`来启动本地服务，配合HMR完成热更新，修改时可以完成页面的刷新；
6. 本地开发调试使用`devtool: 'eval-source-map'`来完成资源映射；
7. 使用babel来变异和引用polyfill

## 工程结构



## 工程启动

本地运行：`npm run dev`;
本地打包线上资源：`npm run build`;

