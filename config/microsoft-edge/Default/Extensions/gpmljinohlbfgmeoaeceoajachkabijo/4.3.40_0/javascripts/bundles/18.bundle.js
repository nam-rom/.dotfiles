"use strict";(self.webpackChunkawesomescreenshot_front=self.webpackChunkawesomescreenshot_front||[]).push([[18],{92138:(n,e,t)=>{t.d(e,{R_:()=>d});var r=t(86500),o=t(64811),a=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function c(n){var e=n.r,t=n.g,o=n.b,a=(0,r.py)(e,t,o);return{h:360*a.h,s:a.s,v:a.v}}function i(n){var e=n.r,t=n.g,o=n.b;return"#".concat((0,r.vq)(e,t,o,!1))}function l(n,e,t){var r=t/100;return{r:(e.r-n.r)*r+n.r,g:(e.g-n.g)*r+n.g,b:(e.b-n.b)*r+n.b}}function s(n,e,t){var r;return(r=Math.round(n.h)>=60&&Math.round(n.h)<=240?t?Math.round(n.h)-2*e:Math.round(n.h)+2*e:t?Math.round(n.h)+2*e:Math.round(n.h)-2*e)<0?r+=360:r>=360&&(r-=360),r}function u(n,e,t){return 0===n.h&&0===n.s?n.s:((r=t?n.s-.16*e:4===e?n.s+.16:n.s+.05*e)>1&&(r=1),t&&5===e&&r>.1&&(r=.1),r<.06&&(r=.06),Number(r.toFixed(2)));var r}function f(n,e,t){var r;return(r=t?n.v+.05*e:n.v-.15*e)>1&&(r=1),Number(r.toFixed(2))}function d(n){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=[],r=(0,o.uA)(n),d=5;d>0;d-=1){var p=c(r),m=i((0,o.uA)({h:s(p,d,!0),s:u(p,d,!0),v:f(p,d,!0)}));t.push(m)}t.push(i(r));for(var y=1;y<=4;y+=1){var g=c(r),b=i((0,o.uA)({h:s(g,y),s:u(g,y),v:f(g,y)}));t.push(b)}return"dark"===e.theme?a.map((function(n){var r=n.index,a=n.opacity;return i(l((0,o.uA)(e.backgroundColor||"#141414"),(0,o.uA)(t[r]),100*a))})):t}var p={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},m={},y={};Object.keys(p).forEach((function(n){m[n]=d(p[n]),m[n].primary=m[n][5],y[n]=d(p[n],{theme:"dark",backgroundColor:"#141414"}),y[n].primary=y[n][5]}));m.red,m.volcano,m.gold,m.orange,m.yellow,m.lime,m.green,m.cyan,m.blue,m.geekblue,m.purple,m.magenta,m.grey},41755:(n,e,t)=>{t.d(e,{Kp:()=>u,r:()=>f,R_:()=>p,pw:()=>m,H9:()=>y,C3:()=>b});var r=t(1413),o=t(71002),a=t(92138),c=t(67294),i=t(80334),l=t(44958),s=t(63017);function u(n,e){(0,i.ZP)(n,"[@ant-design/icons] ".concat(e))}function f(n){return"object"===(0,o.Z)(n)&&"string"==typeof n.name&&"string"==typeof n.theme&&("object"===(0,o.Z)(n.icon)||"function"==typeof n.icon)}function d(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(n).reduce((function(e,t){var r=n[t];if("class"===t)e.className=r,delete e.class;else e[t]=r;return e}),{})}function p(n,e,t){return t?c.createElement(n.tag,(0,r.Z)((0,r.Z)({key:e},d(n.attrs)),t),(n.children||[]).map((function(t,r){return p(t,"".concat(e,"-").concat(n.tag,"-").concat(r))}))):c.createElement(n.tag,(0,r.Z)({key:e},d(n.attrs)),(n.children||[]).map((function(t,r){return p(t,"".concat(e,"-").concat(n.tag,"-").concat(r))})))}function m(n){return(0,a.R_)(n)[0]}function y(n){return n?Array.isArray(n)?n:[n]:[]}var g="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",b=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=(0,c.useContext)(s.Z),t=e.csp;(0,c.useEffect)((function(){(0,l.h)(n,"@ant-design-icons",{prepend:!0,csp:t})}),[])}},98787:(n,e,t)=>{t.d(e,{Y:()=>o});var r=t(93355),o=((0,r.b)("success","processing","error","default","warning"),(0,r.b)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"))},97447:(n,e,t)=>{t.d(e,{Z:()=>S});var r=t(87462),o=t(4942),a=t(29439),c=t(71002),i=t(67294),l=t(94184),s=t.n(l),u=t(98423),f=t(48786),d=t(86032),p=t(21790),m=t(93355),y=t(21687),g=t(97647),b=t(44942),h=t(96159),v=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t},k=/^[\u4e00-\u9fa5]{2}$/,x=k.test.bind(k);function _(n){return"text"===n||"link"===n}function C(n,e){if(null!=n){var t,r=e?" ":"";return"string"!=typeof n&&"number"!=typeof n&&"string"==typeof n.type&&x(n.props.children)?(0,h.Tm)(n,{children:n.props.children.split("").join(r)}):"string"==typeof n?x(n)?i.createElement("span",null,n.split("").join(r)):i.createElement("span",null,n):(t=n,i.isValidElement(t)&&t.type===i.Fragment?i.createElement("span",null,n):n)}}(0,m.b)("default","primary","ghost","dashed","link","text"),(0,m.b)("circle","round"),(0,m.b)("submit","button","reset");var Z=function(n,e){var t,l,f=n.loading,m=void 0!==f&&f,h=n.prefixCls,k=n.type,Z=n.danger,E=n.shape,S=n.size,O=n.className,w=n.children,A=n.icon,T=n.ghost,F=void 0!==T&&T,j=n.block,B=void 0!==j&&j,D=n.htmlType,N=void 0===D?"button":D,L=v(n,["loading","prefixCls","type","danger","shape","size","className","children","icon","ghost","block","htmlType"]),R=i.useContext(g.Z),M=i.useState(!!m),P=(0,a.Z)(M,2),z=P[0],$=P[1],G=i.useState(!1),H=(0,a.Z)(G,2),I=H[0],K=H[1],V=i.useContext(d.E_),q=V.getPrefixCls,U=V.autoInsertSpaceInButton,Y=V.direction,J=e||i.createRef(),Q=i.useRef(),W=function(){return 1===i.Children.count(w)&&!A&&!_(k)};l="object"===(0,c.Z)(m)&&m.delay?m.delay||!0:!!m,i.useEffect((function(){clearTimeout(Q.current),"number"==typeof l?Q.current=window.setTimeout((function(){$(l)}),l):$(l)}),[l]),i.useEffect((function(){if(J&&J.current&&!1!==U){var n=J.current.textContent;W()&&x(n)?I||K(!0):I&&K(!1)}}),[J]);var X=function(e){var t,r=n.onClick,o=n.disabled;z||o?e.preventDefault():null===(t=r)||void 0===t||t(e)};(0,y.Z)(!("string"==typeof A&&A.length>2),"Button","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(A,"` at https://ant.design/components/icon")),(0,y.Z)(!(F&&_(k)),"Button","`link` or `text` button can't be a `ghost` button.");var nn=q("btn",h),en=!1!==U,tn="";switch(S||R){case"large":tn="lg";break;case"small":tn="sm"}var rn=z?"loading":A,on=s()(nn,(t={},(0,o.Z)(t,"".concat(nn,"-").concat(k),k),(0,o.Z)(t,"".concat(nn,"-").concat(E),E),(0,o.Z)(t,"".concat(nn,"-").concat(tn),tn),(0,o.Z)(t,"".concat(nn,"-icon-only"),!w&&0!==w&&!!rn),(0,o.Z)(t,"".concat(nn,"-background-ghost"),F&&!_(k)),(0,o.Z)(t,"".concat(nn,"-loading"),z),(0,o.Z)(t,"".concat(nn,"-two-chinese-chars"),I&&en),(0,o.Z)(t,"".concat(nn,"-block"),B),(0,o.Z)(t,"".concat(nn,"-dangerous"),!!Z),(0,o.Z)(t,"".concat(nn,"-rtl"),"rtl"===Y),t),O),an=A&&!z?A:i.createElement(b.Z,{existIcon:!!A,prefixCls:nn,loading:!!z}),cn=w||0===w?function(n,e){var t=!1,r=[];return i.Children.forEach(n,(function(n){var e=(0,c.Z)(n),o="string"===e||"number"===e;if(t&&o){var a=r.length-1,i=r[a];r[a]="".concat(i).concat(n)}else r.push(n);t=o})),i.Children.map(r,(function(n){return C(n,e)}))}(w,W()&&en):null,ln=(0,u.Z)(L,["navigate"]);if(void 0!==ln.href)return i.createElement("a",(0,r.Z)({},ln,{className:on,onClick:X,ref:J}),an,cn);var sn=i.createElement("button",(0,r.Z)({},L,{type:N,className:on,onClick:X,ref:J}),an,cn);return _(k)?sn:i.createElement(p.Z,null,sn)},E=i.forwardRef(Z);E.displayName="Button",E.Group=f.Z,E.__ANT_BUTTON=!0;const S=E},73935:(n,e,t)=>{!function n(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(n){}}(),n.exports=t(64448)},69921:(n,e)=>{var t="function"==typeof Symbol&&Symbol.for,r=t?Symbol.for("react.element"):60103,o=t?Symbol.for("react.portal"):60106,a=t?Symbol.for("react.fragment"):60107,c=t?Symbol.for("react.strict_mode"):60108,i=t?Symbol.for("react.profiler"):60114,l=t?Symbol.for("react.provider"):60109,s=t?Symbol.for("react.context"):60110,u=t?Symbol.for("react.async_mode"):60111,f=t?Symbol.for("react.concurrent_mode"):60111,d=t?Symbol.for("react.forward_ref"):60112,p=t?Symbol.for("react.suspense"):60113,m=t?Symbol.for("react.suspense_list"):60120,y=t?Symbol.for("react.memo"):60115,g=t?Symbol.for("react.lazy"):60116,b=t?Symbol.for("react.block"):60121,h=t?Symbol.for("react.fundamental"):60117,v=t?Symbol.for("react.responder"):60118,k=t?Symbol.for("react.scope"):60119;function x(n){if("object"==typeof n&&null!==n){var e=n.$$typeof;switch(e){case r:switch(n=n.type){case u:case f:case a:case i:case c:case p:return n;default:switch(n=n&&n.$$typeof){case s:case d:case g:case y:case l:return n;default:return e}}case o:return e}}}function _(n){return x(n)===f}e.isFragment=function(n){return x(n)===a},e.isMemo=function(n){return x(n)===y}},59864:(n,e,t)=>{n.exports=t(69921)}}]);