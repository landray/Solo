/*!
 * Solo v2.1.6
 * Copyright© 2017 深圳市蓝凌软件股份有限公司版权所有
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Solo=e():t.Solo=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=60)}([function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(29)("wks"),o=n(20),i=n(3).Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},function(t,e,n){"use strict";var r=n(74),o=n.n(r),i={}.hasOwnProperty,a={type:function(t,e){var n=void 0;return null!=t?(n=Object.prototype.toString.call(t),1===arguments.length?n.slice(8,-1):n.toLowerCase()===("[object "+e+"]").toLowerCase()):(n=String(t),arguments.length>1?n.toLowerCase()===String(e).toLowerCase():n)},kebabCase:function(t){return String(t).replace(/[A-Z]/g,function(t){return"-"+t}).replace(/(^-+|-+$)/,"").toLowerCase()},isArray:Array.isArray,isArrayLike:function(t){var e=t&&t.length;return!!t&&(a.isArray(t)||e>>0===e&&e>=0&&(!e||e-1 in t))},isWindow:function(t){return!(null==t||!t.window||t!==t.window)},isPlainObject:function(t){return a.type(t,"object")&&!a.isWindow(t)&&o()(t)===Object.prototype},prefix:function(t,e,n){return null==e&&(e="0"),null==n&&(n=2),t=String(t),t.length<n&&(e=String(e).charAt(0),t=Array(n-t.length+1).join(e)+t),t},formatTime:function(t,e){null==e&&(e="YYYY-MM-DD hh:mm:ss");var n=new Date(t);if(!e||isNaN(n.valueOf()))return"";var r=n.getMonth()+1,o=n.getDate(),i=n.getHours(),u=n.getMinutes(),s=n.getSeconds(),c=n.getMilliseconds(),f={YY:a.prefix(n.getYear()%100),YYYY:n.getFullYear(),MM:a.prefix(r),M:r,DD:a.prefix(o),D:o,hh:a.prefix(i),h:i,mm:a.prefix(u),m:u,ss:a.prefix(s),s:s,ms:c};return e.replace(/[a-z]+/gi,function(t){var e=void 0;return null!=(e=f[t])?e:t})},parseDate:function(t){var e=null,n=void 0;if("string"==typeof t){if(n=t.replace(/^[^\d]*|[^\d]*$/g,"").split(/[^\d]/),!n.length||!/\d/.test(t))return null;e=new Date(n[0],n[1]-1||0,n[2]||1,n[3]||0,n[4]||0,n[5]||0,n[6]||0),isNaN(e.valueOf())&&(e=null)}return e},each:function(t,e,n){if(t&&e)if(a.isArrayLike(t)){if(a.isArray(t)&&t.forEach)return void t.forEach(e,n);var r=0,o=0,u=void 0,s=void 0;for(u=t.length;o<u;r=++o)s=t[r],e.call(n,s,r,t)}else{var c=void 0,f=void 0;for(c in t)i.call(t,c)&&(f=t[c],e.call(n,f,c,t))}},getQueryData:function(t){var e={};return null==t&&(t=location.search),(t=(""+t).replace(/^[?|#]/,"").trim())?(t=t.split("&"),t.forEach(function(t){var n=t.split("=");try{e[decodeURIComponent(n[0])]=void 0===n[1]?"":decodeURIComponent(n[1])}catch(t){e[n[0]]=n[1]}}),e):e},extend:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e[0],o=!1;"boolean"==typeof e[0]&&(o=e.shift(),r=e[0]);var u="boolean"!=typeof e[e.length-1]||e.pop(),s=1;1===e.length&&(r=a.isWindow(this)?{}:this,s=0),r||(r={});for(var c=void 0,f=void 0,l=void 0,p=void 0;s<e.length;)if(c=e[s++])for(f in c)i.call(c,f)&&(l=c[f],!u&&f in r||(o&&l&&(a.isArray(l)||a.isPlainObject(l))?(p=a.isArray(l)?r[f]||[]:r[f]||{},r[f]=a.extend(o,p,l,u)):r[f]=l));return r},debounce:function(t,e){var n=null,r=void 0;return(isNaN(e)||e<0)&&(e=200),function(){for(var o=this,i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];return clearTimeout(n),n=setTimeout(function(){r=t.apply(o,a)},e),r}},throttle:function(t,e){var n=0,r=null,o=void 0;return(isNaN(e)||e<0)&&(e=200),function(){for(var i=this,a=arguments.length,u=Array(a),s=0;s<a;s++)u[s]=arguments[s];var c=+new Date;0===n&&(n=c);var f=e-(c-n);return clearTimeout(r),f<=0||f>e?(n=c,o=t.apply(this,u)):r=setTimeout(function(){n=+new Date,o=t.apply(i,u)},f),o}}};e.a=a},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(12),o=n(44),i=n(31),a=Object.defineProperty;e.f=n(5)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){t.exports=!n(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(45),o=n(23);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(3),o=n(0),i=n(42),a=n(10),u=function(t,e,n){var s,c,f,l=t&u.F,p=t&u.G,h=t&u.S,v=t&u.P,d=t&u.B,y=t&u.W,g=p?o:o[e]||(o[e]={}),m=g.prototype,b=p?r:h?r[e]:(r[e]||{}).prototype;p&&(n=e);for(s in n)(c=!l&&b&&void 0!==b[s])&&s in g||(f=c?b[s]:n[s],g[s]=p&&"function"!=typeof b[s]?n[s]:d&&c?i(f,r):y&&b[s]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((g.virtual||(g.virtual={}))[s]=f,t&u.R&&m&&!m[s]&&a(m,s,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(4),o=n(14);t.exports=n(5)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(50),o=n(24);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(18);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports={}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(23);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";function r(t){if(!u.a.type(t.pages,"Object"))throw new Error("Please declare your pages before start app. Use Solo.config({pages}) to set your pages");var e={};u.a.each(t.pages,function(t,n){e[u.a.kebabCase(n)]=t}),t.pages=e,t.homePage&&(t.homePage=u.a.kebabCase(t.homePage)),t.enterPage?t.enterPage=u.a.kebabCase(t.enterPage):t.enterPage=t.homePage;var n=a()(e)[0];return t.enterPage in e||(console.warn(t.enterPage+" not exists, enterPage was reset to "+n),t.enterPage=n),t.homePage in e||(console.warn(t.homePage+" not exists, homePage was reset to "+t.enterPage),t.homePage=t.enterPage),t.kk||(t.kk=window.kk),t.kk&&"function"==typeof t.kk.isKK&&t.kk.isKK()||(t.kk=!1),t}function o(){return arguments.length?r(u.a.extend(!0,s,(arguments.length<=0?void 0:arguments[0])||{})):s}n.d(e,"b",function(){return s}),e.a=o;var i=n(38),a=n.n(i),u=n(2),s={appName:"",pageTransition:{in:"slide-left",out:"slide-right"},popupTransition:{in:"slide-up",out:"slide-down"},panelTransition:{in:"slide-to",out:"slide-from"},beforeLaunch:null,mountAt:"#app"}},function(t,e,n){"use strict";function r(t){u.a.each(s.a,function(e,n){t.filter(n,e)})}function o(t){t.mixin(c.a)}function i(t){u.a.each(f.a,function(e,n){t.component(n,e)})}function a(t){a.installed||(a.installed=!0,l=t,r(t),o(t),Object.defineProperty(t.prototype,"$router",{get:function(){return this.$root._router}}),i(t))}n.d(e,"a",function(){return l}),e.b=a;var u=n(2),s=n(66),c=n(67),f=n(36),l=void 0},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(o=t,i=t.default);var u="function"==typeof i?i.options:i;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var s=Object.create(u.computed||null);Object.keys(r).forEach(function(t){var e=r[t];s[t]=function(){return e}}),u.computed=s}return{esModule:o,exports:i,options:u}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports=!0},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(4).f,o=n(6),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(29)("keys"),o=n(20);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(3),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(18);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(3),o=n(0),i=n(25),a=n(33),u=n(4).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:a.f(t)})}},function(t,e,n){e.f=n(1)},function(t,e,n){"use strict";var r=n(2),o=n(17);e.a={noramlizeViewType:function(t){var e=["page","panel","popup"];return t=String(t).toLowerCase(),-1===e.indexOf(t)?"page":t},getPathInfo:function(t){var e=/^(\/(\w+)(?:(?:\/\w+)*?)(?:\/(\w+))?)(?:!(\w+))?@(\d+)(\?.*)?$/,n=e.exec(t);return n?{basePath:n[1],rootViewName:n[2],currentViewName:n[3]||n[2],viewType:n[4]||"page",createdAt:n[5],query:n[6]&&r.a.getQueryData(n[6])}:null},findIndex:function(t,e){for(var n=t.length;n--;)if(e(t[n],n,t))return n;return-1},getHash:function(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.slice(e+1)},callPageBack:function(t){if(!t||"function"!=typeof t.$vm.$options.pageBack)return!0;var e=t.$vm,n=e.$options.pageBack;return!!n.isCalling||(n.isCalling=!0,o.a.nextTick(function(){n.isCalling=!1}),n.call(e))}}},function(t,e,n){"use strict";function r(t,e){var n=t.$options[e];if(n)for(var r=0,o=n.length;r<o;r++)n[r].call(t);t.$emit("hook:"+e)}function o(t,e){r(t.$children[0],e),r(t,e)}e.a=o},function(t,e,n){"use strict";var r=n(128),o=n.n(r),i=n(59),a=n(58),u=n(57),s=n(127),c=n.n(s);e.a={page:o.a,routerLink:i.a,pageHeader:a.a,pageFooter:u.a,pageContent:c.a}},function(t,e,n){t.exports={default:n(79),__esModule:!0}},function(t,e,n){t.exports={default:n(82),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(73),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){"use strict";e.__esModule=!0;var r=n(72),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,o.default)(t)}},function(t,e,n){var r=n(84);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(18),o=n(3).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=!n(5)&&!n(9)(function(){return 7!=Object.defineProperty(n(43)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(22);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){"use strict";var r=n(25),o=n(8),i=n(52),a=n(10),u=n(6),s=n(13),c=n(94),f=n(27),l=n(49),p=n(1)("iterator"),h=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,d,y,g,m){c(n,e,d);var b,w,k,x=function(t){if(!h&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},_=e+" Iterator",O="values"==y,P=!1,j=t.prototype,S=j[p]||j["@@iterator"]||y&&j[y],$=S||x(y),C=y?O?x("entries"):$:void 0,N="Array"==e?j.entries||S:S;if(N&&(k=l(N.call(new t)))!==Object.prototype&&(f(k,_,!0),r||u(k,p)||a(k,p,v)),O&&S&&"values"!==S.name&&(P=!0,$=function(){return S.call(this)}),r&&!m||!h&&!P&&j[p]||a(j,p,$),s[e]=$,s[_]=v,y)if(b={values:O?$:x("values"),keys:g?$:x("keys"),entries:C},m)for(w in b)w in j||i(j,w,b[w]);else o(o.P+o.F*(h||P),e,b);return b}},function(t,e,n){var r=n(12),o=n(100),i=n(24),a=n(28)("IE_PROTO"),u=function(){},s=function(){var t,e=n(43)("iframe"),r=i.length;for(e.style.display="none",n(90).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=r(t),n=new u,u.prototype=null,n[a]=t):n=s(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(50),o=n(24).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(6),o=n(15),i=n(28)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){var r=n(6),o=n(7),i=n(86)(!1),a=n(28)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),s=0,c=[];for(n in u)n!=a&&r(u,n)&&c.push(n);for(;e.length>s;)r(u,n=e[s++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){var r=n(8),o=n(0),i=n(9);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},function(t,e,n){t.exports=n(10)},function(t,e,n){var r=n(30),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){"use strict";var r=n(103)(!0);n(46)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){n(118);var r=n(21)(n(70),n(124),null,null);t.exports=r.exports},function(t,e,n){"use strict";function r(){var t=n.i(c.a)(null);if(!u.a)throw new Error("Please call Vue.use(Solo) before start app");var e=u.a.extend({mixins:[l.a],components:t.pages}),r=new h.a(t);new u.a({beforeCreate:function(){this._router=this.$options.router,this._router.init(),u.a.util.defineReactive(this._router,"currentPage",this._router.currentPage),u.a.util.defineReactive(this._router,"modal",this._router.modal),t.kk&&(this._kk=t.kk,Object.defineProperty(u.a.prototype,"$kk",{get:function(){return this.$root._kk}}))},template:"<soloApp/>",router:r,components:{SoloApp:e}}).$mount(t.mountAt),v.load=function(){r.load.apply(r,arguments)},v.back=function(){r.back.apply(r,arguments)}}function o(t){var e=n.i(c.a)();if("function"!=typeof e.beforeLaunch)return void r();e.beforeLaunch.length<2?(e.beforeLaunch.call(e,t),r()):e.beforeLaunch.call(e,t,r)}function i(t){d||(d=!0,t=n.i(c.a)(t),t.kk?t.kk.ready(o):o())}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),u=n(17),s=n(64),c=n(16),f=n(126),l=n.n(f),p=n(36),h=n(68),v={component:p.a,version:"2.1.6"},d=!1;v.start=i,v.install=u.b,v.Page=s.a,v.config=c.a,v.utils=a.a,"undefined"!=typeof window&&window.Vue&&window.Vue.use(v),e.default=v},function(t,e,n){"use strict";var r=n(55),o=n.n(r);e.a={name:"page-footer",data:function(){return{wrapperClass:"solo-page-footer",isHeader:!1}},extends:o.a}},function(t,e,n){"use strict";var r=n(55),o=n.n(r);e.a={name:"page-header",data:function(){return{wrapperClass:"solo-page-header",isHeader:!0}},extends:o.a}},function(t,e,n){"use strict";e.a={name:"router-link",props:{tag:{type:String,default:"a"},disabled:Boolean,load:{type:String,required:!1},back:{type:String,required:!1},params:{required:!1}},mounted:function(){this.$el.addEventListener("click",this.onClick)},beforeDestroy:function(){this.$el.removeEventListener("click",this.onClick)},methods:{onClick:function(){this.disabled||(void 0!==this.back?this.back?this.$router.back(this.back,{viewData:this.params}):this.$router.back({viewData:this.params}):this.load&&this.$router.load(this.load,{viewData:this.params}))}},render:function(t){return t(this.tag,{attrs:{disabled:this.disabled}},this.$slots.default)}}},function(t,e,n){t.exports=n(56).default},function(t,e,n){"use strict";function r(t,e,n){var r=/(\d{3})(?=\d)/g;if(t=parseFloat(t),!isFinite(t)||!t&&0!==t)return"";e=null!=e?e:"¥",n=null!=n?n:2;var o=Math.abs(t).toFixed(n),i=n?o.slice(0,-1-n):o,a=i.length%3,u=a>0?i.slice(0,a)+(i.length>3?",":""):"",s=n?o.slice(-1-n):"";return(t<0?"-":"")+e+u+i.slice(a).replace(r,"$1,")+s}e.a={currency:r}},function(t,e,n){"use strict";var r=n(2);e.a={formatTime:r.a.formatTime}},function(t,e,n){"use strict";function r(t,e,n){this.$children.forEach(function(o){o.$options.componentName===t?o.$emit.apply(o,i()([e].concat(n))):r.apply(o,[t,e].concat(n))})}var o=n(41),i=n.n(o);e.a={methods:{dispatch:function(t,e,n){for(var r=this.$parent,o=r.$options.componentName;r&&(!o||o!==t);)(r=r.$parent)&&(o=r.$options.componentName);if(r){var a;(a=r).$emit.apply(a,i()([e].concat(n)))}},broadcast:function(t,e,n){r.call(this,t,e,n)}}}},function(t,e,n){"use strict";e.a={props:["view-data"],mounted:function(){this.$emit("page-created",this),this.$router.current.$vm=this},beforeDestroy:function(){this.$emit("page-before-destroy",this)}}},function(t,e,n){"use strict";var r=n(41),o=n.n(r),i=n(39),a=n.n(i),u=n(40),s=n.n(u),c=n(35),f=n(2),l=n(16),p=n(17),h=n(34),v=function(){function t(e){a()(this,t),this.router=e,this.stack=[],this.current=null}return s()(t,[{key:"listen",value:function(t){this.cb=t}},{key:"getModal",value:function(){return this.current&&"page"!==this.current.type&&this.current}},{key:"getCurrentPage",value:function(){for(var t=this.current,e=this.stack.length-1;e--&&t&&"page"!==t.type;)t=this.stack[e];return t}},{key:"load",value:function(t){var e=this;if(t.path!==h.a.getHash()){if(t.viewName=f.a.kebabCase(t.viewName),!(t.viewName in l.b.pages))return void console.warn("can not load page "+t.viewName+": not exists");var n=function(){e.current=t;var n=t.replace&&"page"===t.type;e.stack.length&&!n?window.location.hash=t.path:e.replace(t.path),n&&e.stack.length&&e.router.invalidViews.push(e.stack.pop()),e.stack.push(t),e.cb(e.current,e.getCurrentPage(),e.getModal())},r=this.getCurrentPage();this.fixHash(r&&r.path,n,!0)}}},{key:"back",value:function(t){var e=this,n=this.stack;if(!(n.length<2)){t.viewName&&(t.viewName=f.a.kebabCase(t.viewName));var r=void 0;if(t.path)r=h.a.findIndex(n,function(e){return e.path===t.path});else if(t.viewName)r=h.a.findIndex(n,function(e){return e.viewName===t.viewName||e.isHome});else{if(this.current.isHome&&"page"===this.current.type)return;r=n.length-2}if(-1!==r&&r!==n.length-1){var o=this.router.noramlizeRoute(n[r]);void 0!==t.transition?o.transition=this.router.getRouteTransition(f.a.extend(this.current,{transition:t.transition})):o.transition=this.router.getRouteTransition(this.current),this.fixHash(o.path,function(){o.viewData=t.viewData,e.current=o,e.cb(e.current,e.getCurrentPage(),e.getModal())})}}}},{key:"setupHashListener",value:function(){var t=this;window.addEventListener("hashchange",function(){t.onHashChange()})}},{key:"onHashChange",value:function(){var t=h.a.getHash();if(t!==this.current.path){var e=h.a.findIndex(this.stack,function(e){return e.path===t});if(-1!==e&&e!==this.stack.length-1)return!1===h.a.callPageBack(this.current)?void(window.location.hash=this.current.path):this.current.isHome&&"page"===this.current.type?void this.replace(this.current.path):void this.back({path:t})}}},{key:"replace",value:function(t,e){t!==h.a.getHash()&&window.location.replace("#"+t),e&&e()}},{key:"fixHash",value:function(t,e,r){if(!t||!this.current||this.current.path===t)return void(e&&e());var i=this.stack,a=i.length,u=(this.current,this.stack[a-2]),s="page"!==this.current.type;if(a>=2&&this.stack[a-2].path===t&&h.a.getHash()===t)this.router.invalidViews.push(i.pop());else{var f=h.a.findIndex(i,function(e){return e.path===t}),l=a-f-1;if(-1!==f&&l>0){var v;window.history.go(-l),(v=this.router.invalidViews).push.apply(v,o()(i.splice(-l)))}}e&&setTimeout(e,0),s&&u&&!r&&p.a.nextTick(function(){n.i(c.a)(u.$vm,"activated")})}}]),t}();e.a=v},function(t,e,n){"use strict";var r=n(2),o=n(61),i=n(62);e.a=r.a.extend({},o.a,i.a)},function(t,e,n){"use strict";var r=n(63),o=n(2);e.a=o.a.extend(!0,{},r.a)},function(t,e,n){"use strict";var r=n(77),o=n.n(r),i=n(37),a=n.n(i),u=n(39),s=n.n(u),c=n(40),f=n.n(c),l=n(35),p=(n(17),n(16)),h=n(2),v=n(65),d=n(34),y=function(){function t(e){s()(this,t),this.$options=e,this.history=new v.a(this),this.currentPage={},this.modal=null,this.current=null,this.invalidViews=[];var r=this;this.history.listen(function(t,e,o){r.current&&r.current.path===t.path||(r.current=t,r.currentPage=a()({},e),r.modal=o,e!==t&&n.i(l.a)(e.$vm,"deactivated"),setTimeout(function(){return r.clearViews()},500))})}return f()(t,[{key:"init",value:function(){var t=this,e=this.$options,n=this.noramlizeRoute({viewName:e.enterPage,viewData:e.enterPageData},!0);this.history.setupHashListener(),this.history.load(n),p.b.kk&&p.b.kk.ready(function(){return p.b.kk.app.on("back",function(){return t.onKKBack()})})}},{key:"onKKBack",value:function(){return d.a.callPageBack(this.current)}},{key:"load",value:function(t,e){e="object"===(void 0===e?"undefined":o()(e))?a()({},e,{viewName:t}):"object"===(void 0===t?"undefined":o()(t))?t:{viewName:t},this.history.load(this.noramlizeRoute(e,!0))}},{key:"back",value:function(){for(var t=void 0,e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];"boolean"==typeof n[n.length-1]&&(t=n.pop());var o=n[0];"string"==typeof o?o={viewName:o}:o||(o={}),h.a.extend(o,n[1]||{},!1),void 0===t&&"boolean"==typeof o.forceBack&&(t=o.forceBack),(t||!1!==d.a.callPageBack(this.current))&&this.history.back(o)}},{key:"clearViews",value:function(){var t=this.history.stack,e=[],n=t.length-1;this.current.isHome&&"page"===this.current.type&&n>0&&(e=t.splice(0,n),window.history.go(-n)),this.invalidViews.length&&(e=e.concat(this.invalidViews.reverse()),this.invalidViews.length=0);for(var r=void 0;r=e.pop();)r.$vm.$destroy()}},{key:"noramlizeRoute",value:function(t,e){var n=d.a.getPathInfo(this.current&&this.current.path);return t.type=d.a.noramlizeViewType(t.type),t.isHome=t.viewName===this.$options.homePage,t.createdAt=t.createdAt||+new Date,"page"!==t.type?(t.path=t.path||n.basePath+"/"+t.viewName+"!"+t.type+"@"+t.createdAt,"panel"===t.type&&(t.position=t.position||"left")):t.path=t.path||"/"+t.viewName+"@"+t.createdAt,e&&void 0===t.transition&&(t.transition=this.getRouteTransition(t,e)),t}},{key:"getRouteTransition",value:function(t,e){switch(t.type){case"popup":return this.$options.popupTransition[e?"in":"out"];case"panel":return this.$options.panelTransition[e?"in":"out"]+"-"+t.position;default:return this.$options.pageTransition[e?"in":"out"]}}}]),t}();e.a=y},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{componentName:""}},computed:{route:function(){return this.$router.currentPage},modal:function(){if(this.$router.modal){var t=this.$router.modal;return t.className="solo-modal solo-"+t.type,"panel"===t.type&&(t.className+=" solo-"+t.type+"-"+t.position),t}return this.$router.modal},hasMask:function(){var t=this.$router.modal;return t&&"panel"===t.type}},methods:{pageCreated:function(){},closeMask:function(){this.$router.back()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(38),o=n.n(r),i=n(37),a=n.n(i);e.default={name:"solo-toolbar",props:{leftOptions:Object,title:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},computed:{_leftOptions:function(){return a()({showBack:!0,preventGoBack:!1},this.leftOptions||{})},isWrapper:function(){var t=o()(this.$options.propsData);if(t&&t.length)return!1;if(this.$slots){var e=this.$slots.default;if(e&&1===e.length&&e[0].text)return!1;return!o()(this.$slots).some(function(t){return"left"===t||"right"===t})}return!0}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router.back()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(16);e.default={props:{title:String},activated:function(){var t=this.title||r.b.appName;t&&(r.b.kk&&r.b.kk.ready(function(){return r.b.kk.app.setTitle(t)}),document.title=t)}}},function(t,e,n){t.exports={default:n(78),__esModule:!0}},function(t,e,n){t.exports={default:n(80),__esModule:!0}},function(t,e,n){t.exports={default:n(81),__esModule:!0}},function(t,e,n){t.exports={default:n(120),__esModule:!0}},function(t,e,n){t.exports={default:n(83),__esModule:!0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(76),i=r(o),a=n(75),u=r(a),s="function"==typeof u.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof u.default&&t.constructor===u.default&&t!==u.default.prototype?"symbol":typeof t};e.default="function"==typeof u.default&&"symbol"===s(i.default)?function(t){return void 0===t?"undefined":s(t)}:function(t){return t&&"function"==typeof u.default&&t.constructor===u.default&&t!==u.default.prototype?"symbol":void 0===t?"undefined":s(t)}},function(t,e,n){n(54),n(105),t.exports=n(0).Array.from},function(t,e,n){n(107),t.exports=n(0).Object.assign},function(t,e,n){n(108);var r=n(0).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){n(109),t.exports=n(0).Object.getPrototypeOf},function(t,e,n){n(110),t.exports=n(0).Object.keys},function(t,e,n){n(54),n(115),t.exports=n(33).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(7),o=n(53),i=n(121);t.exports=function(t){return function(e,n,a){var u,s=r(e),c=o(s.length),f=i(a,c);if(t&&n!=n){for(;c>f;)if((u=s[f++])!=u)return!0}else for(;c>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(22),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),o))?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){"use strict";var r=n(4),o=n(14);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},function(t,e,n){var r=n(11),o=n(26),i=n(19);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var a,u=n(t),s=i.f,c=0;u.length>c;)s.call(t,a=u[c++])&&e.push(a);return e}},function(t,e,n){t.exports=n(3).document&&document.documentElement},function(t,e,n){var r=n(13),o=n(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(22);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(12);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){"use strict";var r=n(47),o=n(14),i=n(27),a={};n(10)(a,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:n=!0}},i[r]=function(){return a},t(i)}catch(t){}return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(11),o=n(7);t.exports=function(t,e){for(var n,i=o(t),a=r(i),u=a.length,s=0;u>s;)if(i[n=a[s++]]===e)return n}},function(t,e,n){var r=n(20)("meta"),o=n(18),i=n(6),a=n(4).f,u=0,s=Object.isExtensible||function(){return!0},c=!n(9)(function(){return s(Object.preventExtensions({}))}),f=function(t){a(t,r,{value:{i:"O"+ ++u,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!s(t))return"F";if(!e)return"E";f(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!s(t))return!0;if(!e)return!1;f(t)}return t[r].w},h=function(t){return c&&v.NEED&&s(t)&&!i(t,r)&&f(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:h}},function(t,e,n){"use strict";var r=n(11),o=n(26),i=n(19),a=n(15),u=n(45),s=Object.assign;t.exports=!s||n(9)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=r})?function(t,e){for(var n=a(t),s=arguments.length,c=1,f=o.f,l=i.f;s>c;)for(var p,h=u(arguments[c++]),v=f?r(h).concat(f(h)):r(h),d=v.length,y=0;d>y;)l.call(h,p=v[y++])&&(n[p]=h[p]);return n}:s},function(t,e,n){var r=n(4),o=n(12),i=n(11);t.exports=n(5)?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),u=a.length,s=0;u>s;)r.f(t,n=a[s++],e[n]);return t}},function(t,e,n){var r=n(19),o=n(14),i=n(7),a=n(31),u=n(6),s=n(44),c=Object.getOwnPropertyDescriptor;e.f=n(5)?c:function(t,e){if(t=i(t),e=a(e,!0),s)try{return c(t,e)}catch(t){}if(u(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(7),o=n(48).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return o(t)}catch(t){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?u(t):o(r(t))}},function(t,e,n){var r=n(30),o=n(23);t.exports=function(t){return function(e,n){var i,a,u=String(o(e)),s=r(n),c=u.length;return s<0||s>=c?t?"":void 0:(i=u.charCodeAt(s),i<55296||i>56319||s+1===c||(a=u.charCodeAt(s+1))<56320||a>57343?t?u.charAt(s):i:t?u.slice(s,s+2):a-56320+(i-55296<<10)+65536)}}},function(t,e,n){var r=n(87),o=n(1)("iterator"),i=n(13);t.exports=n(0).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){"use strict";var r=n(42),o=n(8),i=n(15),a=n(93),u=n(91),s=n(53),c=n(88),f=n(104);o(o.S+o.F*!n(95)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,l,p=i(t),h="function"==typeof this?this:Array,v=arguments.length,d=v>1?arguments[1]:void 0,y=void 0!==d,g=0,m=f(p);if(y&&(d=r(d,v>2?arguments[2]:void 0,2)),void 0==m||h==Array&&u(m))for(e=s(p.length),n=new h(e);e>g;g++)c(n,g,y?d(p[g],g):p[g]);else for(l=m.call(p),n=new h;!(o=l.next()).done;g++)c(n,g,y?a(l,d,[o.value,g],!0):o.value);return n.length=g,n}})},function(t,e,n){"use strict";var r=n(85),o=n(96),i=n(13),a=n(7);t.exports=n(46)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(8);r(r.S+r.F,"Object",{assign:n(99)})},function(t,e,n){var r=n(8);r(r.S+r.F*!n(5),"Object",{defineProperty:n(4).f})},function(t,e,n){var r=n(15),o=n(49);n(51)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(15),o=n(11);n(51)("keys",function(){return function(t){return o(r(t))}})},function(t,e){},function(t,e,n){"use strict";var r=n(3),o=n(6),i=n(5),a=n(8),u=n(52),s=n(98).KEY,c=n(9),f=n(29),l=n(27),p=n(20),h=n(1),v=n(33),d=n(32),y=n(97),g=n(89),m=n(92),b=n(12),w=n(7),k=n(31),x=n(14),_=n(47),O=n(102),P=n(101),j=n(4),S=n(11),$=P.f,C=j.f,N=O.f,M=r.Symbol,A=r.JSON,E=A&&A.stringify,T=h("_hidden"),D=h("toPrimitive"),F={}.propertyIsEnumerable,H=f("symbol-registry"),L=f("symbols"),R=f("op-symbols"),B=Object.prototype,I="function"==typeof M,V=r.QObject,Y=!V||!V.prototype||!V.prototype.findChild,K=i&&c(function(){return 7!=_(C({},"a",{get:function(){return C(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=$(B,e);r&&delete B[e],C(t,e,n),r&&t!==B&&C(B,e,r)}:C,W=function(t){var e=L[t]=_(M.prototype);return e._k=t,e},z=I&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},q=function(t,e,n){return t===B&&q(R,e,n),b(t),e=k(e,!0),b(n),o(L,e)?(n.enumerable?(o(t,T)&&t[T][e]&&(t[T][e]=!1),n=_(n,{enumerable:x(0,!1)})):(o(t,T)||C(t,T,x(1,{})),t[T][e]=!0),K(t,e,n)):C(t,e,n)},G=function(t,e){b(t);for(var n,r=g(e=w(e)),o=0,i=r.length;i>o;)q(t,n=r[o++],e[n]);return t},U=function(t,e){return void 0===e?_(t):G(_(t),e)},J=function(t){var e=F.call(this,t=k(t,!0));return!(this===B&&o(L,t)&&!o(R,t))&&(!(e||!o(this,t)||!o(L,t)||o(this,T)&&this[T][t])||e)},Q=function(t,e){if(t=w(t),e=k(e,!0),t!==B||!o(L,e)||o(R,e)){var n=$(t,e);return!n||!o(L,e)||o(t,T)&&t[T][e]||(n.enumerable=!0),n}},Z=function(t){for(var e,n=N(w(t)),r=[],i=0;n.length>i;)o(L,e=n[i++])||e==T||e==s||r.push(e);return r},X=function(t){for(var e,n=t===B,r=N(n?R:w(t)),i=[],a=0;r.length>a;)!o(L,e=r[a++])||n&&!o(B,e)||i.push(L[e]);return i};I||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===B&&e.call(R,n),o(this,T)&&o(this[T],t)&&(this[T][t]=!1),K(this,t,x(1,n))};return i&&Y&&K(B,t,{configurable:!0,set:e}),W(t)},u(M.prototype,"toString",function(){return this._k}),P.f=Q,j.f=q,n(48).f=O.f=Z,n(19).f=J,n(26).f=X,i&&!n(25)&&u(B,"propertyIsEnumerable",J,!0),v.f=function(t){return W(h(t))}),a(a.G+a.W+a.F*!I,{Symbol:M});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)h(tt[et++]);for(var tt=S(h.store),et=0;tt.length>et;)d(tt[et++]);a(a.S+a.F*!I,"Symbol",{for:function(t){return o(H,t+="")?H[t]:H[t]=M(t)},keyFor:function(t){if(z(t))return y(H,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),a(a.S+a.F*!I,"Object",{create:U,defineProperty:q,defineProperties:G,getOwnPropertyDescriptor:Q,getOwnPropertyNames:Z,getOwnPropertySymbols:X}),A&&a(a.S+a.F*(!I||c(function(){var t=M();return"[null]"!=E([t])||"{}"!=E({a:t})||"{}"!=E(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!z(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&m(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!z(e))return e}),r[1]=e,E.apply(A,r)}}}),M.prototype[D]||n(10)(M.prototype,D,M.prototype.valueOf),l(M,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){n(32)("asyncIterator")},function(t,e,n){n(32)("observable")},function(t,e,n){n(106);for(var r=n(3),o=n(10),i=n(13),a=n(1)("toStringTag"),u=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],s=0;s<5;s++){var c=u[s],f=r[c],l=f&&f.prototype;l&&!l[a]&&o(l,a,c),i[c]=i.Array}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){n(112),n(111),n(113),n(114),t.exports=n(0).Symbol},function(t,e,n){var r=n(30),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"solo-page"},[t._t("header"),t._v(" "),t._t("footer"),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"solo-page-content"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isWrapper?n("div",{class:t.wrapperClass},[t._t("default")],2):n("div",{staticClass:"solo-toolbar",class:t.wrapperClass},[n("div",{staticClass:"solo-toolbar-left"},[t._t("left",[n("a",{directives:[{name:"show",rawName:"v-show",value:t.isHeader&&t._leftOptions.showBack,expression:"isHeader && _leftOptions.showBack"}],staticClass:"solo-toolbar-back",on:{click:function(e){e.preventDefault(),t.onClickBack(e)}}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isHeader&&t._leftOptions.showBack,expression:"isHeader && _leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})])],2),t._v(" "),n("h1",{staticClass:"solo-toolbar-title",on:{click:function(e){t.$emit("on-click-title")}}},[t._t("default",[n("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])],2),t._v(" "),n("div",{staticClass:"solo-toolbar-right"},[t._t("right",[t.rightOptions.showMore?n("a",{staticClass:"solo-toolbar-more",on:{click:function(e){e.preventDefault(),t.$emit("on-click-more")}}}):t._e()])],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"solo-app"},[t.route&&t.route.viewName?[n("transition",{attrs:{name:t.route.transition}},[n("keep-alive",[n(t.route.viewName,{key:t.route.path,tag:"component",attrs:{"view-data":t.route.viewData},on:{"page-created":t.pageCreated}})],1)],1)]:t._e(),t._v(" "),n("transition",{attrs:{name:"mask-fade"}},[t.hasMask?[n("div",{staticClass:"solo-mask",on:{click:t.closeMask}})]:t._e()],2),t._v(" "),t.modal?[n("transition",{attrs:{name:t.modal.transition}},[n("keep-alive",[n(t.modal.viewName,{key:t.route.path,tag:"component",class:t.modal.className,attrs:{"view-data":t.modal.viewData}})],1)],1)]:t._e()],2)},staticRenderFns:[]}},function(t,e,n){n(119);var r=n(21)(n(69),n(125),null,null);t.exports=r.exports},function(t,e,n){n(117);var r=n(21)(null,n(123),null,null);t.exports=r.exports},function(t,e,n){n(116);var r=n(21)(n(71),n(122),null,null);t.exports=r.exports}])});