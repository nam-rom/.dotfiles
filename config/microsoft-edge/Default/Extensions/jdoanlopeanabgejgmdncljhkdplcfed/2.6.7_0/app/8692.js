(self.webpackChunkmomentum=self.webpackChunkmomentum||[]).push([[8692],{5111:(t,e,d)=>{"use strict";d.d(e,{Z:()=>s});let o={};const s={bind:function(t,e){let d,s;t.dataset.justBoundClickOutsideHandler=!0,setTimeout((()=>{t.dataset.justBoundClickOutsideHandler=!1}),100);const i=t=>{s=!1,(t=>t&&t.clientX>window.innerWidth)(t)?s=!0:d=t.target},n=o=>{s||(e.modifiers.bubble||!t.contains(d)&&!t.contains(o.target)&&t!==d&&t!==o.target&&"true"!==t.dataset.justBoundClickOutsideHandler)&&e.value(o)};t.dataset.clickOutsideMouseupHandlerId=Math.random().toString(36).substring(7),t.dataset.clickOutsideMousedownHandlerId=Math.random().toString(36).substring(7),o[t.dataset.clickOutsideMouseupHandlerId]=n,o[t.dataset.clickOutsideMousedownHandlerId]=i,document.addEventListener("mouseup",n),document.addEventListener("mousedown",i)},unbind:function(t){document.removeEventListener("mouseup",o[t.dataset.clickOutsideMouseupHandlerId]),document.removeEventListener("mousedown",o[t.dataset.clickOutsideMousedownHandlerId]),delete o[t.dataset.clickOutsideMouseupHandlerId],delete o[t.dataset.clickOutsideMousedownHandlerId],delete t.dataset.clickOutsideMouseupHandlerId,delete t.dataset.clickOutsideMousedownHandlerId,delete t.dataset.justBoundClickOutsideHandler}}},73387:(t,e,d)=>{(t.exports=d(23645)(!1)).push([t.id,"\n.dropdown[data-v-c8d4d4da] { display: block;\n} /* Override general stylesheet dropdown styling for display: block, but move to this when refactor complete; */\n.dropdown-hide[data-v-c8d4d4da] { opacity: 0;\n}\n.dropdown-visible .icon[data-v-c8d4d4da] { opacity: 0.8;}\n.open-enter-active[data-v-c8d4d4da], .open-leave-active[data-v-c8d4d4da] { transition: opacity 0.1s ease;\n} /* Consolidate this with center nav and other animations? */\n.open-enter[data-v-c8d4d4da], .open-leave-to[data-v-c8d4d4da] { opacity: 0;\n}\n\n",""])},20264:t=>{t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHBhdGggZD0iTTggMjJjLTQuNDExIDAtOCAzLjU4OS04IDhzMy41ODkgOCA4IDggOC0zLjU4OSA4LTgtMy41ODktOC04LTh6TTUyIDIyYy00LjQxMSAwLTggMy41ODktOCA4czMuNTg5IDggOCA4IDgtMy41ODkgOC04LTMuNTg5LTgtOC04ek0zMCAyMmMtNC40MTEgMC04IDMuNTg5LTggOHMzLjU4OSA4IDggOCA4LTMuNTg5IDgtOC0zLjU4OS04LTgtOHoiPjwvcGF0aD48L3N2Zz4K"},88692:(t,e,d)=>{"use strict";d.r(e),d.d(e,{default:()=>n});var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideDropdown,expression:"hideDropdown"}],staticClass:"more",class:{"shift-to-left":t.shiftToLeft,"dropdown-visible":t.active,"more-dash":t.onDash},attrs:{"data-test":"more-container"}},[t._t("moreToggle",[o("div",{staticClass:"icon-wrapper more-toggle",class:{"dash-icon-wrapper":t.onDash,"u--touch-hide":t.onDash},attrs:{"data-test":"more-toggle","data-ob":t.dataOb},on:{click:function(e){return t.$emit("toggle",!t.active)}}},[o("inline-svg",{staticClass:"icon icon-ellipsis more-icon",class:{"dash-icon":t.onDash},attrs:{src:d(20264)}})],1)]),t._v(" "),o("transition",{attrs:{name:"open"}},[t.active?o("div",{ref:"dropdown",staticClass:"dropdown more-dropdown",class:{"app dash-dropdown nipple nipple-top-left":t.onDash},attrs:{"data-test":"dropdown"}},[t._t("header"),t._v(" "),t._t("upsell"),t._v(" "),o("ul",{staticClass:"dropdown-list",class:{"dropdown-hide":t.$slots.upsell},attrs:{"data-test":"dropdown-options"}},[t._t("default")],2)],2):t._e()])],2)};o._withStripped=!0;const s={doNotWaitForMount:!0,name:"Dropdown",directives:{ClickOutside:d(5111).Z},props:{dataOb:{type:String,default:""},active:{type:Boolean,default:!1},onDash:{type:Boolean,default:!1}},data:()=>({shiftToLeft:!1}),watch:{active(t){t?(this.shiftToLeft=!1,this.$nextTick(this.shiftDropdownLeftIfNeeded),window.addEventListener("resize",this.debouncedDropdownShift)):window.removeEventListener("resize",this.debouncedDropdownShift)}},created(){this.$e.listenTo(m,"globalEvent:esc",this.hideDropdown),this.$e.listenTo(m,"globalEvent:toggle:bottom-right",this.hideDropdown)},destroyed(){this.$e.stopListening(m,"globalEvent:esc",this.hideDropdown),this.$e.stopListening(m,"globalEvent:toggle:bottom-right",this.hideDropdown),window.removeEventListener("resize",this.shouldDropdownShiftToLeft)},methods:{hideDropdown(t){this.active&&(this.$touch&&t.stopPropagation(),this.$emit("toggle",!1))},shiftDropdownLeftIfNeeded(){const t=this.$refs.dropdown&&this.$refs.dropdown.getBoundingClientRect();if(!t)return;const e=window.innerWidth-t.right;this.shiftToLeft=!(e>=135)},debouncedDropdownShift(){clearTimeout(this.debounce),this.debounce=setTimeout((()=>{this.shiftToLeft=!1,this.$nextTick(this.shiftDropdownLeftIfNeeded)}),200)}}};d(1813);var i=(0,d(51900).Z)(s,o,[],!1,null,"c8d4d4da",null);i.options.__file="source/addins-vue/shared_components/Dropdown.vue";const n=i.exports},1813:(t,e,d)=>{var o=d(73387);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals),(0,d(45346).Z)("569c9fee",o,!1,{ssrId:!0})}}]);