!function(e){function n(n){for(var r,i,a=n[0],c=n[1],f=n[2],p=0,s=[];p<a.length;p++)i=a[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(n);s.length;)s.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var c=t[a];0!==o[c]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={1:0},u=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var f=0;f<a.length;f++)n(a[f]);var l=c;u.push([48,0]),t()}({15:function(e,n){e.exports=React},16:function(e,n){e.exports=ReactDOM},48:function(e,n,t){"use strict";t.r(n);var r=t(20),o=t.n(r),u=t(0),i=t.n(u),a=t(21),c=t.n(a),f=t(11),l=t.n(f),p=t(22),s=t.n(p),y=t(12),b=t.n(y),d=t(15),h=t(16);t(83);function v(e){return(v="function"==typeof i.a&&"symbol"==typeof o.a?function(e){return typeof e}:function(e){return e&&"function"==typeof i.a&&e.constructor===i.a&&e!==i.a.prototype?"symbol":typeof e})(e)}function m(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),c()(e,r.key,r)}}function w(e,n){return!n||"object"!==v(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function g(e){return(g=b.a?l.a:function(e){return e.__proto__||l()(e)})(e)}function _(e,n){return(_=b.a||function(e,n){return e.__proto__=n,e})(e,n)}var O=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),w(this,g(n).apply(this,arguments))}var t,r,o;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=s()(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&_(e,n)}(n,e),t=n,(r=[{key:"render",value:function(){return React.createElement("div",{className:"app"},React.createElement("h1",{className:"tit"},"Hello, caoweiju is my name!"))}}])&&m(t.prototype,r),o&&m(t,o),n}(d.Component);Object(h.render)(React.createElement(O,null),document.getElementById("root"))},83:function(e,n,t){}});