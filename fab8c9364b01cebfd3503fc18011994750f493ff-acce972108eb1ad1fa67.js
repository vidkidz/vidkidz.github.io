(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8oxB":function(t,e){var n,o,i=t.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(n===setTimeout)return setTimeout(t,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(t){n=r}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(t){o=a}}();var c,s=[],l=!1,f=-1;function d(){l&&c&&(l=!1,c.length?s=c.concat(s):f=-1,s.length&&p())}function p(){if(!l){var t=u(d);l=!0;for(var e=s.length;e;){for(c=s,s=[];++f<e;)c&&c[f].run();f=-1,e=s.length}c=null,l=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function m(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new h(t,e)),1!==s.length||l||u(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},BC7C:function(t,e,n){var o=n("XKFU");o(o.S,"Math",{fround:n("kcoS")})},CS7O:function(t,e,n){"use strict";n("pIFo");var o=n("q1tI"),i=(n("5D9J"),n("qKvR")),r=(n("9VmF"),n("f3/d"),n("NO8f"),n("JmBL")),a=function(t,e){console.log("WAFLASH> load from =>",e);t.ccall("reopenBuffer","int",["string","number","number"],[e,0,0])},u=function(t,e){if(e.size<104857600){var n=new FileReader;n.onload=function(n){console.log("WAFLASH> file loaded!");var o=n.target.result;if(o){console.log("WAFLASH> content length: "+o.byteLength);var i=new Uint8Array(o),r=t._malloc(i.length);t.HEAP8.set(i,r);var a=t.ccall("reopenBuffer","int",["string","number","number"],[e.name,r,i.length]);t._free(r),0==a&&console.warn("WAFLASH> load failed!")}else console.warn("WAFLASH> load result empty!")},n.readAsArrayBuffer(e)}else console.warn("WAFLASH> ignoring dropped file because it is too big")},c=function(t){var e=document;e.addEventListener("dragenter",(function(t){t.stopPropagation(),t.preventDefault()}),!1),e.addEventListener("dragleave",(function(t){t.stopPropagation(),t.preventDefault()}),!1),e.addEventListener("dragover",(function(t){t.stopPropagation(),t.preventDefault()}),!1),e.addEventListener("drop",(function(e){e.stopPropagation(),e.preventDefault(),function(t,e){var n=e.dataTransfer.getData("text");n&&/^https?:\/\/.*\.swf$/.test(n)?a(t,n):e.dataTransfer.files.length>0&&u(t,e.dataTransfer.files[0]),t.hideStatus()}(t,e)}),!1),t.setStatus(navigator.language&&navigator.language.startsWith("ko")?"SWF 파일을 재생하려면 드래그하여 여기에 놓으세요!":"Drop a SWF file here to play!")},s=r.a,l={name:"jwh8kt",styles:"position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:70%;color:white;margin:0px auto;padding:20px;font-size:1.2rem;text-align:center;background-color:rgba(0,0,0,0.1);display:none;"};e.a=function(t){if(t.disable)return Object(i.c)("div",null);Object(o.useEffect)((function(){var e,n=t.src&&t.src.publicURL?window.location.origin+t.src.publicURL:"",o={arguments:[n],preRun:[],postRun:[],locateFile:function(t,e){return"/wasm/"+t},print:function(t){console.log(t)},printErr:function(t){console.error(t)},canvas:(e=document.getElementById("canvas"),e.addEventListener("webglcontextlost",(function(t){alert("WebGL context lost. You will need to reload the page."),t.preventDefault()}),!1),e),statusElement:document.getElementById("waflashStatus"),setStatus:function(t){t&&(t=t.replace(/Downloading data\.\.\. \((\d+)\/(\d+)\)/,(function(t,e,n){return"Downloading data... "+Math.floor(parseInt(e)/parseInt(n)*100)+"%"})),console.log("WAFLASH> "+t),o.statusElement.innerHTML=t,o.showStatus())},showStatus:function(){o.statusElement.style.display="block"},hideStatus:function(){o.statusElement.style.display="none"},unload:function(){}};return o.setStatus("Prepairing..."),s(o).then((function(t){console.log("WAFLASH> Waflash module created!"),o.hideStatus(),n||c(o)})),function(){console.log("WAFLASH> Waflash component will unmount!"),o.unload(),o=null}}));var e=Object(i.b)("padding-right:0;margin-left:auto;margin-right:auto;display:block;border:0px none;background-color:black;width:",t.width||"100%",";height:",t.height||"480px",";@media (max-width:640px){width:100%;height:75vw;}@media (max-width:319px){width:240px;height:180px;}@media (orientation:landscape) and (max-height:480px){width:100%;height:75vh;}"),n=l;return Object(i.c)("div",{id:"waflashContainer",style:{position:"relative",border:"1px solid black"}},Object(i.c)("canvas",{id:"canvas",css:e,onContextMenu:function(t){return t.preventDefault()},tabIndex:-1}),Object(i.c)("div",{id:"waflashStatus",css:n}))}},FLlr:function(t,e,n){var o=n("XKFU");o(o.P,"String",{repeat:n("l0Rn")})},Faw5:function(t,e,n){n("7DDg")("Int16",2,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},MtdB:function(t,e,n){var o=n("XKFU");o(o.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},Tdpu:function(t,e,n){n("7DDg")("Float64",8,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},URgk:function(t,e,n){(function(t){var o=void 0!==t&&t||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function r(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new r(i.call(setTimeout,o,arguments),clearTimeout)},e.setInterval=function(){return new r(i.call(setInterval,o,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(o,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},n("YBdB"),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n("yLpj"))},Y9lz:function(t,e,n){n("7DDg")("Float32",4,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},YBdB:function(t,e,n){(function(t,e){n("Btvt"),n("V+eJ"),function(t,n){"use strict";if(!t.setImmediate){var o,i,r,a,u,c=1,s={},l=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?o=function(t){e.nextTick((function(){h(t)}))}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((r=new MessageChannel).port1.onmessage=function(t){h(t.data)},o=function(t){r.port2.postMessage(t)}):f&&"onreadystatechange"in f.createElement("script")?(i=f.documentElement,o=function(t){var e=f.createElement("script");e.onreadystatechange=function(){h(t),e.onreadystatechange=null,i.removeChild(e),e=null},i.appendChild(e)}):o=function(t){setTimeout(h,0,t)}:(a="setImmediate$"+Math.random()+"$",u=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(a)&&h(+e.data.slice(a.length))},t.addEventListener?t.addEventListener("message",u,!1):t.attachEvent("onmessage",u),o=function(e){t.postMessage(a+e,"*")}),d.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var i={callback:t,args:e};return s[c]=i,o(c),c++},d.clearImmediate=p}function p(t){delete s[t]}function h(t){if(l)setTimeout(h,0,t);else{var e=s[t];if(e){l=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(void 0,n)}}(e)}finally{p(t),l=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n("yLpj"),n("8oxB"))},bHtr:function(t,e,n){var o=n("XKFU");o(o.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},"dE+T":function(t,e,n){var o=n("XKFU");o(o.P,"Array",{copyWithin:n("upKx")}),n("nGyu")("copyWithin")},kcoS:function(t,e,n){var o=n("lvtm"),i=Math.pow,r=i(2,-52),a=i(2,-23),u=i(2,127)*(2-a),c=i(2,-126);t.exports=Math.fround||function(t){var e,n,i=Math.abs(t),s=o(t);return i<c?s*(i/c/a+1/r-1/r)*c*a:(n=(e=(1+a/r)*i)-(e-i))>u||n!=n?s*(1/0):s*n}},lvtm:function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},nCnK:function(t,e,n){n("7DDg")("Uint32",4,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},r1bV:function(t,e,n){n("7DDg")("Uint16",2,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},sFw1:function(t,e,n){n("7DDg")("Int8",1,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},tUrg:function(t,e,n){"use strict";n("OGtf")("link",(function(t){return function(e){return t(this,"a","href",e)}}))}}]);
//# sourceMappingURL=fab8c9364b01cebfd3503fc18011994750f493ff-acce972108eb1ad1fa67.js.map