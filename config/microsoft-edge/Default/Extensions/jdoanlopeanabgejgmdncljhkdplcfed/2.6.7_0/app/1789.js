"use strict";(self.webpackChunkmomentum=self.webpackChunkmomentum||[]).push([[1789],{21789:(t,s,e)=>{e.r(s),e.d(s,{default:()=>o});var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"button accept",class:{disabled:t.processing},attrs:{"data-test":"start"},on:{click:t.acceptTrial}},[t.processing?a("span",[t._v(t._s(t.buttonProcessingText))]):a("span",[t._v(t._s(t.buttonText)+" "),a("inline-svg",{staticClass:"icon icon-next",attrs:{src:e(79557)}})],1)]),t._v(" "),t.showCancelBtn?a("div",{staticClass:"button-cancel-container"},[a("div",{staticClass:"button-cancel",attrs:{"data-test":"cancel"},on:{click:t.rejectTrial}},[t._v(t._s(t.cancelText))])]):t._e(),t._v(" "),a("transition",{attrs:{name:"fade",duration:"200"}},[t.errorMessage?a("div",{staticClass:"error",domProps:{innerHTML:t._s(t.errorMessage)}}):t._e()])],1)};a._withStripped=!0;const n=new(e(19110).Z)("tab.plusTrial",.1),r={name:"IntroHelper",props:{plans:{type:Object,default:()=>({})},showCancelBtn:{type:Boolean,default:!0},cancelText:{type:String,default:"No, thank you"},buttonText:{type:String,default:"Customize your enhanced dashboard"},buttonProcessingText:{type:String,default:"Preparing your dashboard…"}},data:()=>({processing:!1,errorMessage:""}),methods:{rejectTrial(){this.$emit("dismiss")},async acceptTrial(){if(this.errorMessage="",this.processing=!0,this.$plus)return this.$emit("next");try{this.plans.monthly||await new Promise((t=>{const s=this.$watch("plans",(e=>{e.monthly&&(s(),t())}),{deep:!0})})),await this.$xhr.post("account/subscriptions",{trial:!0,plan_id:this.plans.monthly.id}),this.loadPlusWidgetsAndProceed()}catch(s){var t;if(422===(null==s||null===(t=s.response)||void 0===t?void 0:t.status)&&this.$plus)return void this.loadPlusWidgetsAndProceed();this.processing=!1,console.error(s),m.globals.isProduction&&n.error("Signing up for PLUS trial error",s),this.errorMessage='Something went wrong. If the issue persists, please <a target="_blank" href="https://momentumdash.com/contact">contact us.</a>'}},loadPlusWidgetsAndProceed(){m.syncCoordinator.syncSettings((()=>{m.widgetManager.populateWidgets(),this.$emit("next")}))}}};var i=(0,e(51900).Z)(r,a,[],!1,null,null,null);i.options.__file="source/addins-vue/modal/onboarding/TrialSignUp.vue";const o=i.exports}}]);