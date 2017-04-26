/*!
 * Solo v2.0.35
 * Copyright© 2017 深圳市蓝凌软件股份有限公司版权所有
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Solo=e():t.Solo=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=59)}([function(t,e,n){var r=n(29)("wks"),o=n(20),i=n(3).Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){"use strict";var r=n(69),o=n.n(r),i={}.hasOwnProperty,a={type:function(t,e){var n=void 0;return null!=t?(n=Object.prototype.toString.call(t),1===arguments.length?n.slice(8,-1):n.toLowerCase()===("[object "+e+"]").toLowerCase()):(n=String(t),arguments.length>1?n.toLowerCase()===String(e).toLowerCase():n)},kebabCase:function(t){return String(t).replace(/[A-Z]/g,function(t){return"-"+t}).replace(/(^-+|-+$)/,"").toLowerCase()},isArray:Array.isArray,isArrayLike:function(t){var e=t&&t.length;return!!t&&(a.isArray(t)||e>>0===e&&e>=0&&(!e||e-1 in t))},isWindow:function(t){return!(null==t||!t.window||t!==t.window)},isPlainObject:function(t){return a.type(t,"object")&&!a.isWindow(t)&&o()(t)===Object.prototype},prefix:function(t,e,n){return null==e&&(e="0"),null==n&&(n=2),t=String(t),t.length<n&&(e=String(e).charAt(0),t=Array(n-t.length+1).join(e)+t),t},formatTime:function(t,e){null==e&&(e="YYYY-MM-DD hh:mm:ss");var n=new Date(t);if(!e||isNaN(n.valueOf()))return"";var r=n.getMonth()+1,o=n.getDate(),i=n.getHours(),u=n.getMinutes(),c=n.getSeconds(),s=n.getMilliseconds(),f={YY:a.prefix(n.getYear()%100),YYYY:n.getFullYear(),MM:a.prefix(r),M:r,DD:a.prefix(o),D:o,hh:a.prefix(i),h:i,mm:a.prefix(u),m:u,ss:a.prefix(c),s:c,ms:s};return e.replace(/[a-z]+/gi,function(t){var e=void 0;return null!=(e=f[t])?e:t})},parseDate:function(t){var e=null,n=void 0;if("string"==typeof t){if(n=t.replace(/^[^\d]*|[^\d]*$/g,"").split(/[^\d]/),!n.length||!/\d/.test(t))return null;e=new Date(n[0],n[1]-1||0,n[2]||1,n[3]||0,n[4]||0,n[5]||0,n[6]||0),isNaN(e.valueOf())&&(e=null)}return e},each:function(t,e,n){if(t&&e)if(a.isArrayLike(t)){if(a.isArray(t)&&t.forEach)return void t.forEach(e,n);var r=0,o=0,u=void 0,c=void 0;for(u=t.length;o<u;r=++o)c=t[r],e.call(n,c,r,t)}else{var s=void 0,f=void 0;for(s in t)i.call(t,s)&&(f=t[s],e.call(n,f,s,t))}},getQueryData:function(t){var e={};return null==t&&(t=location.search),(t=(""+t).replace(/^[?|#]/,"").trim())?(t=t.split("&"),t.forEach(function(t){var n=t.split("=");try{e[decodeURIComponent(n[0])]=void 0===n[1]?"":decodeURIComponent(n[1])}catch(t){e[n[0]]=n[1]}}),e):e},extend:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e[0],o=!1;"boolean"==typeof e[0]&&(o=e.shift(),r=e[0]);var u="boolean"!=typeof e[e.length-1]||e.pop(),c=1;1===e.length&&(r=a.isWindow(this)?{}:this,c=0),r||(r={});for(var s=void 0,f=void 0,l=void 0,p=void 0;c<e.length;)if(s=e[c++])for(f in s)i.call(s,f)&&(l=s[f],!u&&f in r||(o&&l&&(a.isArray(l)||a.isPlainObject(l))?(p=a.isArray(l)?r[f]||[]:r[f]||{},r[f]=a.extend(o,p,l,u)):r[f]=l));return r},debounce:function(t,e,n){var r=null;return isNaN(e)||(e>0&&(n=e),e=void 0),(isNaN(n)||n<0)&&(n=200),function(){for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];clearTimeout(r),r=setTimeout(function(){null!=t&&t.apply(e,i)},n)}},throttle:function(t,e,n){var r=!1,o=null;return isNaN(e)||(e>0&&(n=+e),e=void 0),(isNaN(n)||n<0)&&(n=200),function(){for(var i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];var c=+new Date;r===!1&&(r=c);var s=n-(c-r);clearTimeout(o),s<=0?(null!=t&&t.call(e),n=!1):o=setTimeout(function(){null!=t&&t.apply(e,a)},s)}}};e.a=a},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(11),o=n(41),i=n(31),a=Object.defineProperty;e.f=n(5)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){t.exports=!n(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(42),o=n(23);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(3),o=n(1),i=n(39),a=n(10),u=function(t,e,n){var c,s,f,l=t&u.F,p=t&u.G,h=t&u.S,v=t&u.P,d=t&u.B,y=t&u.W,g=p?o:o[e]||(o[e]={}),m=g.prototype,b=p?r:h?r[e]:(r[e]||{}).prototype;p&&(n=e);for(c in n)(s=!l&&b&&void 0!==b[c])&&c in g||(f=s?b[c]:n[c],g[c]=p&&"function"!=typeof b[c]?n[c]:d&&s?i(f,r):y&&b[c]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((g.virtual||(g.virtual={}))[c]=f,t&u.R&&m&&!m[c]&&a(m,c,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(4),o=n(14);t.exports=n(5)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(17);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports={}},function(t,e,n){var r=n(47),o=n(24);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(o=t,i=t.default);var u="function"==typeof i?i.options:i;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var c=Object.create(u.computed||null);Object.keys(r).forEach(function(t){var e=r[t];c[t]=function(){return e}}),u.computed=c}return{esModule:o,exports:i,options:u}}},function(t,e,n){"use strict";function r(t){u.a.each(c.a,function(e,n){t.filter(n,e)})}function o(t){t.mixin(s.a)}function i(t){u.a.each(f.a,function(e,n){t.component(n,e)})}function a(t){a.installed||(a.installed=!0,l=t,r(t),o(t),Object.defineProperty(t.prototype,"$router",{get:function(){return this.$root._router}}),i(t))}var u=n(2),c=n(56),s=n(61),f=n(54);n.d(e,"a",function(){return l}),e.b=a;var l=void 0},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(23);t.exports=function(t){return Object(r(t))}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){"use strict";function r(t){if(t.homePage&&(t.homePage=i.a.kebabCase(t.homePage)),t.enterPage?t.enterPage=i.a.kebabCase(t.enterPage):t.enterPage=t.homePage,t.pages){var e={};i.a.each(t.pages,function(t,n){e[i.a.kebabCase(n)]=t}),t.pages=e}return t.kk||(t.kk=window.kk),t.kk&&"function"==typeof t.kk.isKK&&t.kk.isKK()||(t.kk=!1),t}function o(){return arguments.length?r(i.a.extend(!0,a,(arguments.length<=0?void 0:arguments[0])||{})):a}var i=n(2);n.d(e,"b",function(){return a}),e.a=o;var a={pageTransition:{in:"slide-left",out:"slide-right"},popupTransition:{in:"slide-up",out:"slide-down"},panelTransition:{in:"slide-to",out:"slide-from"},homePage:"index",mountAt:"#app"}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports=!0},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(4).f,o=n(6),i=n(0)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(29)("keys"),o=n(20);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(3),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(17);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(3),o=n(1),i=n(25),a=n(33),u=n(4).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:a.f(t)})}},function(t,e,n){e.f=n(0)},function(t,e,n){"use strict";var r=n(2),o=n(16);e.a={noramlizeViewType:function(t){var e=["page","panel","popup"];return t=String(t).toLowerCase(),e.indexOf(t)===-1?"page":t},getPathInfo:function(t){var e=/^(\/(\w+)(?:(?:\/\w+)*?)(?:\/(\w+))?)(?:!(\w+))?@(\d+)(\?.*)?$/,n=e.exec(t);return n?{basePath:n[1],rootViewName:n[2],currentViewName:n[3]||n[2],viewType:n[4]||"page",createdAt:n[5],query:n[6]&&r.a.getQueryData(n[6])}:null},findIndex:function(t,e){for(var n=t.length;n--;)if(e(t[n],n,t))return n;return-1},getHash:function(){var t=window.location.href,e=t.indexOf("#");return e===-1?"":t.slice(e+1)},callPageBack:function(t){if(!t||"function"!=typeof t.$vm.$options.pageBack)return!0;var e=t.$vm,n=e.$options.pageBack;return!!n.isCalling||(n.isCalling=!0,o.a.nextTick(function(){n.isCalling=!1}),n.call(e))}}},function(t,e,n){"use strict";function r(t,e){var n=t.$options[e];if(n)for(var r=0,o=n.length;r<o;r++)n[r].call(t);t.$emit("hook:"+e)}function o(t,e){r(t.$children[0],e),r(t,e)}e.a=o},function(t,e,n){t.exports={default:n(75),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(68),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){var r=n(80);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(17),o=n(3).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=!n(5)&&!n(9)(function(){return 7!=Object.defineProperty(n(40)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(22);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){"use strict";var r=n(25),o=n(8),i=n(48),a=n(10),u=n(6),c=n(12),s=n(90),f=n(27),l=n(46),p=n(0)("iterator"),h=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,d,y,g,m){s(n,e,d);var b,w,x,k=function(t){if(!h&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},_=e+" Iterator",O="values"==y,P=!1,S=t.prototype,j=S[p]||S["@@iterator"]||y&&S[y],$=j||k(y),A=y?O?k("entries"):$:void 0,N="Array"==e?S.entries||j:j;if(N&&(x=l(N.call(new t)))!==Object.prototype&&(f(x,_,!0),r||u(x,p)||a(x,p,v)),O&&j&&"values"!==j.name&&(P=!0,$=function(){return j.call(this)}),r&&!m||!h&&!P&&S[p]||a(S,p,$),c[e]=$,c[_]=v,y)if(b={values:O?$:k("values"),keys:g?$:k("keys"),entries:A},m)for(w in b)w in S||i(S,w,b[w]);else o(o.P+o.F*(h||P),e,b);return b}},function(t,e,n){var r=n(11),o=n(96),i=n(24),a=n(28)("IE_PROTO"),u=function(){},c=function(){var t,e=n(40)("iframe"),r=i.length;for(e.style.display="none",n(86).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object</script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=r(t),n=new u,u.prototype=null,n[a]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(47),o=n(24).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(6),o=n(19),i=n(28)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){var r=n(6),o=n(7),i=n(82)(!1),a=n(28)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),c=0,s=[];for(n in u)n!=a&&r(u,n)&&s.push(n);for(;e.length>c;)r(u,n=e[c++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){t.exports=n(10)},function(t,e,n){var r=n(30),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){"use strict";var r=n(100)(!0);n(43)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";e.a={props:["page-data"],mounted:function(){this.$emit("page-created",this),this.$router.current.$vm=this},beforeDestroy:function(){this.$emit("page-before-destroy",this)}}},function(t,e,n){"use strict";var r=n(73),o=n.n(r),i=n(36),a=n.n(i),u=n(37),c=n.n(u),s=n(38),f=n.n(s),l=n(35),p=n(16),h=n(21),v=n(63),d=n(34),y=function(){function t(e){c()(this,t),this.$options=e,this.history=new v.a(this),this.currentPage={},this.modal=null,this.current=null,this.invalidViews=[];var r=this;this.history.listen(function(t,e,o){r.current&&r.current.path===t.path||(r.current=t,r.currentPage=a()({},e),r.modal=o,e!==t&&n.i(l.a)(e.$vm,"deactivated"),p.a.nextTick(function(){r.clearViews()}))})}return f()(t,[{key:"init",value:function(){var t=this,e=this.$options,n=this.noramlizeRoute({viewName:e.enterPage,viewData:e.enterPageData},!0);this.history.setupHashListener(),this.history.load(n),h.b.kk&&h.b.kk.app.on("back",function(){return t.onKKBack()})}},{key:"onKKBack",value:function(){return d.a.callPageBack(this.current)}},{key:"load",value:function(t,e){e="object"===(void 0===e?"undefined":o()(e))?a()({},e,{viewName:t}):"object"===(void 0===t?"undefined":o()(t))?t:{viewName:t},this.history.load(this.noramlizeRoute(e,!0))}},{key:"back",value:function(){var t;d.a.callPageBack(this.current)!==!1&&(t=this.history).back.apply(t,arguments)}},{key:"clearViews",value:function(){var t=this.history.stack,e=[],n=t.length-1;if(this.current.isHome&&"page"===this.current.type&&n>0)for(e=t.splice(0,n);n--;)window.history.back();this.invalidViews.length&&(e=e.concat(this.invalidViews.reverse()),this.invalidViews.length=0);for(var r=void 0;r=e.pop();)r.$vm.$destroy()}},{key:"noramlizeRoute",value:function(t,e){var n=d.a.getPathInfo(this.current&&this.current.path);return t.type=d.a.noramlizeViewType(t.type),t.isHome=t.viewName===this.$options.homePage,t.createdAt=t.createdAt||+new Date,"page"!==t.type?(t.path=t.path||n.basePath+"/"+t.viewName+"!"+t.type+"@"+t.createdAt,"panel"===t.type&&(t.position=t.position||"left")):t.path=t.path||"/"+t.viewName+"@"+t.createdAt,e&&(t.transition=this.history.stack.length?this.getRouteTransition(t,e):"mask-fade"),t}},{key:"getRouteTransition",value:function(t,e){if(t.transition)return t.transition;switch(t.type){case"popup":return this.$options.popupTransition[e?"in":"out"];case"panel":return this.$options.panelTransition[e?"in":"out"]+"-"+t.position;default:return this.$options.pageTransition[e?"in":"out"]}}}]),t}();e.a=y},function(t,e,n){n(117);var r=n(15)(n(64),n(122),null,null);t.exports=r.exports},function(t,e,n){"use strict";var r=n(126),o=n.n(r),i=n(55),a=n(125),u=n.n(a),c=n(123),s=n.n(c),f=n(124),l=n.n(f);e.a={page:o.a,soloLink:i.a,soloHeader:u.a,soloContent:s.a,soloFooter:l.a}},function(t,e,n){"use strict";e.a={name:"solo-link",props:{tag:{type:String,default:"a"}},render:function(t){return t(this.tag,this.$slots.default)}}},function(t,e,n){"use strict";var r=n(2),o=n(57),i=n(58);e.a=r.a.extend({},o.a,i.a)},function(t,e,n){"use strict";function r(t,e,n){if(t=parseFloat(t),!isFinite(t)||!t&&0!==t)return"";e=null!=e?e:"¥",n=null!=n?n:2;var r=Math.abs(t).toFixed(n),o=n?r.slice(0,-1-n):r,i=o.length%3,a=i>0?o.slice(0,i)+(o.length>3?",":""):"",u=n?r.slice(-1-n):"";return(t<0?"-":"")+e+a+o.slice(i).replace(/(\d{3})(?=\d)/g,"$1,")+u}e.a={currency:r}},function(t,e,n){"use strict";var r=n(2);e.a={formatTime:r.a.formatTime}},function(t,e,n){"use strict";function r(){var t=n.i(c.a)();if(!a.a)throw new Error("Please call Vue.use(Solo) before star app");if(!t.pages)throw new Error("Please declare your pages before start app. Use Solo.config({pages}) to set your pages");var e=a.a.extend({mixins:[f.a],components:t.pages}),r=new l.a(t);new a.a({beforeCreate:function(){this._router=this.$options.router,this._router.init(),a.a.util.defineReactive(this._router,"currentPage",this._router.currentPage),a.a.util.defineReactive(this._router,"modal",this._router.modal)},template:"<soloApp/>",router:r,components:{SoloApp:e}}).$mount(t.mountAt)}function o(t){h||(h=!0,n.i(c.a)(t),r())}Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),a=n(16),u=n(51),c=n(21),s=n(53),f=n.n(s),l=n(52),p={version:"2.0"},h=!1;p.start=o,p.install=a.b,p.Page=u.a,p.config=c.a,p.utils=i.a,"undefined"!=typeof window&&window.Vue&&window.Vue.use(p),window.Solo=p,e.default=p},function(t,e,n){"use strict";function r(t,e,n){this.$children.forEach(function(o){o.$options.componentName===t?o.$emit.apply(o,i()([e].concat(n))):r.apply(o,[t,e].concat(n))})}var o=n(72),i=n.n(o);e.a={methods:{dispatch:function(t,e,n){for(var r=this.$parent,o=r.$options.componentName;r&&(!o||o!==t);)(r=r.$parent)&&(o=r.$options.componentName);if(r){var a;(a=r).$emit.apply(a,i()([e].concat(n)))}},broadcast:function(t,e,n){r.call(this,t,e,n)}}}},function(t,e,n){"use strict";var r=n(62),o=n(60),i=n(2);e.a=i.a.extend(!0,{},r.a,o.a)},function(t,e,n){"use strict";function r(t){if(t.metaKey||t.ctrlKey||t.shiftKey)return!1;if(t.defaultPrevented)return!1;if(void 0!==t.button&&0!==t.button)return!1;if(t.target&&t.target.getAttribute){var e=t.target.getAttribute("target");if(/\b_blank\b/i.test(e))return!1}return t.preventDefault(),!0}e.a={mounted:function(){"page"===this.$options.name||!this.soloRouteLoad&&this.soloRouteBack===!1||this.$el.addEventListener(this.soloRouteEvent,this.onSoloLinkClick)},beforeDestroy:function(){this.$el.removeEventListener(this.soloRouteEvent,this.onSoloLinkClick)},props:{soloRouteLoad:[String,Object],soloBeforeRoute:Function,soloRouteEvent:{type:String,default:"click"},soloRouteBack:[Boolean,String,Object]},methods:{onSoloLinkClick:function(t){r(t)&&("function"==typeof this.soloBeforeRoute?this.soloBeforeRoute(t,this.soloGoNextPage):this.soloGoNextPage())},soloGoNextPage:function(t){t!==!1&&(this.soloRouteLoad?this.$router.load(this.soloRouteLoad):this.$router.back(this.soloRouteBack))}}}},function(t,e,n){"use strict";var r=n(37),o=n.n(r),i=n(38),a=n.n(i),u=n(35),c=n(2),s=n(16),f=n(34),l=function(){function t(e){o()(this,t),this.router=e,this.stack=[],this.current=null}return a()(t,[{key:"listen",value:function(t){this.cb=t}},{key:"getModal",value:function(){return this.current&&"page"!==this.current.type&&this.current}},{key:"getCurrentPage",value:function(){for(var t=this.current,e=this.stack.length-1;e--&&t&&"page"!==t.type;)t=this.stack[e];return t}},{key:"load",value:function(t){var e=this;if(t.path!==f.a.getHash()){var n=function(){e.current=t,e.stack.length?window.location.hash=t.path:e.replace(t.path),e.stack.push(t),e.cb(e.current,e.getCurrentPage(),e.getModal())};if("page"===t.type){var r=this.getCurrentPage();this.fixHash(r&&r.path,n)}else n()}}},{key:"back",value:function(t,e){var n=this,r=this.stack;if(!(r.length<2)){"string"==typeof t?t={viewName:t}:t||(t={}),c.a.extend(t,e);var o=void 0;if(t.path)o=f.a.findIndex(r,function(e){return e.path===t.path});else if(t.viewName)o=f.a.findIndex(r,function(e){return e.viewName===t.viewName||e.isHome});else{if(this.current.isHome&&"page"===this.current.type)return;o=r.length-2}if(o!==-1&&o!==r.length-1){var i=this.router.noramlizeRoute(r[o]);i.transition=this.router.getRouteTransition(c.a.extend(this.current,{transition:t.transition})),this.fixHash(i.path,function(){i.viewData=t.viewData,n.current=i,n.cb(n.current,n.getCurrentPage(),n.getModal())})}}}},{key:"setupHashListener",value:function(){var t=this;window.addEventListener("hashchange",function(){t.onHashChange()})}},{key:"onHashChange",value:function(){var t=f.a.getHash();if(t!==this.current.path){if(f.a.callPageBack(this.current)===!1)return void(window.location.hash=this.current.path);if(this.current.isHome&&"page"===this.current.type)return void this.replace(this.current.path);var e=f.a.findIndex(this.stack,function(e){return e.path===t});e!==-1&&e!==this.stack.length-1&&this.back({path:t})}}},{key:"replace",value:function(t,e){t!==f.a.getHash()&&window.location.replace("#"+t),e&&e()}},{key:"fixHash",value:function(t,e){if(!t||!this.current||this.current.path===t)return void(e&&e());var r=this.stack,o=r.length,i=(this.current,this.stack[o-2]),a="page"!==this.current.type;if(o>=2&&this.stack[o-2].path===t&&f.a.getHash()===t)this.router.invalidViews.push(r.pop());else{var c=f.a.findIndex(r,function(e){return e.path===t});if(c!==-1)for(;--o&&o>c;)window.history.back(),this.router.invalidViews.push(r.pop())}e&&e(),a&&i&&s.a.nextTick(function(){n.i(u.a)(i.$vm,"activated")})}}]),t}();e.a=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(36),o=n.n(r);e.default={data:function(){return{componentName:""}},computed:{route:function(){return this.$router.currentPage},modal:function(){if(this.$router.modal){var t=o()({},this.$router.modal);return t.className="solo-modal solo-"+t.type,"panel"===t.type&&(t.className+=" solo-"+t.type+"-"+t.position),t}return this.$router.modal},hasMask:function(){return"panel"===o()([],this.$router.modal).type}},methods:{pageCreated:function(){},closeMask:function(){this.$router.back()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{showBack:{type:[String,Boolean],default:!1},title:String},computed:{backText:function(){return"boolean"==typeof this.showBack?"":this.showBack}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(21);e.default={props:{title:String},activated:function(){this.title&&r.b.kk&&r.b.kk.app.setTitle(this.title)}}},function(t,e,n){t.exports={default:n(74),__esModule:!0}},function(t,e,n){t.exports={default:n(76),__esModule:!0}},function(t,e,n){t.exports={default:n(77),__esModule:!0}},function(t,e,n){t.exports={default:n(78),__esModule:!0}},function(t,e,n){t.exports={default:n(79),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(67),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,o.default)(t)}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(71),i=r(o),a=n(70),u=r(a),c="function"==typeof u.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof u.default&&t.constructor===u.default&&t!==u.default.prototype?"symbol":typeof t};e.default="function"==typeof u.default&&"symbol"===c(i.default)?function(t){return void 0===t?"undefined":c(t)}:function(t){return t&&"function"==typeof u.default&&t.constructor===u.default&&t!==u.default.prototype?"symbol":void 0===t?"undefined":c(t)}},function(t,e,n){n(50),n(103),t.exports=n(1).Array.from},function(t,e,n){n(105),t.exports=n(1).Object.assign},function(t,e,n){n(106);var r=n(1).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){n(107),t.exports=n(1).Object.getPrototypeOf},function(t,e,n){n(109),n(108),n(110),n(111),t.exports=n(1).Symbol},function(t,e,n){n(50),n(112),t.exports=n(33).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(7),o=n(49),i=n(101);t.exports=function(t){return function(e,n,a){var u,c=r(e),s=o(c.length),f=i(a,s);if(t&&n!=n){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(22),o=n(0)("toStringTag"),i="Arguments"==r(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),o))?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){"use strict";var r=n(4),o=n(14);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},function(t,e,n){var r=n(13),o=n(26),i=n(18);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var a,u=n(t),c=i.f,s=0;u.length>s;)c.call(t,a=u[s++])&&e.push(a);return e}},function(t,e,n){t.exports=n(3).document&&document.documentElement},function(t,e,n){var r=n(12),o=n(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(22);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(11);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){"use strict";var r=n(44),o=n(14),i=n(27),a={};n(10)(a,n(0)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(0)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:n=!0}},i[r]=function(){return a},t(i)}catch(t){}return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(13),o=n(7);t.exports=function(t,e){for(var n,i=o(t),a=r(i),u=a.length,c=0;u>c;)if(i[n=a[c++]]===e)return n}},function(t,e,n){var r=n(20)("meta"),o=n(17),i=n(6),a=n(4).f,u=0,c=Object.isExtensible||function(){return!0},s=!n(9)(function(){return c(Object.preventExtensions({}))}),f=function(t){a(t,r,{value:{i:"O"+ ++u,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";f(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;f(t)}return t[r].w},h=function(t){return s&&v.NEED&&c(t)&&!i(t,r)&&f(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:h}},function(t,e,n){"use strict";var r=n(13),o=n(26),i=n(18),a=n(19),u=n(42),c=Object.assign;t.exports=!c||n(9)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=a(t),c=arguments.length,s=1,f=o.f,l=i.f;c>s;)for(var p,h=u(arguments[s++]),v=f?r(h).concat(f(h)):r(h),d=v.length,y=0;d>y;)l.call(h,p=v[y++])&&(n[p]=h[p]);return n}:c},function(t,e,n){var r=n(4),o=n(11),i=n(13);t.exports=n(5)?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),u=a.length,c=0;u>c;)r.f(t,n=a[c++],e[n]);return t}},function(t,e,n){var r=n(18),o=n(14),i=n(7),a=n(31),u=n(6),c=n(41),s=Object.getOwnPropertyDescriptor;e.f=n(5)?s:function(t,e){if(t=i(t),e=a(e,!0),c)try{return s(t,e)}catch(t){}if(u(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(7),o=n(45).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return o(t)}catch(t){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?u(t):o(r(t))}},function(t,e,n){var r=n(8),o=n(1),i=n(9);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},function(t,e,n){var r=n(30),o=n(23);t.exports=function(t){return function(e,n){var i,a,u=String(o(e)),c=r(n),s=u.length;return c<0||c>=s?t?"":void 0:(i=u.charCodeAt(c),i<55296||i>56319||c+1===s||(a=u.charCodeAt(c+1))<56320||a>57343?t?u.charAt(c):i:t?u.slice(c,c+2):a-56320+(i-55296<<10)+65536)}}},function(t,e,n){var r=n(30),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(83),o=n(0)("iterator"),i=n(12);t.exports=n(1).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){"use strict";var r=n(39),o=n(8),i=n(19),a=n(89),u=n(87),c=n(49),s=n(84),f=n(102);o(o.S+o.F*!n(91)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,l,p=i(t),h="function"==typeof this?this:Array,v=arguments.length,d=v>1?arguments[1]:void 0,y=void 0!==d,g=0,m=f(p);if(y&&(d=r(d,v>2?arguments[2]:void 0,2)),void 0==m||h==Array&&u(m))for(e=c(p.length),n=new h(e);e>g;g++)s(n,g,y?d(p[g],g):p[g]);else for(l=m.call(p),n=new h;!(o=l.next()).done;g++)s(n,g,y?a(l,d,[o.value,g],!0):o.value);return n.length=g,n}})},function(t,e,n){"use strict";var r=n(81),o=n(92),i=n(12),a=n(7);t.exports=n(43)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(8);r(r.S+r.F,"Object",{assign:n(95)})},function(t,e,n){var r=n(8);r(r.S+r.F*!n(5),"Object",{defineProperty:n(4).f})},function(t,e,n){var r=n(19),o=n(46);n(99)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,e){},function(t,e,n){"use strict";var r=n(3),o=n(6),i=n(5),a=n(8),u=n(48),c=n(94).KEY,s=n(9),f=n(29),l=n(27),p=n(20),h=n(0),v=n(33),d=n(32),y=n(93),g=n(85),m=n(88),b=n(11),w=n(7),x=n(31),k=n(14),_=n(44),O=n(98),P=n(97),S=n(4),j=n(13),$=P.f,A=S.f,N=O.f,M=r.Symbol,C=r.JSON,E=C&&C.stringify,T=h("_hidden"),R=h("toPrimitive"),F={}.propertyIsEnumerable,D=f("symbol-registry"),L=f("symbols"),B=f("op-symbols"),I=Object.prototype,H="function"==typeof M,V=r.QObject,K=!V||!V.prototype||!V.prototype.findChild,Y=i&&s(function(){return 7!=_(A({},"a",{get:function(){return A(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=$(I,e);r&&delete I[e],A(t,e,n),r&&t!==I&&A(I,e,r)}:A,z=function(t){var e=L[t]=_(M.prototype);return e._k=t,e},W=H&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},G=function(t,e,n){return t===I&&G(B,e,n),b(t),e=x(e,!0),b(n),o(L,e)?(n.enumerable?(o(t,T)&&t[T][e]&&(t[T][e]=!1),n=_(n,{enumerable:k(0,!1)})):(o(t,T)||A(t,T,k(1,{})),t[T][e]=!0),Y(t,e,n)):A(t,e,n)},U=function(t,e){b(t);for(var n,r=g(e=w(e)),o=0,i=r.length;i>o;)G(t,n=r[o++],e[n]);return t},J=function(t,e){return void 0===e?_(t):U(_(t),e)},Q=function(t){var e=F.call(this,t=x(t,!0));return!(this===I&&o(L,t)&&!o(B,t))&&(!(e||!o(this,t)||!o(L,t)||o(this,T)&&this[T][t])||e)},q=function(t,e){if(t=w(t),e=x(e,!0),t!==I||!o(L,e)||o(B,e)){var n=$(t,e);return!n||!o(L,e)||o(t,T)&&t[T][e]||(n.enumerable=!0),n}},Z=function(t){for(var e,n=N(w(t)),r=[],i=0;n.length>i;)o(L,e=n[i++])||e==T||e==c||r.push(e);return r},X=function(t){for(var e,n=t===I,r=N(n?B:w(t)),i=[],a=0;r.length>a;)!o(L,e=r[a++])||n&&!o(I,e)||i.push(L[e]);return i};H||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===I&&e.call(B,n),o(this,T)&&o(this[T],t)&&(this[T][t]=!1),Y(this,t,k(1,n))};return i&&K&&Y(I,t,{configurable:!0,set:e}),z(t)},u(M.prototype,"toString",function(){return this._k}),P.f=q,S.f=G,n(45).f=O.f=Z,n(18).f=Q,n(26).f=X,i&&!n(25)&&u(I,"propertyIsEnumerable",Q,!0),v.f=function(t){return z(h(t))}),a(a.G+a.W+a.F*!H,{Symbol:M});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)h(tt[et++]);for(var tt=j(h.store),et=0;tt.length>et;)d(tt[et++]);a(a.S+a.F*!H,"Symbol",{for:function(t){return o(D,t+="")?D[t]:D[t]=M(t)},keyFor:function(t){if(W(t))return y(D,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){K=!0},useSimple:function(){K=!1}}),a(a.S+a.F*!H,"Object",{create:J,defineProperty:G,defineProperties:U,getOwnPropertyDescriptor:q,getOwnPropertyNames:Z,getOwnPropertySymbols:X}),C&&a(a.S+a.F*(!H||s(function(){var t=M();return"[null]"!=E([t])||"{}"!=E({a:t})||"{}"!=E(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!W(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&m(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!W(e))return e}),r[1]=e,E.apply(C,r)}}}),M.prototype[R]||n(10)(M.prototype,R,M.prototype.valueOf),l(M,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){n(32)("asyncIterator")},function(t,e,n){n(32)("observable")},function(t,e,n){n(104);for(var r=n(3),o=n(10),i=n(12),a=n(0)("toStringTag"),u=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;c<5;c++){var s=u[c],f=r[s],l=f&&f.prototype;l&&!l[a]&&o(l,a,s),i[s]=i.Array}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"solo-page-footer"},[t._t("footer-content")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"solo-page-header"},[n("div",{staticClass:"solo-page-header-left"},[n("a",{directives:[{name:"show",rawName:"v-show",value:t.showBack,expression:"showBack"}],staticClass:"solo-page-header-back",on:{click:function(e){t.$emit("on-click-back")}}},[t._v(t._s(t.backText))]),t._v(" "),t._t("header-left")],2),t._v(" "),n("p",{staticClass:"solo-page-header-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"solo-page-header-right"},[t._t("header-right")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"solo-page-content"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"solo-page"},[t._t("header"),t._v(" "),t._t("footer"),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"solo-app"},[t.route&&t.route.viewName?[n("transition",{attrs:{name:t.route.transition}},[n("keep-alive",[n(t.route.viewName,{key:t.route.path,tag:"component",attrs:{"page-data":t.route.viewData},on:{"page-created":t.pageCreated}})],1)],1)]:t._e(),t._v(" "),n("transition",{attrs:{name:"mask-fade"}},[t.hasMask?[n("div",{staticClass:"solo-mask",on:{click:t.closeMask}})]:t._e()],2),t._v(" "),t.modal?[n("transition",{attrs:{name:t.modal.transition}},[n("keep-alive",[n(t.modal.viewName,{key:t.route.path,tag:"component",class:t.modal.className,attrs:{"page-data":t.modal.viewData}})],1)],1)]:t._e()],2)},staticRenderFns:[]}},function(t,e,n){n(115);var r=n(15)(null,n(120),null,null);t.exports=r.exports},function(t,e,n){n(113);var r=n(15)(null,n(118),null,null);t.exports=r.exports},function(t,e,n){n(114);var r=n(15)(n(65),n(119),null,null);t.exports=r.exports},function(t,e,n){n(116);var r=n(15)(n(66),n(121),null,null);t.exports=r.exports}])});