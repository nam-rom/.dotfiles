(()=>{var e,t={31808:(e,t,r)=>{"use strict";r.d(t,{fk:()=>s});var n,i=r(98924),o=function(){return(0,i.Z)()&&window.document.documentElement},s=function(){if(!o())return!1;if(void 0!==n)return n;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),n=1===e.scrollHeight,document.body.removeChild(e),n}},49134:(e,t,r)=>{"use strict";r.d(t,{w6:()=>v});var n,i=r(87462),o=r(67294),s=r(63017),a=r(6077),u=r(56982),c=r(99710),l=r(77667),f=r(86032),d=r(97647),h=r(55026),p=r(38648),m=["getTargetContainer","getPopupContainer","renderEmpty","pageHeader","input","form"];function y(){return n||"ant"}var v=function(){return{getPrefixCls:function(e,t){return t||(e?"".concat(y(),"-").concat(e):y())},getRootPrefixCls:function(e,t){return e||(n||(t&&t.includes("-")?t.replace(/^(.*)-[^-]*$/,"$1"):y()))}}},g=function(e){var t=e.children,r=e.csp,n=e.autoInsertSpaceInButton,l=e.form,h=e.locale,p=e.componentSize,y=e.direction,v=e.space,g=e.virtual,b=e.dropdownMatchSelectWidth,w=e.legacyLocale,S=e.parentContext,x=e.iconPrefixCls,$=o.useCallback((function(t,r){var n=e.prefixCls;if(r)return r;var i=n||S.getPrefixCls("");return t?"".concat(i,"-").concat(t):i}),[S.getPrefixCls,e.prefixCls]),j=(0,i.Z)((0,i.Z)({},S),{csp:r,autoInsertSpaceInButton:n,locale:h||w,direction:y,space:v,virtual:g,dropdownMatchSelectWidth:b,getPrefixCls:$});m.forEach((function(t){var r=e[t];r&&(j[t]=r)}));var O=(0,u.Z)((function(){return j}),j,(function(e,t){var r=Object.keys(e),n=Object.keys(t);return r.length!==n.length||r.some((function(r){return e[r]!==t[r]}))})),_=o.useMemo((function(){return{prefixCls:x,csp:r}}),[x]),M=t,C={};return h&&h.Form&&h.Form.defaultValidateMessages&&(C=h.Form.defaultValidateMessages),l&&l.validateMessages&&(C=(0,i.Z)((0,i.Z)({},C),l.validateMessages)),Object.keys(C).length>0&&(M=o.createElement(a.RV,{validateMessages:C},t)),h&&(M=o.createElement(c.Z,{locale:h,_ANT_MARK__:c.s},M)),x&&(M=o.createElement(s.Z.Provider,{value:_},M)),p&&(M=o.createElement(d.q,{size:p},M)),o.createElement(f.E_.Provider,{value:O},M)},b=function(e){return o.useEffect((function(){e.direction&&(h.ZP.config({rtl:"rtl"===e.direction}),p.Z.config({rtl:"rtl"===e.direction}))}),[e.direction]),o.createElement(l.Z,null,(function(t,r,n){return o.createElement(f.C,null,(function(t){return o.createElement(g,(0,i.Z)({parentContext:t,legacyLocale:n},e))}))}))};b.ConfigContext=f.E_,b.SizeContext=d.Z,b.config=function(e){void 0!==e.prefixCls&&(n=e.prefixCls)}},83008:(e,t,r)=>{"use strict";r.d(t,{f:()=>s});var n=r(87462),i=r(66805),o=(0,n.Z)({},i.Z.Modal);function s(e){o=e?(0,n.Z)((0,n.Z)({},o),e):(0,n.Z)({},i.Z.Modal)}},9669:(e,t,r)=>{e.exports=r(51609)},27484:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",s="hour",a="day",u="week",c="month",l="quarter",f="year",d="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},g={s:v,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+v(n,2,"0")+":"+v(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),o=r-i<0,s=t.clone().add(n+(o?-1:1),c);return+(-(n+(r-i)/(o?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:f,w:u,d:a,D:d,h:s,m:o,s:i,ms:n,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=y;var S=function(e){return e instanceof O},x=function(e,t,r){var n;if(!e)return b;if("string"==typeof e)w[e]&&(n=e),t&&(w[e]=t,n=e);else{var i=e.name;w[i]=e,n=i}return!r&&n&&(b=n),n||!r&&b},$=function(e,t){if(S(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new O(r)},j=g;j.l=x,j.i=S,j.w=function(e,t){return $(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var O=function(){function y(e){this.$L=x(e.locale,null,!0),this.parse(e)}var v=y.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(j.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return j},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var r=$(e);return this.startOf(t)<=r&&r<=this.endOf(t)},v.isAfter=function(e,t){return $(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<$(e)},v.$g=function(e,t,r){return j.u(e)?this[t]:this.set(r,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var r=this,n=!!j.u(t)||t,l=j.p(e),h=function(e,t){var i=j.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(a)},p=function(e,t){return j.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},m=this.$W,y=this.$M,v=this.$D,g="set"+(this.$u?"UTC":"");switch(l){case f:return n?h(1,0):h(31,11);case c:return n?h(1,y):h(0,y+1);case u:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return h(n?v-w:v+(6-w),y);case a:case d:return p(g+"Hours",0);case s:return p(g+"Minutes",1);case o:return p(g+"Seconds",2);case i:return p(g+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var r,u=j.p(e),l="set"+(this.$u?"UTC":""),h=(r={},r[a]=l+"Date",r[d]=l+"Date",r[c]=l+"Month",r[f]=l+"FullYear",r[s]=l+"Hours",r[o]=l+"Minutes",r[i]=l+"Seconds",r[n]=l+"Milliseconds",r)[u],p=u===a?this.$D+(t-this.$W):t;if(u===c||u===f){var m=this.clone().set(d,1);m.$d[h](p),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[j.p(e)]()},v.add=function(n,l){var d,h=this;n=Number(n);var p=j.p(l),m=function(e){var t=$(h);return j.w(t.date(t.date()+Math.round(e*n)),h)};if(p===c)return this.set(c,this.$M+n);if(p===f)return this.set(f,this.$y+n);if(p===a)return m(1);if(p===u)return m(7);var y=(d={},d[o]=t,d[s]=r,d[i]=e,d)[p]||1,v=this.$d.getTime()+n*y;return j.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=j.z(this),o=this.$H,s=this.$m,a=this.$M,u=r.weekdays,c=r.months,l=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].substr(0,o)},f=function(e){return j.s(o%12||12,e,"0")},d=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:j.s(a+1,2,"0"),MMM:l(r.monthsShort,a,c,3),MMMM:l(c,a),D:this.$D,DD:j.s(this.$D,2,"0"),d:String(this.$W),dd:l(r.weekdaysMin,this.$W,u,2),ddd:l(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(o),HH:j.s(o,2,"0"),h:f(1),hh:f(2),a:d(o,s,!0),A:d(o,s,!1),m:String(s),mm:j.s(s,2,"0"),s:String(this.$s),ss:j.s(this.$s,2,"0"),SSS:j.s(this.$ms,3,"0"),Z:i};return n.replace(m,(function(e,t){return t||p[e]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,h){var p,m=j.p(d),y=$(n),v=(y.utcOffset()-this.utcOffset())*t,g=this-y,b=j.m(this,y);return b=(p={},p[f]=b/12,p[c]=b,p[l]=b/3,p[u]=(g-v)/6048e5,p[a]=(g-v)/864e5,p[s]=g/r,p[o]=g/t,p[i]=g/e,p)[m]||g,h?b:j.a(b)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return w[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=x(e,t,!0);return n&&(r.$L=n),r},v.clone=function(){return j.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},y}(),_=O.prototype;return $.prototype=_,[["$ms",n],["$s",i],["$m",o],["$H",s],["$W",a],["$M",c],["$y",f],["$D",d]].forEach((function(e){_[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),$.extend=function(e,t){return e.$i||(e(t,O,$),e.$i=!0),$},$.locale=x,$.isDayjs=S,$.unix=function(e){return $(1e3*e)},$.en=w[b],$.Ls=w,$.p={},$}()},72408:(e,t,r)=>{"use strict";var n=r(27418),i="function"==typeof Symbol&&Symbol.for,o=i?Symbol.for("react.element"):60103,s=i?Symbol.for("react.portal"):60106,a=i?Symbol.for("react.fragment"):60107,u=i?Symbol.for("react.strict_mode"):60108,c=i?Symbol.for("react.profiler"):60114,l=i?Symbol.for("react.provider"):60109,f=i?Symbol.for("react.context"):60110,d=i?Symbol.for("react.forward_ref"):60112,h=i?Symbol.for("react.suspense"):60113,p=i?Symbol.for("react.memo"):60115,m=i?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function w(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||g}function S(){}function x(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||g}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=w.prototype;var $=x.prototype=new S;$.constructor=x,n($,w.prototype),$.isPureReactComponent=!0;var j={current:null},O=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function M(e,t,r){var n,i={},s=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)O.call(t,n)&&!_.hasOwnProperty(n)&&(i[n]=t[n]);var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];i.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===i[n]&&(i[n]=u[n]);return{$$typeof:o,type:e,key:s,ref:a,props:i,_owner:j.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var k=/\/+/g,P=[];function D(e,t,r,n){if(P.length){var i=P.pop();return i.result=e,i.keyPrefix=t,i.func=r,i.context=n,i.count=0,i}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function Z(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function E(e,t,r,n){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case s:a=!0}}if(a)return r(n,e,""===t?"."+N(e,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var c=t+N(i=e[u],u);a+=E(i,c,r,n)}else if(null===e||"object"!=typeof e?c=null:c="function"==typeof(c=y&&e[y]||e["@@iterator"])?c:null,"function"==typeof c)for(e=c.call(e),u=0;!(i=e.next()).done;)a+=E(i=i.value,c=t+N(i,u++),r,n);else if("object"===i)throw r=""+e,Error(v(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return a}function I(e,t,r){return null==e?0:E(e,"",t,r)}function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function R(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,r){var n=e.result,i=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?T(e,n,r,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,i+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(k,"$&/")+"/")+r)),n.push(e))}function T(e,t,r,n,i){var o="";null!=r&&(o=(""+r).replace(k,"$&/")+"/"),I(e,A,t=D(t,o,n,i)),Z(t)}var U={current:null};function B(){var e=U.current;if(null===e)throw Error(v(321));return e}var L={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return T(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,R,t=D(null,null,t,r)),Z(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return T(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(v(143));return e}},t.Component=w,t.Fragment=a,t.Profiler=c,t.PureComponent=x,t.StrictMode=u,t.Suspense=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,r){if(null==e)throw Error(v(267,e));var i=n({},e.props),s=e.key,a=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,u=j.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)O.call(t,l)&&!_.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){c=Array(l);for(var f=0;f<l;f++)c[f]=arguments[f+2];i.children=c}return{$$typeof:o,type:e.type,key:s,ref:a,props:i,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=M,t.createFactory=function(e){var t=M.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return B().useCallback(e,t)},t.useContext=function(e,t){return B().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return B().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return B().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return B().useLayoutEffect(e,t)},t.useMemo=function(e,t){return B().useMemo(e,t)},t.useReducer=function(e,t,r){return B().useReducer(e,t,r)},t.useRef=function(e){return B().useRef(e)},t.useState=function(e){return B().useState(e)},t.version="16.14.0"},67294:(e,t,r)=>{"use strict";e.exports=r(72408)},85893:(e,t,r)=>{"use strict";e.exports=r(75251)},90475:(e,t,r)=>{"use strict";r(57539);var n=r(9676),i=(r(12496),r(31097)),o=(r(53890),r(25779)),s=(r(84968),r(90071)),a=(r(45186),r(71577)),u=(r(69754),r(55026)),c=(r(61241),r(16317)),l=r(67294),f=r(73935),d=r(38819),h=r(1870),p=r(31795),m=r.n(p),y=r(9669),v="https://www.awesomescreenshot.com/api/v1",g=["/premium/stripe/create_plan","/premium/stripe/change_plan","/folder/create","/folder/add_items","/folder/change_name","/trash/throw_into","/image/change_title","/video/update_title","/trash/restore","/trash/delete","/image/upload"],b=r.n(y)().create({baseURL:v});b.interceptors.request.use((function(e){return e}),(function(e){return u.ZP.error("Network error, Request timeout!"),Promise.reject()})),b.interceptors.response.use((function(e){if(e&&e.data&&1===e.data.code)return Promise.resolve(e.data.data);if(e.data.code,e.data.msg){if(-1!==g.indexOf(e.config.url))return Promise.reject(e.data.msg);if(u.ZP.error(e.data.msg),"/pricing"!==window.location.pathname)return Promise.reject(e.data.msg)}}),(function(e){if(e.response){var t=e.response.status;u.ZP.error("Network error! Error Code "+t)}return Promise.reject(e)}));var w=r(85893);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){$(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],s=!0,a=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(e){a=!0,i=e}finally{try{s||null==r.return||r.return()}finally{if(a)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var _=c.Z.Option;function M(e){var t=j((0,l.useState)(!1),2),r=t[0],f=t[1],p=j((0,l.useState)(!1),2),y=p[0],v=p[1],g=j((0,l.useState)("Screenshot Bug"),2),S=g[0],$=g[1],O={"Screenshot Bug":{name:"Bug Report-Screenshot",title:{label:"Bug Summary",tip:"Let us know what went wrong in a few words."},detail:{label:"Bug Details",tip:"Please describe in detail what went wrong, any actions you took, and error messages you got."}},"Video Bug":{name:"Bug Report-Screenshot",title:{label:"Bug Summary",tip:"Let us know what went wrong in a few words."},detail:{label:"Bug Details",tip:"Please describe in detail what went wrong, any actions you took, and error messages you got."}},"Feature Request":{name:"Feature Request",title:{label:"Title",tip:"What's your request about?"},detail:{label:"Description",tip:"Please provide a detailed description of new feature you want."}},"Other Issue":{name:"Other Issue",title:{label:"Title"},detail:{label:"Description",tip:"Let us know your thoughts on Awesome Screenshot. Any questions, comments or suggestions are welcome."}}};return(0,w.jsxs)("div",{className:"main",children:[(0,w.jsx)("div",{className:"top",children:(0,w.jsx)("div",{className:"logo",children:(0,w.jsx)("a",{href:"https://www.awesomescreenshot.com"})})}),(0,w.jsx)("div",{className:"options-container",children:y?(0,w.jsxs)("div",{className:"sent-message",children:[(0,w.jsx)("div",{children:(0,w.jsx)(d.Z,{})}),(0,w.jsx)("div",{className:"title",children:"Thank you"}),(0,w.jsx)("div",{className:"content",children:"The form was submitted successfully. We will contact you shortly."}),(0,w.jsx)(a.Z,{type:"primary",onClick:function(){v(!1)},children:"Submit another issue"})]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:"main-title",children:"Send Feedback"}),(0,w.jsxs)("div",{className:"title-tip",children:["Please fill out the form below to submit an issue."," "]}),(0,w.jsxs)(s.Z,{onFinish:function(e){var t={};t["Extension Version"]=chrome.runtime.getManifest().version,localStorage.last_info&&(t=x(x({},t),JSON.parse(localStorage.last_info))),t.Browser||(t.Browser=m().name+" "+m().version),t.OS||(t.OS=m().os.toString()),t["Screen Size"]||(t["Screen Size"]=window.screen.width+"x"+window.screen.height),e.webUrl&&(t["Web URL"]=e.webUrl),e.screenshotVideoUrl&&(t["Screenshot/video URL"]=e.screenshotVideoUrl);var r=!0===e.isSendInfo||void 0===e.isSendInfo?function(e,t){var r="";for(var n in r+=e+"<br/><br/><br/><hr>",t)r+="<b>"+n+"</b>: "+t[n]+"<br/>";return r}(e.content,t):e.content,n={email:e.email,name:e.name,subject:"[".concat(e.type,"] ").concat(e.title),content:r};f(!0),v(!0),function(e){return b({method:"POST",url:"/common/contact_us",data:e})}(n).then((function(e){f(!1),v(!0)})).catch((function(e){f(!1),u.ZP.error("Submission failed. Please retry or copy summary and details to send an email to care@awesomescreenshot.com.")}))},children:[(0,w.jsx)("div",{className:"label required",children:"Issue Type"}),(0,w.jsx)(s.Z.Item,{name:"type",initialValue:S,rules:[{required:!0}],children:(0,w.jsx)(c.Z,{onChange:function(e){$(e)},children:["Screenshot Bug","Video Bug","Feature Request","Other Issue"].map((function(e){return(0,w.jsx)(_,{value:e,children:e},e)}))})}),(0,w.jsx)("div",{className:"label required",children:O[S].title.label}),(0,w.jsx)("div",{className:"label-tip",children:O[S].title.tip}),(0,w.jsx)(s.Z.Item,{name:"title",rules:[{required:!0}],children:(0,w.jsx)(o.Z,{})}),"Screenshot Bug"===S&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:"label",children:"Web URL"}),(0,w.jsx)("div",{className:"label-tip",children:"Include the url of page you had trouble capture to help us debug much faster."}),(0,w.jsx)(s.Z.Item,{name:"webUrl",children:(0,w.jsx)(o.Z,{})})]}),(0,w.jsx)("div",{className:"label required",children:O[S].detail.label}),(0,w.jsx)("div",{className:"label-tip",children:O[S].detail.tip}),(0,w.jsx)(s.Z.Item,{name:"content",rules:[{required:!0}],children:(0,w.jsx)(o.Z.TextArea,{autoSize:{minRows:3}})}),("Screenshot Bug"===S||"Video Bug"===S)&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:"label",children:"Screenshot/video URL"}),(0,w.jsx)("div",{className:"label-tip",children:"Don't feel like writing? Record a video tell us what's go on or send us a snapshot. If a picture is worth a thousand words, then a video is worth a million."}),(0,w.jsx)(s.Z.Item,{name:"screenshotVideoUrl",children:(0,w.jsx)(o.Z,{})})]}),(0,w.jsx)("div",{className:"label required",children:"Your Email Address"}),(0,w.jsx)("div",{className:"label-tip",children:"Enter an email address to receive updates on the issue."}),(0,w.jsx)(s.Z.Item,{name:"email",rules:[{required:!0}],children:(0,w.jsx)(o.Z,{type:"email"})}),(0,w.jsx)("div",{className:"label",children:"Your Name"}),(0,w.jsx)("div",{className:"label-tip",children:"Only for email correspondence."}),(0,w.jsx)(s.Z.Item,{name:"name",children:(0,w.jsx)(o.Z,{})}),(0,w.jsx)(s.Z.Item,{name:"isSendInfo",valuePropName:"checked",initialValue:!0,children:(0,w.jsxs)(n.Z,{children:["Include OS and browser info to help developers debug errors"," ",(0,w.jsx)(i.Z,{title:"Specifically, version number of your OS, browser, extension, and screen size will be included. ",children:(0,w.jsx)(h.Z,{})})]})}),(0,w.jsx)(s.Z.Item,{children:(0,w.jsx)(a.Z,{type:"primary",htmlType:"submit",loading:r,size:"large",block:!0,children:"Submit"})})]})]})})]})}f.render((0,w.jsx)(M,{}),document.getElementById("feedback-page"))}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=t,e=[],n.O=(t,r,i,o)=>{if(!r){var s=1/0;for(l=0;l<e.length;l++){for(var[r,i,o]=e[l],a=!0,u=0;u<r.length;u++)(!1&o||s>=o)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(a=!1,o<s&&(s=o));if(a){e.splice(l--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,i,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={656:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var i,o,[s,a,u]=r,c=0;if(s.some((t=>0!==e[t]))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(u)var l=u(n)}for(t&&t(r);c<s.length;c++)o=s[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},r=self.webpackChunkawesomescreenshot_front=self.webpackChunkawesomescreenshot_front||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.O(void 0,[831,377,100,760,347,509,163,795,18],(()=>n(33505)));var i=n.O(void 0,[831,377,100,760,347,509,163,795,18],(()=>n(90475)));i=n.O(i)})();