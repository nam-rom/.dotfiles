!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}({2:function(t,e){const n={},r=window.location.href,o=window.location.hostname;let i=/(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9]?[0-9])(\.|$){4}/;/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(o)||i.test(o)||/(0x([0-9][0-9]|[A-F][A-F]|[A-F][0-9]|[0-9][A-F]))(\.|$){4}/.test(o)?n["IP Address"]="1":n["IP Address"]="-1",r.length<54?n["URL Length"]="-1":r.length>=54&&r.length<=75?n["URL Length"]="0":n["URL Length"]="1";const a=o.replace("www.","");a.length<7?n["Tiny URL"]="1":n["Tiny URL"]="-1",i=/@/,i.test(r)?n["@ Symbol"]="1":n["@ Symbol"]="-1",r.lastIndexOf("//")>7?n["Redirecting using //"]="1":n["Redirecting using //"]="-1",i=/-/,i.test(o)?n["(-) Prefix/Suffix in domain"]="1":n["(-) Prefix/Suffix in domain"]="-1",1==(a.match(RegExp("\\.","g"))||[]).length?n["No. of Sub Domains"]="-1":2==(a.match(RegExp("\\.","g"))||[]).length?n["No. of Sub Domains"]="0":n["No. of Sub Domains"]="1",i=/https:\/\//,i.test(r)?n.HTTPS="-1":n.HTTPS="1";let s=void 0;const c=document.getElementsByTagName("link");for(let t=0;t<c.length;t++)"icon"!=c[t].getAttribute("rel")&&"shortcut icon"!=c[t].getAttribute("rel")||(s=c[t].getAttribute("href"));s?12==s.length?n.Favicon="-1":(i=RegExp(o,"g"),i.test(s)?n.Favicon="-1":n.Favicon="1"):n.Favicon="-1",n.Port="-1",i=/https/,i.test(a)?n["HTTPS in URL's domain part"]="1":n["HTTPS in URL's domain part"]="-1";const l=document.getElementsByTagName("img");let u=0,g=0;i=RegExp(a,"g");for(let t=0;t<l.length;t++){const e=l[t].getAttribute("src");e&&(i.test(e)||"/"==e.charAt(0)&&"/"!=e.charAt(1)?g++:u++)}let m=u+g,f=u/m*100;n["Request URL"]=f<22?"-1":f>=22&&f<61?"0":"1";const d=document.getElementsByTagName("a");u=0,g=0;for(let t=0;t<d.length;t++){const e=d[t].getAttribute("href");e&&(i.test(e)||"#"==e.charAt(0)||"/"==e.charAt(0)&&"/"!=e.charAt(1)?g++:u++)}m=u+g,f=u/m*100,n.Anchor=f<31?"-1":f>=31&&f<=67?"0":"1";const h=document.getElementsByTagName("script"),b=document.getElementsByTagName("link");u=0,g=0;for(let t=0;t<h.length;t++){const e=h[t].getAttribute("src");null!=e&&(i.test(e)||"/"==e.charAt(0)&&"/"!=e.charAt(1)?g++:u++)}for(let t=0;t<b.length;t++){const e=b[t].getAttribute("href");e&&(i.test(e)||"/"==e.charAt(0)&&"/"!=e.charAt(1)?g++:u++)}m=u+g,f=u/m*100,n["Script & Link"]=f<17?"-1":f>=17&&f<=81?"0":"1";const p=document.getElementsByTagName("form");n.SFH="-1";for(let t=0;t<p.length;t++){const e=p[t].getAttribute("action");if(!e||""==e){n.SFH="1";break}"/"==e.charAt(0)||i.test(e)||(n.SFH="0")}n.mailto="-1";for(let t=0;t<p.length;t++){const e=p[t].getAttribute("action");if(e&&e.startsWith("mailto")){n.mailto="1";break}}0==document.getElementsByTagName("iframe").length?n.iFrames="-1":n.iFrames="1";const A=chrome.runtime.connect({name:"ML_PORT_NAME"});A.postMessage({request:n}),chrome.runtime.onMessage.addListener(t=>{n.tab=t,A.postMessage({request:n})})}});