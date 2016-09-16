!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.Uploader=t(require("react")):e.Uploader=t(e.React)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";var n=r(1)["default"];e.exports=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(6),f=n(u),c=r(5),l=n(c),p=f["default"].createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 512 512"},f["default"].createElement("path",{d:"M64 96h64v64H64V96zM96 192c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32S113.7 192 96 192zM448 304c0 61.8-50.2 112-112 112s-112-50.2-112-112 50.2-112 112-112S448 242.2 448 304zM416 304c0-44.1-35.9-80-80-80s-80 35.9-80 80 35.9 80 80 80S416 348.1 416 304zM512 96v352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64V0h64v32h320C483.3 32 512 60.7 512 96zM160 480V64H64c-17.6 0-32 14.4-32 32v352c0 17.7 14.4 32 32 32H160zM480 96c0-17.6-14.3-32-32-32H192v416h256c17.7 0 32-14.3 32-32V96zM416 96h-32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c17.7 0 32-14.3 32-32S433.7 96 416 96z"})),d=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"renderButton",value:function(){var e=l["default"].beboUploader+(this.props.className&&" "+this.props.className||"");return f["default"].createElement("div",{className:e},p)}},{key:"render",value:function(){return f["default"].createElement("div",{ref:"test"})}}]),t}(f["default"].Component);d.displayName="Uploader",t["default"]=d},function(e,t,r){t=e.exports=r(3)(),t.push([e.id,".styles__bebo-uploader-overlay___er33n{margin:auto;height:70%;width:70%}",""]),t.locals={"bebo-uploader":"styles__bebo-uploader___uONGw","bebo-uploader-overlay":"styles__bebo-uploader-overlay___er33n"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=d[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(f(n.parts[i],t))}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(f(n.parts[i],t));d[n.id]={id:n.id,refs:1,parts:a}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],i=o[0],a=o[1],s=o[2],u=o[3],f={css:a,media:s,sourceMap:u};r[i]?r[i].parts.push(f):t.push(r[i]={id:i,parts:[f]})}return t}function i(e,t){var r=b(),n=g[g.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function f(e,t){var r,n,o;if(t.singleton){var i=m++;r=y||(y=s(t)),n=c.bind(null,r,i,!1),o=c.bind(null,r,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=u(t),n=p.bind(null,r),o=function(){a(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(t),n=l.bind(null,r),o=function(){a(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function c(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function l(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function p(e,t){var r=t.css,n=t.sourceMap;n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([r],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=h(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,m=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var i=[],a=0;a<r.length;a++){var s=r[a],u=d[s.id];u.refs--,i.push(u)}if(e){var f=o(e);n(f,t)}for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete d[u.id]}}}};var x=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){var n=r(2);"string"==typeof n&&(n=[[e.id,n,""]]);r(4)(n,{});n.locals&&(e.exports=n.locals)},function(t,r){t.exports=e}])});