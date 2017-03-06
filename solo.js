/*!
 * Solo v2.0.0
 * Copyright© 2017 深圳市蓝凌软件股份有限公司版权所有
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Solo=e():t.Solo=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="./",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(){var t=(0,d.default)();if(!c._Vue)throw new Error("Please call Vue.use(Solo) before star app");if(!t.pages)throw new Error("Please declare your pages before start app. Use Solo.config({pages}) to set your pages");var e=c._Vue.extend({mixins:[v.default],components:t.pages}),n=new g.default(t);new c._Vue({beforeCreate:function(){this._router=this.$options.router,this._router.init(),c._Vue.util.defineReactive(this._router,"currentPage",this._router.currentPage),c._Vue.util.defineReactive(this._router,"modal",this._router.modal)},template:"<soloApp/>",router:n,components:{SoloApp:e}}).$mount(t.mountAt);m.load=function(){n.load.apply(n,arguments)},m.back=function(){n.back.apply(n,arguments)}}function u(t){b||(b=!0,(0,d.default)(t),i())}var a=n(7),s=o(a),c=n(55),f=n(59),l=r(f),p=n(51),d=r(p),h=n(106),v=r(h),y=n(61),g=r(y),m={version:"2.0"},b=!1;m.start=u,m.install=c.install,m.Page=l.default,m.config=d.default,s.utils.extend(m,s),"undefined"!=typeof window&&window.Vue&&window.Vue.use(m),setTimeout(function(){"undefined"!=typeof window&&(window.Solo=m)},500),t.exports=m},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){t.exports=!n(8)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(13),o=n(37),i=n(29),u=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(38),o=n(19);t.exports=function(t){return r(o(t))}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(62);Object.defineProperty(e,"utils",{enumerable:!0,get:function(){return r(o).default}})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(5),o=n(16);t.exports=n(3)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(26)("wks"),o=n(17),i=n(1).Symbol,u="function"==typeof i,a=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};a.store=r},function(t,e,n){var r=n(1),o=n(2),i=n(75),u=n(9),a="prototype",s=function(t,e,n){var c,f,l,p=t&s.F,d=t&s.G,h=t&s.S,v=t&s.P,y=t&s.B,g=t&s.W,m=d?o:o[e]||(o[e]={}),b=m[a],_=d?r:h?r[e]:(r[e]||{})[a];d&&(n=e);for(c in n)f=!p&&_&&void 0!==_[c],f&&c in m||(l=f?_[c]:n[c],m[c]=d&&"function"!=typeof _[c]?n[c]:y&&f?i(l,r):g&&_[c]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[a]=t[a],e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((m.virtual||(m.virtual={}))[c]=l,t&s.R&&b&&!b[c]&&u(b,c,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e,n){var r=n(43),o=n(20);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(14);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){t.exports={default:n(67),__esModule:!0}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports={}},function(t,e){t.exports=!0},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(5).f,o=n(4),i=n(10)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(26)("keys"),o=n(17);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(1),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(19);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(14);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(1),o=n(2),i=n(22),u=n(31),a=n(5).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(10)},function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(63),i=r(o);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(66),i=r(o),u=n(65),a=r(u),s="function"==typeof a.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":typeof t};e.default="function"==typeof a.default&&"symbol"===s(i.default)?function(t){return"undefined"==typeof t?"undefined":s(t)}:function(t){return t&&"function"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":"undefined"==typeof t?"undefined":s(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(14),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=!n(3)&&!n(8)(function(){return 7!=Object.defineProperty(n(36)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(35);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){"use strict";var r=n(22),o=n(11),i=n(44),u=n(9),a=n(4),s=n(21),c=n(79),f=n(24),l=n(42),p=n(10)("iterator"),d=!([].keys&&"next"in[].keys()),h="@@iterator",v="keys",y="values",g=function(){return this};t.exports=function(t,e,n,m,b,_,w){c(n,e,m);var x,k,O,P=function(t){if(!d&&t in N)return N[t];switch(t){case v:return function(){return new n(this,t)};case y:return function(){return new n(this,t)}}return function(){return new n(this,t)}},j=e+" Iterator",S=b==y,M=!1,N=t.prototype,E=N[p]||N[h]||b&&N[b],$=E||P(b),R=b?S?P("entries"):$:void 0,C="Array"==e?N.entries||E:E;if(C&&(O=l(C.call(new t)),O!==Object.prototype&&(f(O,j,!0),r||a(O,p)||u(O,p,g))),S&&E&&E.name!==y&&(M=!0,$=function(){return E.call(this)}),r&&!w||!d&&!M&&N[p]||u(N,p,$),s[e]=$,s[j]=g,b)if(x={values:S?$:P(y),keys:_?$:P(v),entries:R},w)for(k in x)k in N||i(N,k,x[k]);else o(o.P+o.F*(d||M),e,x);return x}},function(t,e,n){var r=n(13),o=n(84),i=n(20),u=n(25)("IE_PROTO"),a=function(){},s="prototype",c=function(){var t,e=n(36)("iframe"),r=i.length,o="<",u=">";for(e.style.display="none",n(77).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+u+"document.F=Object"+o+"/script"+u),t.close(),c=t.F;r--;)delete c[s][i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[s]=r(t),n=new a,a[s]=null,n[u]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(43),o=n(20).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(4),o=n(28),i=n(25)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(4),o=n(6),i=n(74)(!1),u=n(25)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),s=0,c=[];for(n in a)n!=u&&r(a,n)&&c.push(n);for(;e.length>s;)r(a,n=e[s++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){t.exports=n(9)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(18),i=r(o);e.default={data:function(){return{componentName:"",pageData:null}},computed:{route:function(){return this.$router.currentPage},modal:function t(){if(this.$router.modal){var t=(0,i.default)({},this.$router.modal);return t.className="solo-modal solo-"+t.type,"panel"===t.type&&(t.className+=" solo-"+t.type+"-"+t.position),t}return this.$router.modal},hasMask:function(){var t=(0,i.default)([],this.$router.modal);return"panel"==t.type}},methods:{pageCreated:function(t){console.log("page created ",arguments)},closeMask:function(){Solo.back()}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{showBack:{type:[String,Boolean],default:!1},title:String},computed:{backText:function(){return"boolean"==typeof this.showBack?"":this.showBack}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(110),i=r(o),u=n(50),a=r(u),s=n(109),c=r(s),f=n(107),l=r(f),p=n(108),d=r(p);e.default={page:i.default,soloLink:a.default,soloHeader:c.default,soloContent:l.default,soloFooter:d.default}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"solo-link",props:{tag:{type:String,default:"a"}},render:function(t){return t(this.tag,this.$slots.default)}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){t.homePage&&(t.homePage=s.utils.kebabCase(t.homePage)),t.enterPage?t.enterPage=s.utils.kebabCase(t.enterPage):t.enterPage=t.homePage,t.pages&&!function(){var e={};s.utils.each(t.pages,function(t,n){e[s.utils.kebabCase(n)]=t}),t.pages=e}()}function i(){if(!arguments.length)return s.utils.extend(!0,{},c);var t=arguments.length<=0?void 0:arguments[0],e="undefined"==typeof t?"undefined":(0,a.default)(t);if(1===arguments.length){if("string"===e)return c[t]}else 2===arguments.length&&"string"===e&&(arg={},arg[t]=arguments.length<=1?void 0:arguments[1],t=arg);return"object"===("undefined"==typeof t?"undefined":(0,a.default)(t))?(s.utils.extend(!0,c,t),o(c),s.utils.extend(!0,{},c)):void 0}Object.defineProperty(e,"__esModule",{value:!0});var u=n(34),a=r(u);e.default=i;var s=n(7),c={pageTransition:{in:"slide-left",out:"slide-right"},popupTransition:{in:"slide-up",out:"slide-down"},panelTransition:{in:"slide-to",out:"slide-from"},homePage:"index",mountAt:"#app",viewPath:"view/"}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(18),i=r(o),u=n(53),a=r(u),s=n(54),c=r(s);e.default=(0,i.default)({},a.default,c.default)},function(t,e){"use strict";function n(t,e,n){var r=/(\d{3})(?=\d)/g;if(t=parseFloat(t),!isFinite(t)||!t&&0!==t)return"";e=null!=e?e:"¥",n=null!=n?n:2;var o=Math.abs(t).toFixed(n),i=n?o.slice(0,-1-n):o,u=i.length%3,a=u>0?i.slice(0,u)+(i.length>3?",":""):"",s=n?o.slice(-1-n):"",c=t<0?"-":"";return c+e+a+i.slice(u).replace(r,"$1,")+s}Object.defineProperty(e,"__esModule",{value:!0}),e.default={currency:n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(7);e.default={formatTime:r.utils.formatTime}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){s.utils.each(f.default,function(e,n){t.filter(n,e)})}function i(t){t.mixin(p.default)}function u(t){s.utils.each(h.default,function(e,n){t.component(n,e)})}function a(t){a.installed||(a.installed=!0,e._Vue=v=t,o(t),i(t),Object.defineProperty(t.prototype,"$router",{get:function(){return this.$root._router}}),u(t))}Object.defineProperty(e,"__esModule",{value:!0}),e._Vue=void 0,e.install=a;var s=n(7),c=n(52),f=r(c),l=n(57),p=r(l),d=n(49),h=r(d),v=e._Vue=void 0},function(t,e){"use strict";function n(t,e,r){this.$children.forEach(function(o){var i=o.$options.componentName;i===t?o.$emit.apply(o,[e].concat(r)):n.apply(o,[t,e].concat(r))})}Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{dispatch:function(t,e,n){for(var r=this.$parent,o=r.$options.componentName;r&&(!o||o!==t);)r=r.$parent,r&&(o=r.$options.componentName);r&&r.$emit.apply(r,[e].concat(n))},broadcast:function(t,e,r){n.call(this,t,e,r)}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(58),i=r(o),u=n(56),a=r(u),s=n(7);e.default=s.utils.extend(!0,{},i.default,a.default)},function(t,e){"use strict";function n(t){if(!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.target&&t.target.getAttribute){var e=t.target.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault(),!0}}Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){"page"===this.$options.name||!this.soloRouteLoad&&this.soloRouteBack===!1||this.$el.addEventListener(this.soloRouteEvent,this.onSoloLinkClick)},beforeDestroy:function(){this.$el.removeEventListener(this.soloRouteEvent,this.onSoloLinkClick)},props:{soloRouteLoad:[String,Object],soloBeforeRoute:Function,soloRouteEvent:{type:String,default:"click"},soloRouteBack:[Boolean,String,Object]},methods:{onSoloLinkClick:function(t){n(t)&&("function"==typeof this.soloBeforeRoute?this.soloBeforeRoute(t,this.soloGoNextPage):this.soloGoNextPage())},soloGoNextPage:function(t){t!==!1&&(this.soloRouteLoad?this.$router.load(this.soloRouteLoad):this.$router.back(this.soloRouteBack))}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["page-data"],mounted:function(){this.$emit("page-created",this),this.$router.current.$vm=this},deactivated:function(){var t=this,e=this.$router.invalidViews.findIndex(function(e){return t.$vnode.key===e});e!==-1&&(this.$router.invalidViews.splice(e,1),this.$destroy())},beforeDestroy:function(){this.$emit("page-before-destroy",this)}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(32),i=r(o),u=n(33),a=r(u),s=n(7),c=function(){function t(e){(0,i.default)(this,t),this.router=e,this.userHanding=0,this.stack=[],this.current=null}return(0,a.default)(t,[{key:"listen",value:function(t){this.cb=t}},{key:"getModal",value:function(){return this.current&&"page"!==this.current.type&&this.current}},{key:"getCurrentPage",value:function(){for(var t=this.current,e=this.stack.length-1;t&&"page"!==t.type&&--e>=0;)t=this.stack[e];return t}},{key:"load",value:function(t){var e=this;if(t.paht!==this.getHash()){var n=function(){e.current=t,e.stack.length?(++e.userHanding,window.location.hash=t.path):e.replace(t.path),e.stack.push(t),e.cb(e.current,e.getCurrentPage(),e.getModal(),!0)};if("page"===t.type){var r=this.getCurrentPage();this.fixHash(r&&r.path,n)}else n()}}},{key:"back",value:function(t,e){var n,r=this;if("string"==typeof t?t={viewName:t}:t||(t={}),s.utils.extend(t,e),t.path)n=t.path===this.current.path?-1:this.stack.findIndex(function(e){return e.path===t.path});else if(t.viewName)for(n=this.stack.length-1;n--&&this.stack[n].viewName!==t.viewName&&!this.stack[n].isHome;);else{if(this.current.isHome&&"page"===this.current.type)return;n=this.stack.length-2}if(n!==-1&&n!==this.stack.length-1){var o=s.utils.extend(this.router.noramlizeRoute(this.stack[n]),{viewData:t.viewData});o.transition=this.router.getRouteTransition(s.utils.extend(this.current,{transition:t.transition})),this.fixHash(o.path,function(){r.current=o,o.viewData=t.viewData,r.cb(r.current,r.getCurrentPage(),r.getModal())})}}},{key:"setupHashListener",value:function(){var t=this;window.addEventListener("hashchange",function(){t.onHashChange()})}},{key:"onHashChange",value:function(){return this.userHanding?void(--this.userHanding<0&&(this.userHanding=0)):this.current.isHome&&"page"===this.current.type?void this.replace(this.current.path):void this.back({path:this.getHash()})}},{key:"getHash",value:function(){var t=window.location.href,e=t.indexOf("#");return e===-1?"":t.slice(e+1)}},{key:"replace",value:function(t,e){++this.userHanding,window.location.replace("#"+t),e&&e()}},{key:"fixHash",value:function(t,e){if(!t||!this.current||this.current.path===t)return void(e&&e());var n=this.stack,r=n.findIndex(function(e){return e.path===t}),o=n.length,i=(this.router.$app,this.getHash());if(r>-1)for(;--o&&o>r;)t!==i&&(++this.userHanding,window.history.back()),this.router.invalidViews.push(n.pop().path);e&&e()}}]),t}();e.default=c},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(34),i=r(o),u=n(18),a=r(u),s=n(32),c=r(s),f=n(33),l=r(f),p=n(60),d=r(p),h=function(){function t(e){var n=this;(0,c.default)(this,t),this.$options=e,this.history=new d.default(this),this.currentPage={},this.modal=null,this.current=null,this.invalidViews=[],this.history.listen(function(t,e,r,o){n.current=t,n.currentPage=(0,a.default)({},e),n.modal=r,o&&e.isHome&&(n.clearViews(),console.debug("destroy page",n.history.stack))})}return(0,l.default)(t,[{key:"init",value:function(){var t=this.$options,e=this.noramlizeRoute({viewName:t.enterPage,viewData:t.enterPageData},!0);this.history.setupHashListener(),this.history.load(e)}},{key:"load",value:function(t,e){e="object"===("undefined"==typeof e?"undefined":(0,i.default)(e))?(0,a.default)({},e,{viewName:t}):"object"===("undefined"==typeof t?"undefined":(0,i.default)(t))?t:{viewName:t},this.history.load(this.noramlizeRoute(e,!0))}},{key:"back",value:function(){var t;(t=this.history).back.apply(t,arguments)}},{key:"clearViews",value:function(){var t=this.history.stack,e=t.findIndex(function(t){return t.isHome&&"page"===t.type});if(e!==-1)for(var n=t.splice(0,e),r=void 0;r=n.pop();)r.$vm.$destroy()}},{key:"noramlizeRoute",value:function(t,e){var n=this.getPathInfo(this.current&&this.current.path);return t.type=this.noramlizeViewType(t.type),t.isHome=t.viewName===this.$options.homePage,t.createdAt=t.createdAt||+new Date,"page"!==t.type?(t.path=t.path||n.basePath+"/"+t.viewName+"!"+t.type+"@"+t.createdAt,"panel"===t.type&&(t.position=t.position||"left")):t.path=t.path||"/"+t.viewName+"@"+t.createdAt,e&&(t.transition=this.history.stack.length?this.getRouteTransition(t,e):"mask-fade"),t}},{key:"getRouteTransition",value:function(t,e){if(t.transition)return t.transition;switch(t.type){case"popup":return this.$options.popupTransition[e?"in":"out"];case"panel":return this.$options.panelTransition[e?"in":"out"]+"-"+t.position;default:return this.$options.pageTransition[e?"in":"out"]}}},{key:"noramlizeViewType",value:function(t){var e=["page","panel","popup"];return t=String(t).toLowerCase(),e.indexOf(t)===-1?"page":t}},{key:"getPathInfo",value:function(t){var e=/^(\/(\w+)(?:(?:\/\w+)*?)(?:\/(\w+))?)(?:!(\w+))?@(\d+)$/,n=e.exec(t);return n?{basePath:n[1],rootViewName:n[2],currentViewName:n[3]||n[2],viewType:n[4]||"page",createdAt:n[5]}:null}}]),t}();e.default=h},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o,i=n(64),u=r(i),a={}.hasOwnProperty;o={type:function(t,e){var n;return null!=t?(n=Object.prototype.toString.call(t),1===arguments.length?n.slice(8,-1):n.toLowerCase()===("[object "+e+"]").toLowerCase()):(n=String(t),arguments.length>1?n.toLowerCase()===String(e).toLowerCase():n)},kebabCase:function(t){return String(t).replace(/[A-Z]/g,function(t){return"-"+t}).replace(/(^-+|-+$)/,"").toLowerCase()},isArray:Array.isArray||function(t){return o.type(t,"Array")},isWindow:function(t){return!(null==t||!t.window||t!==t.window)},isPlainObject:function(t){return o.type(t,"object")&&!o.isWindow(t)&&(0,u.default)(t)===Object.prototype},isArrayLike:function(t){var e;return e=t&&t.length,!!t&&(o.isArray(t)||e>>0===e&&e>=0&&(!e||e-1 in t))},prefix:function(t,e,n){return null==e&&(e="0"),null==n&&(n=2),t=""+t,t.length<n&&(e=(""+e).charAt(0),t=Array(n-t.length+1).join(e)+t),t},formatTime:function(t,e){var n,r,i,u,a,s,c,f;return null==e&&(e="YYYY-MM-DD hh:mm:ss"),c=new Date(t),!e||isNaN(c.valueOf())?"":(i=c.getMonth()+1,n=c.getDate(),r=c.getHours(),u=c.getMinutes(),s=c.getSeconds(),a=c.getMilliseconds(),f={YY:o.prefix(c.getYear()%100),YYYY:c.getFullYear(),MM:o.prefix(i),M:i,DD:o.prefix(n),D:n,hh:o.prefix(r),h:r,mm:o.prefix(u),m:u,ss:o.prefix(s),s:s,ms:a},e.replace(/[a-z]+/gi,function(t){var e;return null!=(e=f[t])?e:t}))},parseDate:function(t){var e,n;if(e=null,"string"==typeof t){if(n=t.replace(/^[^\d]*|[^\d]*$/g,"").split(/[^\d]/),!n.length||!/\d/.test(t))return null;e=new Date(n[0],n[1]-1||0,n[2]||1,n[3]||0,n[4]||0,n[5]||0,n[6]||0),isNaN(e.valueOf())&&(e=null)}return e},each:function(t,e,n){var r,i,u,s;if(t&&e)if(o.isArrayLike(t)){if(o.isArray(t)&&t.forEach)return void t.forEach(e,n);for(i=r=0,u=t.length;r<u;i=++r)s=t[i],e.call(n,s,i,t)}else for(i in t)a.call(t,i)&&(s=t[i],e.call(n,s,i,t))},map:function(t,e,n,r){var i,u,s,c,f,l;if(f=[],t&&e)if(o.isArrayLike(t)){if(o.isArray(t)&&t.forEach)return t.map(e,n);for(u=i=0,s=t.length;i<s;u=++i)l=t[u],c=e.call(n,l,u,t),void 0!==c&&f.push(c)}else for(u in t)a.call(t,u)&&(l=t[u],c=e.call(n,l,u,t),r&&void 0===c||f.push(c));return f},getQueryData:function(t){var e;return null==t&&(t=location.search),e={},(t=(""+t).replace(/^[\?|#]/,"").trim())?(t=t.split("&"),t.forEach(function(t){var n,r;r=t.split("=");try{e[decodeURIComponent(r[0])]="undefined"==typeof r[1]?"":decodeURIComponent(r[1])}catch(t){n=t,e[r[0]]=r[1]}}),e):e},extend:function(t,e){var n,r,i,u,s,c,f;for(n=[].slice.call(arguments),"boolean"==typeof n[0]?(i=n.shift(),t=n[0]):i=!1,c="boolean"!=typeof n[n.length-1]||n.pop(),u=1,1===n.length&&(t=o.isWindow(this)?{}:this,u=0),t||(t={});u<n.length;)if(e=n[u++])for(s in e)a.call(e,s)&&(f=e[s],!c&&s in t||(i&&f&&(o.isArray(f)||o.isPlainObject(f))?(r=o.isArray(f)?t[s]||[]:t[s]||{},t[s]=o.extend(i,r,f,c)):t[s]=f));return t},debounce:function(t,e,n){var r;return r=null,isNaN(e)||(e>0&&(n=e),e=void 0),(isNaN(n)||n<0)&&(n=200),function(){var o;o=arguments,clearTimeout(r),r=setTimeout(function(){null!=t&&t.apply(e,o)},n)}},throttle:function(t,e,n){var r,o;return Sathy.isFunction(t)?(r=!1,o=null,isNaN(e)||(e>0&&(n=+e),e=void 0),(isNaN(n)||n<0)&&(n=200),function(){var i,u,a;u=+new Date,r===!1&&(r=u),a=n-(u-r),clearTimeout(o),i=arguments,a<=0?(null!=t&&t.call(e),n=!1):o=setTimeout(function(){null!=t&&t.apply(e,i)},a)}):Sathy.noop},invert:function(t){var e,n,r;n={};for(e in t)a.call(t,e)&&(r=t[e],n[r]=e);return n}};var s,c,f,l,p,d,h,v;o.hasOwn=function(t,e){return d.call(t,e)},f={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}},f.unescape=o.invert(f.escape),p="&<>\"'/",v="&amp;|&lt;|&gt;|&quot;|&#x27;|&#x2F;",l={escape:new RegExp("["+p+"]","g"),unescape:new RegExp("("+v+")","g")},["escape","unescape"].forEach(function(t){return o[t]=function(e){return null==e?"":(""+e).replace(l[t],function(e){return f[t][e]})}}),c=/^([\w-]+:\/\/[^\/]*)\//,h=c.exec(location.href),s=h?h[1]:"",o.isXDomain=function(t){var e;return e=c.exec(t),IS_LOCAL_APP||!e||s!==e[1]},e.default=o},function(t,e,n){t.exports={default:n(68),__esModule:!0}},function(t,e,n){t.exports={default:n(69),__esModule:!0}},function(t,e,n){t.exports={default:n(70),__esModule:!0}},function(t,e,n){t.exports={default:n(71),__esModule:!0}},function(t,e,n){n(92),t.exports=n(2).Object.assign},function(t,e,n){n(93);var r=n(2).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){n(94),t.exports=n(2).Object.getPrototypeOf},function(t,e,n){n(97),n(95),n(98),n(99),t.exports=n(2).Symbol},function(t,e,n){n(96),n(100),t.exports=n(31).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(6),o=n(90),i=n(89);t.exports=function(t){return function(e,n,u){var a,s=r(e),c=o(s.length),f=i(u,c);if(t&&n!=n){for(;c>f;)if(a=s[f++],a!=a)return!0}else for(;c>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(72);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(12),o=n(23),i=n(15);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,a=n(t),s=i.f,c=0;a.length>c;)s.call(t,u=a[c++])&&e.push(u);return e}},function(t,e,n){t.exports=n(1).document&&document.documentElement},function(t,e,n){var r=n(35);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(40),o=n(16),i=n(24),u={};n(9)(u,n(10)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(12),o=n(6);t.exports=function(t,e){for(var n,i=o(t),u=r(i),a=u.length,s=0;a>s;)if(i[n=u[s++]]===e)return n}},function(t,e,n){var r=n(17)("meta"),o=n(14),i=n(4),u=n(5).f,a=0,s=Object.isExtensible||function(){return!0},c=!n(8)(function(){return s(Object.preventExtensions({}))}),f=function(t){u(t,r,{value:{i:"O"+ ++a,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!s(t))return"F";if(!e)return"E";f(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!s(t))return!0;if(!e)return!1;f(t)}return t[r].w},d=function(t){return c&&h.NEED&&s(t)&&!i(t,r)&&f(t),t},h=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},function(t,e,n){"use strict";var r=n(12),o=n(23),i=n(15),u=n(28),a=n(38),s=Object.assign;t.exports=!s||n(8)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=r})?function(t,e){for(var n=u(t),s=arguments.length,c=1,f=o.f,l=i.f;s>c;)for(var p,d=a(arguments[c++]),h=f?r(d).concat(f(d)):r(d),v=h.length,y=0;v>y;)l.call(d,p=h[y++])&&(n[p]=d[p]);return n}:s},function(t,e,n){var r=n(5),o=n(13),i=n(12);t.exports=n(3)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),a=u.length,s=0;a>s;)r.f(t,n=u[s++],e[n]);return t}},function(t,e,n){var r=n(15),o=n(16),i=n(6),u=n(29),a=n(4),s=n(37),c=Object.getOwnPropertyDescriptor;e.f=n(3)?c:function(t,e){if(t=i(t),e=u(e,!0),s)try{return c(t,e)}catch(t){}if(a(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(6),o=n(41).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?a(t):o(r(t))}},function(t,e,n){var r=n(11),o=n(2),i=n(8);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(t,e,n){var r=n(27),o=n(19);t.exports=function(t){return function(e,n){var i,u,a=String(o(e)),s=r(n),c=a.length;return s<0||s>=c?t?"":void 0:(i=a.charCodeAt(s),i<55296||i>56319||s+1===c||(u=a.charCodeAt(s+1))<56320||u>57343?t?a.charAt(s):i:t?a.slice(s,s+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,e,n){var r=n(27),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(27),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){"use strict";var r=n(73),o=n(80),i=n(21),u=n(6);t.exports=n(39)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(11);r(r.S+r.F,"Object",{assign:n(83)})},function(t,e,n){var r=n(11);r(r.S+r.F*!n(3),"Object",{defineProperty:n(5).f})},function(t,e,n){var r=n(28),o=n(42);n(87)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,e){},function(t,e,n){"use strict";var r=n(88)(!0);n(39)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(1),o=n(4),i=n(3),u=n(11),a=n(44),s=n(82).KEY,c=n(8),f=n(26),l=n(24),p=n(17),d=n(10),h=n(31),v=n(30),y=n(81),g=n(76),m=n(78),b=n(13),_=n(6),w=n(29),x=n(16),k=n(40),O=n(86),P=n(85),j=n(5),S=n(12),M=P.f,N=j.f,E=O.f,$=r.Symbol,R=r.JSON,C=R&&R.stringify,A="prototype",F=d("_hidden"),T=d("toPrimitive"),D={}.propertyIsEnumerable,L=f("symbol-registry"),H=f("symbols"),I=f("op-symbols"),V=Object[A],B="function"==typeof $,Y=r.QObject,z=!Y||!Y[A]||!Y[A].findChild,W=i&&c(function(){return 7!=k(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=M(V,e);r&&delete V[e],N(t,e,n),r&&t!==V&&N(V,e,r)}:N,G=function(t){var e=H[t]=k($[A]);return e._k=t,e},K=B&&"symbol"==typeof $.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof $},J=function(t,e,n){return t===V&&J(I,e,n),b(t),e=w(e,!0),b(n),o(H,e)?(n.enumerable?(o(t,F)&&t[F][e]&&(t[F][e]=!1),n=k(n,{enumerable:x(0,!1)})):(o(t,F)||N(t,F,x(1,{})),t[F][e]=!0),W(t,e,n)):N(t,e,n)},U=function(t,e){b(t);for(var n,r=g(e=_(e)),o=0,i=r.length;i>o;)J(t,n=r[o++],e[n]);return t},q=function(t,e){return void 0===e?k(t):U(k(t),e)},Q=function(t){var e=D.call(this,t=w(t,!0));return!(this===V&&o(H,t)&&!o(I,t))&&(!(e||!o(this,t)||!o(H,t)||o(this,F)&&this[F][t])||e)},X=function(t,e){if(t=_(t),e=w(e,!0),t!==V||!o(H,e)||o(I,e)){var n=M(t,e);return!n||!o(H,e)||o(t,F)&&t[F][e]||(n.enumerable=!0),n}},Z=function(t){for(var e,n=E(_(t)),r=[],i=0;n.length>i;)o(H,e=n[i++])||e==F||e==s||r.push(e);return r},tt=function(t){for(var e,n=t===V,r=E(n?I:_(t)),i=[],u=0;r.length>u;)!o(H,e=r[u++])||n&&!o(V,e)||i.push(H[e]);return i};B||($=function(){if(this instanceof $)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===V&&e.call(I,n),o(this,F)&&o(this[F],t)&&(this[F][t]=!1),W(this,t,x(1,n))};return i&&z&&W(V,t,{configurable:!0,set:e}),G(t)},a($[A],"toString",function(){
return this._k}),P.f=X,j.f=J,n(41).f=O.f=Z,n(15).f=Q,n(23).f=tt,i&&!n(22)&&a(V,"propertyIsEnumerable",Q,!0),h.f=function(t){return G(d(t))}),u(u.G+u.W+u.F*!B,{Symbol:$});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)d(et[nt++]);for(var et=S(d.store),nt=0;et.length>nt;)v(et[nt++]);u(u.S+u.F*!B,"Symbol",{for:function(t){return o(L,t+="")?L[t]:L[t]=$(t)},keyFor:function(t){if(K(t))return y(L,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){z=!0},useSimple:function(){z=!1}}),u(u.S+u.F*!B,"Object",{create:q,defineProperty:J,defineProperties:U,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),R&&u(u.S+u.F*(!B||c(function(){var t=$();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!K(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&m(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!K(e))return e}),r[1]=e,C.apply(R,r)}}}),$[A][T]||n(9)($[A],T,$[A].valueOf),l($,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){n(30)("asyncIterator")},function(t,e,n){n(30)("observable")},function(t,e,n){n(91);for(var r=n(1),o=n(9),i=n(21),u=n(10)("toStringTag"),a=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],s=0;s<5;s++){var c=a[s],f=r[c],l=f&&f.prototype;l&&!l[u]&&o(l,u,c),i[c]=i.Array}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){var r,o;n(105),r=n(45);var i=n(115);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=r},function(t,e,n){var r,o;n(104);var i=n(114);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=r},function(t,e,n){var r,o;n(102),r=n(46);var i=n(112);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=r},function(t,e,n){var r,o;n(103),r=n(47);var i=n(113);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=r},function(t,e,n){var r,o;n(101),r=n(48);var i=n(111);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=r},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"solo-page"},[t._t("header"),t._v(" "),t._t("footer"),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"solo-page-footer"},[t._t("footer-content")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"solo-page-header"},[n("div",{staticClass:"solo-page-header-left"},[n("a",{directives:[{name:"show",rawName:"v-show",value:t.showBack,expression:"showBack"}],staticClass:"solo-page-header-back",on:{click:function(e){t.$emit("on-click-back")}}},[t._v(t._s(t.backText))]),t._v(" "),t._t("header-left")],2),t._v(" "),n("p",{staticClass:"solo-page-header-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"solo-page-header-right"},[t._t("header-right")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"solo-page-content"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"solo-app"},[t.route&&t.route.viewName?[n("transition",{attrs:{name:t.route.transition}},[n("keep-alive",[n(t.route.viewName,{key:t.route.path,tag:"component",attrs:{"page-data":t.route.viewData},on:{"page-created":t.pageCreated}})],1)],1)]:t._e(),t._v(" "),n("transition",{attrs:{name:"mask-fade"}},[t.hasMask?[n("div",{staticClass:"solo-mask",on:{click:t.closeMask}})]:t._e()],2),t._v(" "),t.modal?[n("transition",{attrs:{name:t.modal.transition}},[n("keep-alive",[n(t.modal.viewName,{key:t.route.path,tag:"component",class:t.modal.className,attrs:{"page-data":t.modal.viewData}})],1)],1)]:t._e()],2)},staticRenderFns:[]}}])});