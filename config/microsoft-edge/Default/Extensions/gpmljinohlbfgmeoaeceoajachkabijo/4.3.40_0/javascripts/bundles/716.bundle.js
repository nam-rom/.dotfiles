(self.webpackChunkawesomescreenshot_front=self.webpackChunkawesomescreenshot_front||[]).push([[716,795],{92138:(e,t,n)=>{"use strict";n.d(t,{R_:()=>b});var r=n(86500),i=n(64811),o=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function a(e){var t=e.r,n=e.g,i=e.b,o=(0,r.py)(t,n,i);return{h:360*o.h,s:o.s,v:o.v}}function l(e){var t=e.r,n=e.g,i=e.b;return"#".concat((0,r.vq)(t,n,i,!1))}function s(e,t,n){var r=n/100;return{r:(t.r-e.r)*r+e.r,g:(t.g-e.g)*r+e.g,b:(t.b-e.b)*r+e.b}}function c(e,t,n){var r;return(r=Math.round(e.h)>=60&&Math.round(e.h)<=240?n?Math.round(e.h)-2*t:Math.round(e.h)+2*t:n?Math.round(e.h)+2*t:Math.round(e.h)-2*t)<0?r+=360:r>=360&&(r-=360),r}function u(e,t,n){return 0===e.h&&0===e.s?e.s:((r=n?e.s-.16*t:4===t?e.s+.16:e.s+.05*t)>1&&(r=1),n&&5===t&&r>.1&&(r=.1),r<.06&&(r=.06),Number(r.toFixed(2)));var r}function p(e,t,n){var r;return(r=n?e.v+.05*t:e.v-.15*t)>1&&(r=1),Number(r.toFixed(2))}function b(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[],r=(0,i.uA)(e),b=5;b>0;b-=1){var d=a(r),f=l((0,i.uA)({h:c(d,b,!0),s:u(d,b,!0),v:p(d,b,!0)}));n.push(f)}n.push(l(r));for(var h=1;h<=4;h+=1){var m=a(r),v=l((0,i.uA)({h:c(m,h),s:u(m,h),v:p(m,h)}));n.push(v)}return"dark"===t.theme?o.map((function(e){var r=e.index,o=e.opacity;return l(s((0,i.uA)(t.backgroundColor||"#141414"),(0,i.uA)(n[r]),100*o))})):n}var d={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},f={},h={};Object.keys(d).forEach((function(e){f[e]=b(d[e]),f[e].primary=f[e][5],h[e]=b(d[e],{theme:"dark",backgroundColor:"#141414"}),h[e].primary=h[e][5]}));f.red,f.volcano,f.gold,f.orange,f.yellow,f.lime,f.green,f.cyan,f.blue,f.geekblue,f.purple,f.magenta,f.grey},96159:(e,t,n)=>{"use strict";n.d(t,{Tm:()=>o});var r=n(67294),i=r.isValidElement;function o(e,t){return function(e,t,n){return i(e)?r.cloneElement(e,"function"==typeof n?n(e.props||{}):n):t}(e,e,t)}},31808:(e,t,n)=>{"use strict";n.d(t,{jD:()=>i});var r=n(98924),i=function(){return(0,r.Z)()&&window.document.documentElement}},77667:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(87462),i=n(15671),o=n(43144),a=n(60136),l=n(31129),s=n(67294),c=n(74350),u=n(67178),p=function(e){(0,a.Z)(n,e);var t=(0,l.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"getLocale",value:function(){var e=this.props,t=e.componentName,n=e.defaultLocale||c.Z[null!=t?t:"global"],i=this.context,o=t&&i?i[t]:{};return(0,r.Z)((0,r.Z)({},n instanceof Function?n():n),o||{})}},{key:"getLocaleCode",value:function(){var e=this.context,t=e&&e.locale;return e&&e.exist&&!t?c.Z.locale:t}},{key:"render",value:function(){return this.props.children(this.getLocale(),this.getLocaleCode(),this.context)}}]),n}(s.Component);p.defaultProps={componentName:"global"},p.contextType=u.Z},31795:function(e,t,n){var r;e=n.nmd(e),function(){"use strict";var i={function:!0,object:!0},o=i[typeof window]&&window||this,a=i[typeof t]&&t,l=i.object&&e&&!e.nodeType&&e,s=a&&l&&"object"==typeof n.g&&n.g;!s||s.global!==s&&s.window!==s&&s.self!==s||(o=s);var c=Math.pow(2,53)-1,u=/\bOpera/,p=Object.prototype,b=p.hasOwnProperty,d=p.toString;function f(e){return(e=String(e)).charAt(0).toUpperCase()+e.slice(1)}function h(e){return e=y(e),/^(?:webOS|i(?:OS|P))/.test(e)?e:f(e)}function m(e,t){for(var n in e)b.call(e,n)&&t(e[n],n,e)}function v(e){return null==e?f(e):d.call(e).slice(8,-1)}function S(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function x(e,t){var n=null;return function(e,t){var n=-1,r=e?e.length:0;if("number"==typeof r&&r>-1&&r<=c)for(;++n<r;)t(e[n],n,e);else m(e,t)}(e,(function(r,i){n=t(n,r,i,e)})),n}function y(e){return String(e).replace(/^ +| +$/g,"")}var g=function e(t){var n=o,r=t&&"object"==typeof t&&"String"!=v(t);r&&(n=t,t=null);var i=n.navigator||{},a=i.userAgent||"";t||(t=a);var l,s,c,p,b,f=r?!!i.likeChrome:/\bChrome\b/.test(t)&&!/internal|\n/i.test(d.toString()),g="Object",O=r?g:"ScriptBridgingProxyObject",E=r?g:"Environment",k=r&&n.java?"JavaPackage":v(n.java),M=r?g:"RuntimeObject",w=/\bJava/.test(k)&&n.java,C=w&&v(n.environment)==E,P=w?"a":"α",A=w?"b":"β",F=n.document||{},T=n.operamini||n.opera,B=u.test(B=r&&T?T["[[Class]]"]:v(T))?B:T=null,R=t,W=[],I=null,L=t==a,G=L&&T&&"function"==typeof T.version&&T.version(),_=x([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"],(function(e,n){return e||RegExp("\\b"+(n.pattern||S(n))+"\\b","i").exec(t)&&(n.label||n)})),Z=function(e){return x(e,(function(e,n){return e||RegExp("\\b"+(n.pattern||S(n))+"\\b","i").exec(t)&&(n.label||n)}))}(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"Edge"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Waterfox","WebPositive","Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chrome",{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),$=j([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),N=function(e){return x(e,(function(e,n,r){return e||(n[$]||n[/^[a-z]+(?: +[a-z]+\b)*/i.exec($)]||RegExp("\\b"+S(r)+"(?:\\b|\\w*\\d)","i").exec(t))&&r}))}({Apple:{iPad:1,iPhone:1,iPod:1},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1}}),K=function(e){return x(e,(function(e,n){var r=n.pattern||S(n);return!e&&(e=RegExp("\\b"+r+"(?:/[\\d.]+|[ \\w.]*)","i").exec(t))&&(e=function(e,t,n){var r={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&n&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(r=r[/[\d.]+$/.exec(e)])&&(e="Windows "+r),e=String(e),t&&n&&(e=e.replace(RegExp(t,"i"),n)),h(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}(e,r,n.label||n)),e}))}(["Windows Phone","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);function j(e){return x(e,(function(e,n){var r=n.pattern||S(n);return!e&&(e=RegExp("\\b"+r+" *\\d+[.\\w_]*","i").exec(t)||RegExp("\\b"+r+" *\\w+-[\\w]*","i").exec(t)||RegExp("\\b"+r+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(t))&&((e=String(n.label&&!RegExp(r,"i").test(n.label)?n.label:e).split("/"))[1]&&!/[\d.]+/.test(e[0])&&(e[0]+=" "+e[1]),n=n.label||n,e=h(e[0].replace(RegExp(r,"i"),n).replace(RegExp("; *(?:"+n+"[_-])?","i")," ").replace(RegExp("("+n+")[-_.]?(\\w)","i"),"$1 $2"))),e}))}if(_&&(_=[_]),N&&!$&&($=j([N])),(l=/\bGoogle TV\b/.exec($))&&($=l[0]),/\bSimulator\b/i.test(t)&&($=($?$+" ":"")+"Simulator"),"Opera Mini"==Z&&/\bOPiOS\b/.test(t)&&W.push("running in Turbo/Uncompressed mode"),"IE"==Z&&/\blike iPhone OS\b/.test(t)?(N=(l=e(t.replace(/like iPhone OS/,""))).manufacturer,$=l.product):/^iP/.test($)?(Z||(Z="Safari"),K="iOS"+((l=/ OS ([\d_]+)/i.exec(t))?" "+l[1].replace(/_/g,"."):"")):"Konqueror"!=Z||/buntu/i.test(K)?N&&"Google"!=N&&(/Chrome/.test(Z)&&!/\bMobile Safari\b/i.test(t)||/\bVita\b/.test($))||/\bAndroid\b/.test(K)&&/^Chrome/.test(Z)&&/\bVersion\//i.test(t)?(Z="Android Browser",K=/\bAndroid\b/.test(K)?K:"Android"):"Silk"==Z?(/\bMobi/i.test(t)||(K="Android",W.unshift("desktop mode")),/Accelerated *= *true/i.test(t)&&W.unshift("accelerated")):"PaleMoon"==Z&&(l=/\bFirefox\/([\d.]+)\b/.exec(t))?W.push("identifying as Firefox "+l[1]):"Firefox"==Z&&(l=/\b(Mobile|Tablet|TV)\b/i.exec(t))?(K||(K="Firefox OS"),$||($=l[1])):!Z||(l=!/\bMinefield\b/i.test(t)&&/\b(?:Firefox|Safari)\b/.exec(Z))?(Z&&!$&&/[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(l+"/")+8))&&(Z=null),(l=$||N||K)&&($||N||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(K))&&(Z=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(K)?K:l)+" Browser")):"Electron"==Z&&(l=(/\bChrome\/([\d.]+)\b/.exec(t)||0)[1])&&W.push("Chromium "+l):K="Kubuntu",G||(G=x(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))","Version",S(Z),"(?:Firefox|Minefield|NetFront)"],(function(e,n){return e||(RegExp(n+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(t)||0)[1]||null}))),(l=("iCab"==_&&parseFloat(G)>3?"WebKit":/\bOpera\b/.test(Z)&&(/\bOPR\b/.test(t)?"Blink":"Presto"))||/\b(?:Midori|Nook|Safari)\b/i.test(t)&&!/^(?:Trident|EdgeHTML)$/.test(_)&&"WebKit"||!_&&/\bMSIE\b/i.test(t)&&("Mac OS"==K?"Tasman":"Trident")||"WebKit"==_&&/\bPlayStation\b(?! Vita\b)/i.test(Z)&&"NetFront")&&(_=[l]),"IE"==Z&&(l=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t)||0)[1])?(Z+=" Mobile",K="Windows Phone "+(/\+$/.test(l)?l:l+".x"),W.unshift("desktop mode")):/\bWPDesktop\b/i.test(t)?(Z="IE Mobile",K="Windows Phone 8.x",W.unshift("desktop mode"),G||(G=(/\brv:([\d.]+)/.exec(t)||0)[1])):"IE"!=Z&&"Trident"==_&&(l=/\brv:([\d.]+)/.exec(t))&&(Z&&W.push("identifying as "+Z+(G?" "+G:"")),Z="IE",G=l[1]),L){if(p="global",b=null!=(c=n)?typeof c[p]:"number",/^(?:boolean|number|string|undefined)$/.test(b)||"object"==b&&!c[p])v(l=n.runtime)==O?(Z="Adobe AIR",K=l.flash.system.Capabilities.os):v(l=n.phantom)==M?(Z="PhantomJS",G=(l=l.version||null)&&l.major+"."+l.minor+"."+l.patch):"number"==typeof F.documentMode&&(l=/\bTrident\/(\d+)/i.exec(t))?(G=[G,F.documentMode],(l=+l[1]+4)!=G[1]&&(W.push("IE "+G[1]+" mode"),_&&(_[1]=""),G[1]=l),G="IE"==Z?String(G[1].toFixed(1)):G[0]):"number"==typeof F.documentMode&&/^(?:Chrome|Firefox)\b/.test(Z)&&(W.push("masking as "+Z+" "+G),Z="IE",G="11.0",_=["Trident"],K="Windows");else if(w&&(R=(l=w.lang.System).getProperty("os.arch"),K=K||l.getProperty("os.name")+" "+l.getProperty("os.version")),C){try{G=n.require("ringo/engine").version.join("."),Z="RingoJS"}catch(e){(l=n.system)&&l.global.system==n.system&&(Z="Narwhal",K||(K=l[0].os||null))}Z||(Z="Rhino")}else"object"==typeof n.process&&!n.process.browser&&(l=n.process)&&("object"==typeof l.versions&&("string"==typeof l.versions.electron?(W.push("Node "+l.versions.node),Z="Electron",G=l.versions.electron):"string"==typeof l.versions.nw&&(W.push("Chromium "+G,"Node "+l.versions.node),Z="NW.js",G=l.versions.nw)),Z||(Z="Node.js",R=l.arch,K=l.platform,G=(G=/[\d.]+/.exec(l.version))?G[0]:null));K=K&&h(K)}if(G&&(l=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(G)||/(?:alpha|beta)(?: ?\d)?/i.exec(t+";"+(L&&i.appMinorVersion))||/\bMinefield\b/i.test(t)&&"a")&&(I=/b/i.test(l)?"beta":"alpha",G=G.replace(RegExp(l+"\\+?$"),"")+("beta"==I?A:P)+(/\d+\+?/.exec(l)||"")),"Fennec"==Z||"Firefox"==Z&&/\b(?:Android|Firefox OS)\b/.test(K))Z="Firefox Mobile";else if("Maxthon"==Z&&G)G=G.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test($))"Xbox 360"==$&&(K=null),"Xbox 360"==$&&/\bIEMobile\b/.test(t)&&W.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(Z)&&(!Z||$||/Browser|Mobi/.test(Z))||"Windows CE"!=K&&!/Mobi/i.test(t))if("IE"==Z&&L)try{null===n.external&&W.unshift("platform preview")}catch(e){W.unshift("embedded")}else(/\bBlackBerry\b/.test($)||/\bBB10\b/.test(t))&&(l=(RegExp($.replace(/ +/g," *")+"/([.\\d]+)","i").exec(t)||0)[1]||G)?(K=((l=[l,/BB10/.test(t)])[1]?($=null,N="BlackBerry"):"Device Software")+" "+l[0],G=null):this!=m&&"Wii"!=$&&(L&&T||/Opera/.test(Z)&&/\b(?:MSIE|Firefox)\b/i.test(t)||"Firefox"==Z&&/\bOS X (?:\d+\.){2,}/.test(K)||"IE"==Z&&(K&&!/^Win/.test(K)&&G>5.5||/\bWindows XP\b/.test(K)&&G>8||8==G&&!/\bTrident\b/.test(t)))&&!u.test(l=e.call(m,t.replace(u,"")+";"))&&l.name&&(l="ing as "+l.name+((l=l.version)?" "+l:""),u.test(Z)?(/\bIE\b/.test(l)&&"Mac OS"==K&&(K=null),l="identify"+l):(l="mask"+l,Z=B?h(B.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(l)&&(K=null),L||(G=null)),_=["Presto"],W.push(l));else Z+=" Mobile";(l=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(t)||0)[1])&&(l=[parseFloat(l.replace(/\.(\d)$/,".0$1")),l],"Safari"==Z&&"+"==l[1].slice(-1)?(Z="WebKit Nightly",I="alpha",G=l[1].slice(0,-1)):G!=l[1]&&G!=(l[2]=(/\bSafari\/([\d.]+\+?)/i.exec(t)||0)[1])||(G=null),l[1]=(/\bChrome\/([\d.]+)/i.exec(t)||0)[1],537.36==l[0]&&537.36==l[2]&&parseFloat(l[1])>=28&&"WebKit"==_&&(_=["Blink"]),L&&(f||l[1])?(_&&(_[1]="like Chrome"),l=l[1]||((l=l[0])<530?1:l<532?2:l<532.05?3:l<533?4:l<534.03?5:l<534.07?6:l<534.1?7:l<534.13?8:l<534.16?9:l<534.24?10:l<534.3?11:l<535.01?12:l<535.02?"13+":l<535.07?15:l<535.11?16:l<535.19?17:l<536.05?18:l<536.1?19:l<537.01?20:l<537.11?"21+":l<537.13?23:l<537.18?24:l<537.24?25:l<537.36?26:"Blink"!=_?"27":"28")):(_&&(_[1]="like Safari"),l=(l=l[0])<400?1:l<500?2:l<526?3:l<533?4:l<534?"4+":l<535?5:l<537?6:l<538?7:l<601?8:"8"),_&&(_[1]+=" "+(l+="number"==typeof l?".x":/[.+]/.test(l)?"":"+")),"Safari"==Z&&(!G||parseInt(G)>45)&&(G=l)),"Opera"==Z&&(l=/\bzbov|zvav$/.exec(K))?(Z+=" ",W.unshift("desktop mode"),"zvav"==l?(Z+="Mini",G=null):Z+="Mobile",K=K.replace(RegExp(" *"+l+"$"),"")):"Safari"==Z&&/\bChrome\b/.exec(_&&_[1])&&(W.unshift("desktop mode"),Z="Chrome Mobile",G=null,/\bOS X\b/.test(K)?(N="Apple",K="iOS 4.3+"):K=null),G&&0==G.indexOf(l=/[\d.]+$/.exec(K))&&t.indexOf("/"+l+"-")>-1&&(K=y(K.replace(l,""))),_&&!/\b(?:Avant|Nook)\b/.test(Z)&&(/Browser|Lunascape|Maxthon/.test(Z)||"Safari"!=Z&&/^iOS/.test(K)&&/\bSafari\b/.test(_[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(Z)&&_[1])&&(l=_[_.length-1])&&W.push(l),W.length&&(W=["("+W.join("; ")+")"]),N&&$&&$.indexOf(N)<0&&W.push("on "+N),$&&W.push((/^on /.test(W[W.length-1])?"":"on ")+$),K&&(l=/ ([\d.+]+)$/.exec(K),s=l&&"/"==K.charAt(K.length-l[0].length-1),K={architecture:32,family:l&&!s?K.replace(l[0],""):K,version:l?l[1]:null,toString:function(){var e=this.version;return this.family+(e&&!s?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(l=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(R))&&!/\bi686\b/i.test(R)?(K&&(K.architecture=64,K.family=K.family.replace(RegExp(" *"+l),"")),Z&&(/\bWOW64\b/i.test(t)||L&&/\w(?:86|32)$/.test(i.cpuClass||i.platform)&&!/\bWin64; x64\b/i.test(t))&&W.unshift("32-bit")):K&&/^OS X/.test(K.family)&&"Chrome"==Z&&parseFloat(G)>=39&&(K.architecture=64),t||(t=null);var X={};return X.description=t,X.layout=_&&_[0],X.manufacturer=N,X.name=Z,X.prerelease=I,X.product=$,X.ua=t,X.version=Z&&G,X.os=K||{architecture:null,family:null,version:null,toString:function(){return"null"}},X.parse=e,X.toString=function(){return this.description||""},X.version&&W.unshift(G),X.name&&W.unshift(Z),K&&Z&&(K!=String(K).split(" ")[0]||K!=Z.split(" ")[0]&&!$)&&W.push($?"("+K+")":"on "+K),W.length&&(X.description=W.join(" ")),X}();o.platform=g,void 0===(r=function(){return g}.call(t,n,t,e))||(e.exports=r)}.call(this)},6077:(e,t,n)=>{"use strict";n.d(t,{RV:()=>s.R});var r=n(67294),i=n(61045),o=n(45378),a=n(4294),l=n(5318),s=n(81696),c=r.forwardRef(l.Z);c.FormProvider=s.R,c.Field=i.Z,c.List=o.Z,c.useForm=a.Z},84173:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(87462),i=n(45987),o=n(1413),a=n(15671),l=n(43144),s=n(60136),c=n(31129),u=n(67294),p=n(57115),b=n(94159),d=n(52378),f=["component","children","onVisibleChanged"],h=["status"],m=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];const v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p.Z,n=function(e){(0,s.Z)(p,e);var n=(0,c.Z)(p);function p(){var e;(0,a.Z)(this,p);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={keyEntities:[]},e.removeKey=function(t){e.setState((function(e){return{keyEntities:e.keyEntities.map((function(e){return e.key!==t?e:(0,o.Z)((0,o.Z)({},e),{},{status:d.Td})}))}}))},e}return(0,l.Z)(p,[{key:"render",value:function(){var e=this,n=this.state.keyEntities,o=this.props,a=o.component,l=o.children,s=o.onVisibleChanged,c=(0,i.Z)(o,f),p=a||u.Fragment,b={};return m.forEach((function(e){b[e]=c[e],delete c[e]})),delete c.keys,u.createElement(p,c,n.map((function(n){var o=n.status,a=(0,i.Z)(n,h),c=o===d.zM||o===d.ff;return u.createElement(t,(0,r.Z)({},b,{key:a.key,visible:c,eventProps:a,onVisibleChanged:function(t){null==s||s(t,{key:a.key}),t||e.removeKey(a.key)}}),l)})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.keys,r=t.keyEntities,i=(0,d.l4)(n);return{keyEntities:(0,d.uz)(r,i).filter((function(e){var t=r.find((function(t){var n=t.key;return e.key===n}));return!t||t.status!==d.Td||e.status!==d.p4}))}}}]),p}(u.Component);return n.defaultProps={component:"div"},n}(b.Cq)},44958:(e,t,n)=>{"use strict";n.d(t,{h:()=>s});var r=n(98924),i="rc-util-key";function o(e){return e.attachTo?e.attachTo:document.querySelector("head")||document.body}function a(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(0,r.Z)())return null;var i,a=document.createElement("style");(null===(t=n.csp)||void 0===t?void 0:t.nonce)&&(a.nonce=null===(i=n.csp)||void 0===i?void 0:i.nonce);a.innerHTML=e;var l=o(n),s=l.firstChild;return n.prepend&&l.prepend?l.prepend(a):n.prepend&&s?l.insertBefore(a,s):l.appendChild(a),a}var l=new Map;function s(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=o(n);if(!l.has(r)){var s=a("",n),c=s.parentNode;l.set(r,c),c.removeChild(s)}var u=Array.from(l.get(r).children).find((function(e){return"STYLE"===e.tagName&&e[i]===t}));if(u){var p,b,d;if((null===(p=n.csp)||void 0===p?void 0:p.nonce)&&u.nonce!==(null===(b=n.csp)||void 0===b?void 0:b.nonce))u.nonce=null===(d=n.csp)||void 0===d?void 0:d.nonce;return u.innerHTML!==e&&(u.innerHTML=e),u}var f=a(e,n);return f[i]=t,f}},80334:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>a});var r={};function i(e,t){0}function o(e,t,n){t||r[n]||(e(!1,n),r[n]=!0)}const a=function(e,t){o(i,e,t)}},73935:(e,t,n)=>{"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){}}(),e.exports=n(64448)},67294:(e,t,n)=>{"use strict";e.exports=n(72408)},85893:(e,t,n)=>{"use strict";e.exports=n(75251)}}]);