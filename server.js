!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n.w={},n(n.s=6)}([function(t,e){t.exports=require("react")},function(t,e){t.exports=require("serialize-javascript")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(0),i=(r=u)&&r.__esModule?r:{default:r};var a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,u.Component),o(e,[{key:"render",value:function(){return i.default.createElement("div",{className:"App"},"Hello ",this.props.data)}}]),e}();e.default=a},function(t,e){t.exports=require("react-dom/server")},function(t,e){t.exports=require("cors")},function(t,e){t.exports=require("express")},function(t,e,n){"use strict";var r=l(n(5)),o=l(n(4)),u=n(3),i=l(n(2)),a=l(n(0)),c=l(n(1));function l(t){return t&&t.__esModule?t:{default:t}}var f=(0,r.default)();f.use((0,o.default)()),f.use(r.default.static("public")),f.get("*",function(t,e,n){var r=(0,u.renderToString)(a.default.createElement(i.default,{data:"Jalaj"}));e.send('\n\t\t<!DOCTYPE html>\n\t\t<html>\n\t\t\t<head>\n\t\t\t\t<title>SSR with RR</title>\n\t\t\t\t<script src="/bundle.js" defer><\/script>\n\t\t\t\t<script>window.__INITIAL_DATA__ = '+(0,c.default)("Jalaj")+' <\/script>\n\t\t\t</head>\n\n\t\t\t<body>\n\t\t\t\t<div id="app">'+r+"</div>\n\t\t\t</body>\n\t\t</html>\n\t")}),f.listen(3e3,function(){console.log("Server is Listening on port: 3000")})}]);