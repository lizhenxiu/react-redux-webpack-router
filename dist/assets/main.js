webpackJsonp([2],{172:function(e,t,n){n(173),e.exports=n(375)},375:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(10),u=r(o),c=n(378),i=n(387),a=n(414),l=r(a),f=n(419),s=r(f),p=n(115);n(446);!function(e){(0,c.render)(u.default.createElement(i.Provider,{store:l.default},u.default.createElement(p.BrowserRouter,null,u.default.createElement(e,null))),document.getElementById("root"))}(s.default)},414:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(107),u=n(415),c=r(u),i=n(416),a=r(i),l=(0,o.compose)((0,o.applyMiddleware)(c.default))(o.createStore),f=void 0;f=l(a.default),f.subscribe(function(){}),(0,i.injectStore)(f),t.default=f},416:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.injectStore=t.injectReducer=void 0;var r=n(107),o=n(417),u=function(e){return e&&e.__esModule?e:{default:e}}(o),c={api:u.default},i=null,a=(0,r.combineReducers)(c),l=function(e,t){var n={};return n[t]=e,(0,r.combineReducers)(c),c=Object.assign(c,n),(0,r.combineReducers)(c)};t.injectReducer=function(e,t){i.replaceReducer(l(e,t))},t.injectStore=function(e){return i=e};t.default=a},417:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(418),c={};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1];switch(t.type){case u.APISUCCESS:return o({},e,r({},t.saveAs,t.data.body));case u.APIFAIL:return u.APIFAIL;case u.APICLEAR:return u.APICLEAR;default:return e}}},418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.APISUCCESS=Symbol("APISUCCESS"),t.APIFAIL=Symbol("APIFAIL"),t.APIPENDING=Symbol("APIPENDING"),t.APICLEAR=Symbol("APICLEAR"),t.SETTOKEN=Symbol("SETTOKEN"),t.CLEARTOEKN=Symbol("CLEARTOEKN")},419:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(10),l=r(a),f=n(115),s=n(445),p=r(s),d=(0,p.default)(function(){return n.e(1).then(n.bind(null,448))}),b=(0,p.default)(function(){return n.e(0).then(n.bind(null,449))}),y=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),i(t,[{key:"render",value:function(){return l.default.createElement(f.Switch,null,l.default.createElement(f.Route,{exact:!0,path:"/login",component:d}),l.default.createElement(f.Route,{exact:!0,path:"/:modules/:page",component:b}),l.default.createElement(f.Route,{exact:!0,path:"/",component:d}))}}]),t}(a.Component);t.default=y},445:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,u){try{var c=t[o](u),i=c.value}catch(e){return void n(e)}if(!c.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return function(t){function n(e){o(this,n);var t=u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={component:null},t}return c(n,t),a(n,[{key:"componentDidMount",value:function(){function t(){return n.apply(this,arguments)}var n=r(regeneratorRuntime.mark(function t(){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}},t,this)}));return t}()},{key:"render",value:function(){var e=this.state.component;return e?f.default.createElement(e,this.props):null}}]),n}(l.Component)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=i;var l=n(10),f=function(e){return e&&e.__esModule?e:{default:e}}(l)},446:function(e,t){}},[172]);