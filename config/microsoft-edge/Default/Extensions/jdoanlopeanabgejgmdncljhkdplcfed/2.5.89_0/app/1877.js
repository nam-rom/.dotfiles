(self.webpackChunkmomentum=self.webpackChunkmomentum||[]).push([[1877,9994,2672],{48713:(t,e,a)=>{"use strict";a.d(e,{Z:()=>p});var s=a(20144),i=a(88026),n=a(51726),o=a.n(n),r=a(34952),c=a(12096),d=a(60607);let u={};const l={bind:function(t,e){m.utils.isTouchDevice()&&(t.dataset.justBoundMobileClickHandler=!0,setTimeout((()=>{t.dataset.justBoundMobileClickHandler=!1}),100),t.dataset.mobileClickHandlerId=Math.random().toString(36).substring(7),u[t.dataset.mobileClickHandlerId]=e.value,t.addEventListener("click",e.value))},unbind:function(t){m.utils.isTouchDevice()&&(t.removeEventListener("click",u[t.dataset.mobileClickHandlerId]),delete u[t.dataset.mobileClickHandlerId],delete t.dataset.mobileClickHandlerId,delete t.dataset.justBoundMobileClickHandler)}};s.Z.use(i.Z,{name:"unreactive"}),s.Z.use(o()),s.Z.use(r.InlineSvgPlugin),s.Z.prototype.$xhr=d.Z,s.Z.prototype.$e=c.Z,s.Z.directive("mobile-click",l),new s.Z({bb:()=>({conditionalFeatures:m.conditionalFeatures,teamInfo:m.models.teamInfo,date:m.models.date,balance:m.models.balanceMode})}),s.Z.mixin({unreactive:()=>({$touch:m.utils.isTouchDevice()}),computed:{$plus:()=>m.conditionalFeatures.featureEnabled("plus"),$team:()=>m.conditionalFeatures.featureEnabled("team"),$admin:()=>m.models.teamInfo&&m.models.teamInfo.get("team")&&m.models.teamInfo.get("team").userIsAdmin}});const p=s.Z},61877:(t,e,a)=>{"use strict";a.r(e);var s=a(48713),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container photo-info",on:{mouseenter:t.admireOnHover,mouseleave:t.stopAdmire}},[a("transition",{attrs:{name:"fade",mode:"out-in"},on:{enter:t.onEnter}},[a("div",{directives:[{name:"mobile-click",rawName:"v-mobile-click",value:t.toggleToastMenu.bind(null,!0),expression:"toggleToastMenu.bind(null, true)"}],key:t.background.id,staticClass:"app-dash",class:{"show-hover":t.background.unsplash||t.admiring,"add-shadow":t.admiring,"show-anyway":t.admiring,"hotkey-hover":t.admiring}},[a("div",{staticClass:"title"},[t._v(t._s(t.background.title||"Untitled"))]),t._v(" "),a("div",{staticClass:"source"},[t.background.source?a("span",{staticClass:"source-link",attrs:{"data-url":t.background.url},on:{click:t.clickSource}},[t._v(t._s(t.background.source))]):t._e(),t._v(" "),t.$touch?t._e():a("span",{on:{mouseenter:t.stopAdmire}},t._l(t.controls,(function(e,s){return a("span",{key:s,class:t.access(e.class),attrs:{title:t.access(e.tooltip)||t.access(e.label)},on:{mouseenter:function(a){return t.access(e.hover)},click:e.action}},[a("inline-svg",{staticClass:"icon",class:e.iconClass,attrs:{src:t.access(e.icon)}}),t._v(" "),t.access(e.showLabel)?a("span",[t._v(t._s(t.access(e.label)))]):t._e()],1)})),0)])])]),t._v(" "),t.$touch?a("toast-menu",{attrs:{active:t.toastMenuActive,"section-title":"Photo Actions"},on:{toggle:t.toggleToastMenu},scopedSlots:t._u([t.background.title||t.background.source?{key:"header",fn:function(){return[a("div",{staticClass:"toast-title"},[t._v(t._s(t.background.title))]),t._v(" "),t.background.source?a("div",{staticClass:"toast-source",attrs:{"data-url":t.background.url},on:{click:t.clickSource}},[t._v(t._s(t.background.source))]):t._e()]},proxy:!0}:null],null,!0)},[t._v(" "),t._l(t.controls,(function(e,s){return a("dropdown-option",{key:s,class:t.access(e.class),nativeOn:{click:function(t){return e.action(t)}},scopedSlots:t._u([{key:"icon",fn:function(){return[a("inline-svg",{staticClass:"icon",class:t.access(e.iconClass),attrs:{src:e.icon}})]},proxy:!0}],null,!0)},[t._v("\n\t\t\t"+t._s(t.access(e.label))+"\n\t\t")])}))],2):t._e()],1)};i._withStripped=!0;var n=a(99994);function o(){const t=m.models.backgroundManager.getActiveItem();return t?{id:t.get("_id")||t.get("id"),title:t.get("title"),source:t.get("source"),fav:t.get("is_favorite"),url:t.get("sourceUrl"),unsplash:t.get("sourceUrl")&&t.get("sourceUrl").includes("unsplash"),destination:t.get("destination_name")}:{}}const r={name:"BackgroundInfo",components:{DropdownOption:a(2672).default,ToastMenu:n.default},data:()=>({toastMenuActive:!1,background:o(),skipping:!1,admireTimeoutId:null,admiring:!1}),computed:{controls(){return{favorite:{icon:a(48368),label:()=>this.background.fav?"Unfavorite":"Favorite",action:()=>this.toggleFavorite(),class:()=>["favorite",{active:this.background.fav,control:!this.$touch}],iconClass:"icon-heart"},skip:{icon:a(34837),label:"Skip",action:()=>this.skipBackground(),class:()=>["skip",{active:this.skipping,control:!this.$touch}],iconClass:"icon-skip"}}}},created(){this.$e.listenTo(m.models.activeBackground,"background:successfullyLoaded",this.setActiveBackground),this.$e.listenTo(m,"photoDetailsChanged",this.updatePhotoDetails),this.$e.listenTo(m,"backgroundInfo:admire:start",this.admire),this.$e.listenTo(m,"backgroundInfo:admire:stop",this.stopAdmire),this.$e.listenTo(m,"globalEvent:windowBlur",this.stopAdmire)},mounted(){m.widgetManager.appReady("background-info")},destroyed(){this.$e.stopListening(m.models.activeBackground,"background:successfullyLoaded",this.setActiveBackground),this.$e.stopListening(m,"photoDetailsChanged",this.updatePhotoDetails),this.$e.stopListening(m,"backgroundInfo:admire:start",this.admire),this.$e.stopListening(m,"backgroundInfo:admire:stop",this.stopAdmire),this.$e.stopListening(m,"globalEvent:windowBlur",this.stopAdmire)},methods:{setActiveBackground(){this.background=o()},updatePhotoDetails(t){t.id&&t.id===this.background.id&&(t.title&&""!==t.title&&(this.background.title=t.title),t.source&&""!==t.source&&(this.background.source=t.source))},toggleFavorite(){this.background.fav=!this.background.fav,m.models.backgroundManager.toggleFavorite(this.background.fav),m.sendEvent("Background",this.background.fav?"Favourite":"Unfavourite")},skipBackground(){if(!this.$plus)return m.cmd("modal.open","UPSELL_PHOTOS",{sourceEvent:"Dash: skip photo"}),void this.stopAdmire();this.skipping||(this.skipping=!0,m.models.backgroundManager.skipItem().finally((()=>{this.skipping=!1})),m.sendEvent("Background","Skip"))},clickSource(){this.background.url&&(m.usage.recordClick(m.models.activeBackground.backgroundItem,m.usage.types.PHOTO),m.sendEvent("Background","Click source"),window.open(this.background.url))},admire(){if(document.getElementsByClassName("apps")[0].classList.contains("hide-apps"))return;m.usage.recordAdmire(m.models.activeBackground.backgroundItem.id),this.admiring=!0,m.widgetManager.hideApps({exemptionSelectors:".apps .photo-info"});const t=document.getElementsByClassName("background-overlay")[0];t.classList.add("slow"),t.classList.remove("show");try{this.background.unsplash?m.usage.recordStickyHover(this.background.id,m.usage.types.PHOTO):m.usage.recordHover(this.background.id,m.usage.types.PHOTO),m.sendEvent("Background","Admire")}catch(t){console.error(t)}},admireOnHover(){this.$touch||document.getElementsByClassName("apps")[0].classList.contains("hide-apps")||(this.clearAdmireTimeout(),m.sendEvent("Background","Hover"),this.admireTimeoutId=setTimeout(this.admire,4e3))},stopAdmire(){if(this.clearAdmireTimeout(),!this.admiring)return;this.admiring=!1,m.widgetManager.showApps();const t=document.getElementsByClassName("background-overlay")[0];t.classList.remove("slow"),t.classList.add("show")},clearAdmireTimeout(){clearTimeout(this.admireTimeoutId)},onEnter(){m.widgetManager.setBottomSideWidth()},toggleToastMenu(t=!this.toastMenuActive){this.toastMenuActive=t},access:m.utils.access}};a(28479);var c=(0,a(51900).Z)(r,i,[],!1,null,"1040273e",null);c.options.__file="source/addins-vue/background-info/BackgroundInfo.vue";const d=c.exports,u=document.querySelector(".region.bottom-left"),l=document.createElement("div");u.appendChild(l),new s.Z({render:t=>t(d)}).$mount(l)},77720:(t,e,a)=>{(t.exports=a(23645)(!1)).push([t.id,"\n.photo-info .app-dash[data-v-1040273e] { height: 60px; min-width: 135px; display: flex; justify-content: center; transition: all 0s var(--a-curve), opacity 1s var(--a-curve), transform 1s var(--a-curve);\n}\n.photo-info .app-dash[data-v-1040273e]:before { transition: opacity 1s var(--a-curve); content: ''; opacity: 0;\n}\n.photo-info.add-shadow[data-v-1040273e]:before { left: -40px; opacity: 0.3;\n}\n.title[data-v-1040273e], .source[data-v-1040273e] { width: max-content; height: 22px; display: flex; align-items: center; transition: all 0.3s ease;\n}\n.title[data-v-1040273e] { --hover-offset: -2px;\n}\n.has-button > .title[data-v-1040273e] { --hover-offset: -6px !important;\n}\n.app-dash .title[data-v-1040273e] { opacity: 0.8; font-size: 0.8125rem;\n}\nbody:not(.touch) .app-dash .title[data-v-1040273e] { transform: translateZ(0) translateY(10px);\n}\nbody:not(.touch) .photo-info .app-dash:hover .title[data-v-1040273e], .photo-info .app-dash.show-hover .title[data-v-1040273e] { transform: none;\n}\n.hotkey-hover .title[data-v-1040273e] { transition-duration: 1s;\n}\n.source[data-v-1040273e] { --show-hover-transition: opacity 0.1s var(--a-curve); font-size: 0.6875rem;\n}\n.app-dash .source[data-v-1040273e] { opacity: 0; transform: translateZ(0) translateY(-13px);\n}\n.touch .app-dash:not(.show-hover) .source[data-v-1040273e] { display: none;\n}\n.app-dash:hover .source[data-v-1040273e], .app-dash.show-hover .source[data-v-1040273e] { opacity: 1; transform: translateZ(0) translateY(-2px);\n}\n.hotkey-hover .source[data-v-1040273e] { transition-duration: 0.8s;\n}\n.source-link[data-v-1040273e] { margin: -3px; margin-right: 0px; padding: 3px; opacity: 0.7; cursor: pointer; line-height: 20px; transition: all 0.2s var(--a-curve); vertical-align: top;\n}\n.source-link[data-v-1040273e]:hover { opacity: 0.9 !important;\n}\n.touch .source-link[data-v-1040273e] { pointer-events: none\n}\n.control[data-v-1040273e] { --size: 16px; height: var(--size); width: var(--size); margin: -2px 0; padding: 2px 1px; position: relative; display: inline-flex; align-items: center; justify-content: center; opacity: 0.7; box-sizing: content-box; cursor: pointer; transition: var(--show-hover-transition);\n}\n.control[data-v-1040273e]:hover, .control.active[data-v-1040273e] { opacity: 1;\n}\n.control .icon[data-v-1040273e] { --icon-size: 14px; height: var(--icon-size); width: var(--icon-size);\n}\n.app-dash.show-hover .control[data-v-1040273e] { opacity: 0;\n}\n.app-dash.show-hover:hover .control[data-v-1040273e] { opacity: 0.7;\n}\n.app-dash.show-hover .control[data-v-1040273e]:hover { opacity: 1;\n}\n\n\n/* Mobile */\n@media screen and (max-width: 450px) {\n.title[data-v-1040273e] { height: auto; font-size: 0.75rem; font-style: italic; line-height: 1.2; white-space: normal;\n}\n}\n",""])},9314:(t,e,a)=>{(t.exports=a(23645)(!1)).push([t.id,"\n.toast-hide[data-v-2489c194] { opacity: 0;\n}\n.toast-visible .icon[data-v-2489c194] { opacity: 0.8;\n}\n.toast-container[data-v-2489c194] { width: 100%; position: fixed; height: 0; right: 0; bottom: 0; left: 0; z-index: 100; overflow: visible; color: var(--color-text);\n}\n.toast[data-v-2489c194] { --toast-padding: calc(var(--app-padding) - 3px); max-width: none !important; margin: 0 !important; padding: 0; position: absolute; top: auto; right: 0 !important; bottom: 0 !important; left: 0 !important; z-index: 2; background-color: var(--color-bg); border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n.toast-header[data-v-2489c194] { padding: var(--toast-padding) var(--toast-padding) calc(var(--toast-padding) - 3px); text-align: left;\n}\n[data-v-2489c194] .toast-title { line-height: 1.25;\n}\n[data-v-2489c194] .toast-source { margin-top: 4px; opacity: 0.7; font-size: 0.75rem; font-weight: 600;\n}\n.toast-list[data-v-2489c194] li { max-width: 100% !important;\n}\n.header-line[data-v-2489c194] { margin: 0 0 -4px !important;\n}\n.section-title[data-v-2489c194] { margin: var(--toast-padding); margin-bottom: 5px; opacity: 0.95; font-size: 12px; font-weight: 700; line-height: 1.2; /* <-- remove when .focus-row { line-height: 120% } is removed */ text-align: left; text-transform: uppercase;\n}\n[data-v-2489c194] .toast .line { height: 1px; margin: 3px var(--toast-padding); background: var(--border-color);\n}\n[data-v-2489c194] .dropdown-list-item { padding-left: var(--toast-padding); padding-right: var(--toast-padding);\n}\n.button-close[data-v-2489c194] { margin: var(--toast-padding); margin-top: calc(var(--toast-padding) - 8px); padding: 6px; padding-bottom: 5px; display: block; background: var(--border-color-low) !important;  color: var(--color-text) !important; font-size: 12px; line-height: 1.2; /* <-- remove when .focus-row { line-height: 120% } is removed */ text-align: center;\n}\n.button-close[data-v-2489c194]:active { background: var(--border-color) !important;\n}\n.button-label[data-v-2489c194] { opacity: 0.8;\n}\n.toast-overlay[data-v-2489c194] { position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1; background: hsla(0 0% 0% / 50%);\n}\n.slide-up-enter-active[data-v-2489c194], .slide-up-leave-active[data-v-2489c194] { transition: all 0.2s ease;\n}\n.slide-up-enter[data-v-2489c194], .slide-up-leave-to[data-v-2489c194]  { transform: translateY(100%);\n}\n",""])},23645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var a=function(t,e){var a,s=t[1]||"",i=t[3];if(!i)return s;if(e&&"function"==typeof btoa){var n=(a=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}));return[s].concat(o).concat([n]).join("\n")}return[s].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+a+"}":a})).join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},i=0;i<this.length;i++){var n=this[i][0];null!=n&&(s[n]=!0)}for(i=0;i<t.length;i++){var o=t[i];null!=o[0]&&s[o[0]]||(a&&!o[2]?o[2]=a:a&&(o[2]="("+o[2]+") and ("+a+")"),e.push(o))}},e}},48368:t=>{t.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBmaWxsPSIjZmZmIj4KPHBhdGggY2xhc3M9Im91dGxpbmUiIGQ9Ik00Mi45LDMzMi45YzQuNS03My44LDI5LjgtMTM1LjEsNzYtMTgzLjhoMS45bDEuOS0xLjlDMTc5LjIsOTguNCwyNDMuMSw3NCwzMTQuMyw3NHMxMzIuNSwyMi41LDE4My44LDY3LjQKCWMyMC41LTE4LDQyLTMyLjQsNjQuNS00My4zbDEuOS0xLjloMS45QzYwMi40LDgxLjQsNjM5LjksNzQsNjc5LjEsNzRjNTYuNS0xLjMsMTA4LjEsMTIuNSwxNTUsNDEuNAoJYzQ2LjgsMjguOSw4Mi4xLDY4LjcsMTA1LjksMTE5LjN2MS45bDEuOSwzLjhjMTkuMiw2OCwyMi41LDEzMi44LDkuNiwxOTQuNGMtMTIuOCw2MS42LTM4LjUsMTE3LjctNzcsMTY4LjQKCWMtMzkuOCw1Ni41LTkxLjgsMTExLjYtMTU1LjksMTY1LjVjMCwxLjMtMC42LDEuOS0xLjksMS45Yy0zMS40LDI4LjktNjUuOCw1Ny43LTEwMyw4Ni42Yy0yMS44LDE2LTQwLjcsMjkuMi01Ni44LDM5LjUKCWMtMjEuMiwxNC44LTM4LjgsMjIuMS01Mi45LDIyLjFsLTUuOCwxLjlsLTQuOC0xLjljLTE4LTEuOS0zNi45LTExLjItNTYuOC0yNy45Yy02LjQtMy44LTEzLjItOS0yMC4yLTE1LjRzLTEyLjItMTAuNi0xNS40LTEyLjUKCUgzOTlDMjQxLjIsNzQyLjYsMTM1LjksNjMzLjUsODMuMyw1MzZ2LTEuOUM1MS45LDQ3My44LDM4LjQsNDA2LjcsNDIuOSwzMzIuOXogTTEyNC43LDM0Mi42Yy0zLjgsNTUuMiw2LjcsMTA3LjIsMzEuOCwxNTUuOQoJYzQ3LjUsODYuNiwxNDQuNywxODYuMSwyOTEuNiwyOTguNGgxLjljMy44LDMuOCw5LjYsOSwxNy4zLDE1LjRjNy43LDYuNCwxMy44LDEwLjksMTguMywxMy41YzUuMSwzLjgsOS45LDcuMSwxNC40LDkuNgoJYzUuMS0xLjMsOS42LTMuMiwxMy41LTUuOGMxNC4xLTksMzAuNS0yMC45LDQ5LjEtMzUuNmMzNy4yLTI3LjYsNzAuOS01NS44LDEwMS4xLTg0LjdjNjAuMy01MS4zLDEwOC44LTEwMywxNDUuMy0xNTUKCWM2OC43LTkxLjEsODcuMy0xODYuNyw1NS44LTI4Ni44Yy0xNy4zLTM2LjYtNDIuMy02NC44LTc1LjEtODQuN2MtMzIuNy0xOS45LTY5LTI5LjItMTA4LjgtMjcuOWMtMjcuNiwwLTU1LjIsNS41LTgyLjgsMTYuNAoJYy0yNSwxNC4xLTQ2LjgsMzIuNC02NS40LDU0LjlMNTAyLDI2Ny41bC0zMy43LTQxLjRjLTMzLjQtNDEuNy03OC42LTY1LjEtMTM1LjctNzAuM3MtMTA4LjgsMTEuOS0xNTUsNTEKCUMxNDYuMiwyNDIuMiwxMjguNSwyODcuNCwxMjQuNywzNDIuNnoiLz4KPHBhdGggY2xhc3M9ImZpbGwiIGQ9Ik00MS43LDMzMi45YzQuNS03My44LDI5LjktMTM1LjEsNzYtMTgzLjhoMS45bDEuOS0xLjlDMTc4LjEsOTguNCwyNDEuOSw3NCwzMTMuMSw3NAoJYzcxLjIsMCwxMzIuNSwyMi41LDE4My44LDY3LjRjMTkuNC0xNy4zLDQxLjEtMzEuOCw2NC41LTQzLjNsMS45LTEuOWgxLjlDNjAxLDgxLjUsNjM5LjMsNzQsNjc3LjksNzRjNTYuNS0xLjMsMTA4LjEsMTIuNSwxNTUsNDEuNAoJYzQ2LjksMjguOSw4Mi4yLDY4LjcsMTA1LjksMTE5LjN2MS45bDEuOSwzLjhjMTkuMiw2OCwyMi41LDEzMi44LDkuNiwxOTQuNGMtMTIuOCw2MS42LTM4LjUsMTE3LjctNzcsMTY4LjQKCWMtMzkuNyw1Ni41LTkxLjcsMTExLjctMTU1LjksMTY1LjVjMC4xLDEtMC42LDEuOC0xLjUsMS45Yy0wLjEsMC0wLjMsMC0wLjQsMGMtMzEuNSwyOC45LTY1LjgsNTcuNy0xMDMsODYuNgoJYy0yMS44LDE2LjEtNDAuNywyOS4yLTU2LjgsMzkuNWMtMjEuMiwxNC43LTM4LjgsMjIuMS01Mi45LDIyLjFsLTUuOCwxLjlsLTQuOC0xLjljLTE4LTEuOS0zNi45LTExLjMtNTYuOC0yNy45CgljLTcuMi00LjQtMTQtOS42LTIwLjItMTUuNGMtNy02LjQtMTIuMi0xMC42LTE1LjQtMTIuNWgtMS45QzI0MCw3NDIuNywxMzQuNyw2MzMuNiw4Mi4xLDUzNnYtMS45QzUwLjcsNDczLjcsMzcuMiw0MDYuNyw0MS43LDMzMi45Cgl6Ii8+Cjwvc3ZnPgo="},34837:t=>{t.exports="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQ5LjA1IDEzMi4xMiI+Cgk8Y2lyY2xlIGN4PSIxMTUuNSIgY3k9IjEwOC42MiIgcj0iMjMiIC8+Cgk8cGF0aCBkPSJNMjkxLjUsMjgxQTIyLjUsMjIuNSwwLDEsMSwyNjksMzAzLjUsMjIuNTIsMjIuNTIsMCwwLDEsMjkxLjUsMjgxbTAtMUEyMy41LDIzLjUsMCwxLDAsMzE1LDMwMy41LDIzLjUsMjMuNSwwLDAsMCwyOTEuNSwyODBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc2IC0xOTQuODgpIj48L3BhdGg+Cgk8cGF0aCBjbGFzcz0iYXJyb3ciIGQ9Ik0zOTksMjU3LjVhMTM1LjE4LDEzNS4xOCwwLDAsMC00MS4xNi00Mi4xN2MtMjIuNy0xNC43NC00OS4zOC0yMS45Mi03NS4xNS0yMC4yYTEwOC43MSwxMDguNzEsMCwwLDAtNjUuMTYsMjdjLTE5LjkxLDE3LjUtMzMuNzYsNDEuNzktNDEuMTgsNzIuMTlhMTMuNTIsMTMuNTIsMCwwLDAsOS45MiwxNi4zMiwxMy42NiwxMy42NiwwLDAsMCwzLjIxLjM4LDEzLjUxLDEzLjUxLDAsMCwwLDEzLjExLTEwLjNjNi4wNy0yNC45MiwxNy4xLTQ0LjU0LDMyLjc2LTU4LjMxYTgyLDgyLDAsMCwxLDQ5LjEzLTIwLjMyYzIwLTEuMzMsNDAuODEsNC4zMiw1OC42NSwxNS45QTEwOC4wNywxMDguMDcsMCwwLDEsMzc0LDI2OC41MWwtMzAsMTMuMiw3Mi40Myw0MC4zNiw4LjYtNzZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc2IC0xOTQuODgpIj48L3BhdGg+Cjwvc3ZnPgo="},2672:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"dropdown-list-item",class:{"has-description":t.description},attrs:{"data-test":"drop-down-wrapper"}},[a("div",{staticClass:"dropdown-list-label-wrapper",attrs:{"data-test":"drop-down-wrapper"}},[t.icon||t.$slots.icon?a("span",{staticClass:"dropdown-list-icon-wrapper"},[t._t("icon",[t._v(t._s(t.icon))])],2):t._e(),t._v(" "),a("span",{staticClass:"dropdown-list-label",attrs:{"data-test":"name"}},[t._t("default"),t._t("name",[t._v(t._s(t.name))])],2),t.isPlus&&!t.$plus?a("span",{staticClass:"badge badge-plus",attrs:{"data-test":"beta"}},[t._v("Plus")]):t._e()]),t._v(" "),t.description||t.$slots.description?a("div",{staticClass:"dropdown-list-description",attrs:{"data-test":"description"}},[t._t("description",[t._v(t._s(t.description))])],2):t._e()])};s._withStripped=!0;const i={name:"DropdownOption",doNotWaitForMount:!0,props:{icon:{type:String,default:""},name:{type:String,default:""},isPlus:{type:Boolean,default:!1},description:{type:String,default:""}}};var n=(0,a(51900).Z)(i,s,[],!1,null,null,null);n.options.__file="source/addins-vue/shared_components/DropdownOption.vue";const o=n.exports},99994:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("moreToggle"),t._v(" "),a("div",{staticClass:"toast-container"},[a("transition",{attrs:{name:"slide-up",appear:""}},[t.active?a("div",{ref:"toast",staticClass:"toast more-toast",attrs:{"data-test":"toast"}},[t.hasHeader()?a("div",{staticClass:"toast-header"},[t._t("header")],2):t._e(),t._v(" "),t.hasHeader()?a("div",{staticClass:"line header-line"}):t._e(),t._v(" "),t.sectionTitle?a("div",{staticClass:"section-title"},[t._v(t._s(t.sectionTitle))]):t._e(),t._v(" "),a("ul",{staticClass:"toast-list",class:{"toast-hide":t.$slots.upsell},attrs:{"data-test":"toast-options"}},[t._t("default")],2),t._v(" "),a("div",{staticClass:"button button-close",on:{click:t.hide}},[a("span",{staticClass:"button-label"},[t._v("Close")])])]):t._e()]),t._v(" "),a("transition",{attrs:{name:"fade",duration:"150"}},[t.active?a("div",{staticClass:"toast-overlay",on:{click:function(e){return e.stopPropagation(),t.hide(e)}}}):t._e()])],1)],2)};s._withStripped=!0;const i={doNotWaitForMount:!0,name:"ToastMenu",props:{dataOb:{type:String,default:""},active:{type:Boolean,default:!0},sectionTitle:{type:String,default:""}},methods:{hide(t){this.active&&(this.$touch&&t.stopPropagation(),this.$emit("toggle",!1))},hasHeader(){return!!this.$slots.header}}};a(31693);var n=(0,a(51900).Z)(i,s,[],!1,null,"2489c194",null);n.options.__file="source/addins-vue/shared_components/ToastMenu.vue";const o=n.exports},51900:(t,e,a)=>{"use strict";function s(t,e,a,s,i,n,o,r){var c,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=a,d._compiled=!0),s&&(d.functional=!0),n&&(d._scopeId="data-v-"+n),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},d._ssrRegister=c):i&&(c=r?function(){i.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(d.functional){d._injectStyles=c;var u=d.render;d.render=function(t,e){return c.call(e),u(t,e)}}else{var l=d.beforeCreate;d.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:d}}a.d(e,{Z:()=>s})},28479:(t,e,a)=>{var s=a(77720);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals),(0,a(45346).Z)("70453762",s,!1,{ssrId:!0})},31693:(t,e,a)=>{var s=a(9314);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals),(0,a(45346).Z)("b8a82b4a",s,!1,{ssrId:!0})},45346:(t,e,a)=>{"use strict";function s(t,e){for(var a=[],s={},i=0;i<e.length;i++){var n=e[i],o=n[0],r={id:t+":"+i,css:n[1],media:n[2],sourceMap:n[3]};s[o]?s[o].parts.push(r):a.push(s[o]={id:o,parts:[r]})}return a}a.d(e,{Z:()=>g});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n={},o=i&&(document.head||document.getElementsByTagName("head")[0]),r=null,c=0,d=!1,u=function(){},l=null,p="data-vue-ssr-id",M="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function g(t,e,a,i){d=a,l=i||{};var o=s(t,e);return v(o),function(e){for(var a=[],i=0;i<o.length;i++){var r=o[i];(c=n[r.id]).refs--,a.push(c)}for(e?v(o=s(t,e)):o=[],i=0;i<a.length;i++){var c;if(0===(c=a[i]).refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete n[c.id]}}}}function v(t){for(var e=0;e<t.length;e++){var a=t[e],s=n[a.id];if(s){s.refs++;for(var i=0;i<s.parts.length;i++)s.parts[i](a.parts[i]);for(;i<a.parts.length;i++)s.parts.push(L(a.parts[i]));s.parts.length>a.parts.length&&(s.parts.length=a.parts.length)}else{var o=[];for(i=0;i<a.parts.length;i++)o.push(L(a.parts[i]));n[a.id]={id:a.id,refs:1,parts:o}}}}function h(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function L(t){var e,a,s=document.querySelector("style["+p+'~="'+t.id+'"]');if(s){if(d)return u;s.parentNode.removeChild(s)}if(M){var i=c++;s=r||(r=h()),e=w.bind(null,s,i,!1),a=w.bind(null,s,i,!0)}else s=h(),e=y.bind(null,s),a=function(){s.parentNode.removeChild(s)};return e(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;e(t=s)}else a()}}var m,j=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function w(t,e,a,s){var i=a?"":s.css;if(t.styleSheet)t.styleSheet.cssText=j(e,i);else{var n=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(n,o[e]):t.appendChild(n)}}function y(t,e){var a=e.css,s=e.media,i=e.sourceMap;if(s&&t.setAttribute("media",s),l.ssrId&&t.setAttribute(p,e.id),i&&(a+="\n/*# sourceURL="+i.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}}}]);