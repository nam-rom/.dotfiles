(self.webpackChunkmomentum=self.webpackChunkmomentum||[]).push([[7122],{68481:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r={inserted:function(e,t){var a;if(!1===(null==t?void 0:t.value))return;const r=null==e||null===(a=e.value)||void 0===a?void 0:a.length;e.select(),(r||0===r)&&(e.setSelectionRange(r,r),e.scrollLeft=e.scrollWidth)}}},67783:(e,t,a)=>{(t=e.exports=a(23645)(!1)).i(a(40093),""),t.push([e.id,"\n.form-body[data-v-4756e094] { margin-bottom: 0;\n}\n.input-row[data-v-4756e094] { width: var(--form-width-narrow); margin: 0 auto;\n}\n.label-wrapper[data-v-4756e094] { display: flex;\n}\n.external-upgrade[data-v-4756e094] { margin-left: 10px; color: hsl(var(--hue-modal), 48%, 58%); font-size: var(--label-font-size); text-decoration: underline;\n}\n.input[data-v-4756e094] { transition: opacity 0.2s ease;\n}\n.disabled.input[data-v-4756e094] { opacity: 0.5;\n}\n.form-message[data-v-4756e094] { margin: 0;\n}\n.form-message[data-v-4756e094] a { color: hsl(var(--hue-modal), 58%, 60%);\n}\n@media screen and (max-width: 450px) {\n.choose-email .input-row[data-v-4756e094] { width: auto;\n}\n}\n\n",""])},40093:(e,t,a)=>{(e.exports=a(23645)(!1)).push([e.id,".upgrade-flow {\n\t--hue: 187;\n\t--color: rgb(30,30,30);\n\t--color-active: hsl(var(--hue), 50%, 50%);\n\t--color-warning: hsl(7, 100%, 57%);\n\n\t--form-width: 400px;\n\t--form-width-narrow: 340px;\n\t--input-padding: 12px;\n\t--input-margin-bottom: 1.25rem;\n\t--input-bg: rgba(0,0,0,0.03);\n\t--input-border-color: hsl(var(--hue), 2%, 72%);\n\t--input-border-radius: 3px;\n\t--label-font-size: 0.875rem;\n\n\t--color-icon: var(--color-light-text);\n\t--icon-wrapper-bg: rgba(0,0,0,0.05);\n\n\t--a-fast: all 0.1s ease;\n\t--a-medium: all 0.2s ease;\n\n\tpadding: 3rem;\n}\n\n\t.modal .upgrade-flow { padding-bottom: 1rem; }\n\n/* General */\n.u--no-margin-bottom { margin-bottom: 0 !important; }\n\n/* General icon styling from style.css with .upgrade-flow prepended */\n.upgrade-flow .icon-wrapper { padding: 5px; display: inline-flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; }\n\t.upgrade-flow .icon-wrapper:after { --icon-wrapper-size: 25px; height: var(--icon-wrapper-size); width: var(--icon-wrapper-size); position: absolute; z-index: 0; display: block; border-radius: 50px; content: ''; }\n\t.upgrade-flow .icon-wrapper .icon { opacity: 0.5; }\n\t\t.upgrade-flow .icon-wrapper:hover .icon { opacity: 0.8; }\n\t\t.upgrade-flow .icon-wrapper:hover:active .icon { opacity: 1; }\n/* — */\n\n\t/* Form Header */\n\t.upgrade-flow header { position: relative; }\n\t\t.upgrade-flow header h2 { margin: 0 0 0.4rem; color: var(--color); font-family: Poppins, Futura, sans-serif; font-size: 1.5rem; }\n\t\t.upgrade-flow header .description { margin-bottom: 2rem; opacity: 0.7; font-size: 17px; }\n\n\t.upgrade-flow .back { height: 50px; width: 50px; padding: 0; position: absolute; top: 8px; left: 6px; transition: opacity 0.5s ease; }\n\t/* Account site overrides --\x3e */ .upgrade-flow .back { margin: 0; opacity: 1; }\n\t\t.slide-right-fade-enter-active.upgrade-flow .back,\n\t\t.slide-right-fade-leave-active.upgrade-flow .back,\n\t\t.slide-left-fade-enter-active.upgrade-flow .back,\n\t\t.slide-left-fade-leave-active.upgrade-flow .back { opacity: 0; pointer-events: none; }\n\n\t\t.upgrade-flow .back .icon { height: 13px; margin-left: -1px; fill: var(--color-icon); }\n\t\t.upgrade-flow .back .icon-label { position: absolute; left: calc(100% - 2px); opacity: 0; color: var(--color); /* <-- Account site override */ font-size: 0.75rem; font-weight: 600; pointer-events: none; text-transform: uppercase; }\n\t\t\t.upgrade-flow .back:hover .icon-label { opacity: 0.65; }\n\t\t\t.upgrade-flow .back:hover:active .icon-label { opacity: 0.85; }\n\t\t.upgrade-flow .icon-wrapper:after { --icon-wrapper-size: 33px; }\n\t\t\t.upgrade-flow .icon-wrapper:hover:after { background: var(--icon-wrapper-bg); }\n\n\n\t/* Form Body */\n\t.upgrade-flow .form-body { margin: 0 auto 2.75rem; }\n\n\t\t.upgrade-flow label { margin-bottom: 6px; display: block; opacity: 0.9; color: var(--color); font-size: var(--label-font-size); font-weight: 500; text-align: left; text-transform: unset; }\n\t\t\t.upgrade-flow label .optional { margin-left: 5px; opacity: 0.45; font-size: 0.9375rem; }\n\t\t\t.upgrade-flow .input-group:first-child label { margin-top: -4px; }\n\t\t.upgrade-flow input, .upgrade-flow select, .upgrade-flow .StripeElement { width: 100%; margin-bottom: var(--input-margin-bottom); padding: var(--input-padding); border: none; background-color: var(--input-bg); box-shadow: inset 0 0 0 1px var(--input-border-color); border-radius: var(--input-border-radius); color: rgb(30,30,30); font-size: 17px; outline: none; transition: background 0.1s ease, box-shadow 0s ease; } /* <-- .input needed for stripe card input */\n\t\t.upgrade-flow select { margin-right: 8px; margin-bottom: 0; padding-right: 30px !important; -webkit-appearance: none; -webkit-border-radius: var(--input-border-radius); -moz-appearance: none; appearance: none; background-position-x: calc(100% - 6px); }\n\t\t\t.Firefox .upgrade-flow select { padding-top: 13px; padding-bottom: 13px; color: rgba(0,0,0,0); text-shadow: 0 0 0 #000; }\n\n\t\t\t.upgrade-flow input:hover, .upgrade-flow select:hover, .upgrade-flow .radio:hover, .upgrade-flow .input:hover { --input-border-color:  hsl(var(--hue), 2%, 52%); }\n\n\t\t\t.upgrade-flow input:focus, .upgrade-flow select:focus, .upgrade-flow .radio:focus, .upgrade-flow .StripeElement--focus { --input-border-color: hsl(var(--hue), 47%, 50%) !important; box-shadow: inset 0 0 0 2px var(--input-border-color) !important; /* <-- !important needed for account site */ }\n\n\n\n\t\t.upgrade-flow .radio { /*height: 22px; width: 22px; margin: 0; padding: 0; display: inline-block; position: relative; background: hsla(var(--hue), 1%, 93%, 0.4);*/ border-radius: 100%; transition: all var(--transition-medium) ease; }\n\t\t\t.upgrade-flow .active .radio { background: var(--color-active); box-shadow: inset 0 0 0 1px rgba(0,0,0,0.075); }\n\n\t\t\t.upgrade-flow .radio-icon { position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: flex; justify-content: center; align-items: center; font-size: 14px; opacity: 0; transition: all var(--transition-medium) ease; }\n\t\t\t\t.upgrade-flow .active .radio-icon { color: white; opacity: 1; }\n\n\t\t/* Select helpers for custom dropdown icon */\n\t\t.upgrade-flow .select-wrapper { margin-bottom: 1.25rem; margin-right: 0; position: relative; display: inline-block; }\n\t\t\t.upgrade-flow .select-wrapper:before { height: 100%; width: 20px; position: absolute; top: 0; right: 5px; z-index: 1; opacity: 0.8; background: url('/img/icon/down.svg') no-repeat 50% 50%; background-size: 20px; content: ''; pointer-events: none; }\n\n\t\t/* Error states */\n\t\t.upgrade-flow .error > input, .upgrade-flow .error > select, .upgrade-flow .error > textarea { box-shadow: inset 0 0 0 2px var(--color-warning) !important; }\n\n\t\t/* Helper message below input */\n\t\t.upgrade-flow .input-message { margin: 5px 0 0; color: hsl(0, 0%, 46%); font-size: 13px; text-align: left; }\n\n\n\t/* Form Footer */\n\n\t.upgrade-flow form footer { /* margin-top: 34px;*/ }\n\n\t\t.upgrade-flow .form-message { margin: -18px 0 20px; color: rgba(0,0,0,0.7); font-size: var(--label-font-size); font-weight: 500; }\n\t\t\t.upgrade-flow .form-message.error, .upgrade-flow .form-message.warning { color: var(--color-form-warning); }\n\n\t\t\t.upgrade-flow .form-message-label { justify-content: center; } /* Override for Account site */\n\t\t\t.upgrade-flow .form-message-label img { margin-bottom: -3px; margin-right: 7px; } /* Override for Account site */\n\n\t\t.upgrade-flow .button { width: auto; min-width: 240px; padding: 13px 34px; background: hsl(var(--hue), 48%, 58%); box-shadow: 0 0px 12px hsla(var(--hue), 48%, 58%, 0), 0 2px 4px rgba(0,0,0,0); font-family: var(--font-san-fran); font-size: 1rem; font-weight: 500; letter-spacing: 0.3px; line-height: normal; transition: var(--a-fast); }\n\t\t\t.upgrade-flow .button:hover { opacity: 1; background: hsl(var(--hue), 53%, 60%) !important; box-shadow: 0 3px 12px hsla(var(--hue), 54%, 63%, 0.2), 0 2px 4px rgba(0,0,0,0.09); }\n\t\t\t.upgrade-flow .button:hover:active { opacity: 1; background: hsla(var(--hue), 59%, 64%, 1) !important; transform: translateY(1px); transition: all 0s ease; }\n\n\t\t.upgrade-flow .thank-you { margin: 18px 0 0; padding: 0; opacity: 0.6; font-size: 12px; line-height: 1.5; text-align: left; }\n\n\n/* Responsive */\n\n.u--fullscreen-hide { display: none; }\n\n@media handheld and (max-width: 959px), screen and (max-device-width: 959px), screen and (max-width: 959px)  {\n\t.u--fullscreen-only { display: none; }\n\t.u--fullscreen-hide { display: inline; }\n}\n\n@media handheld and (max-width: 740px), screen and (max-device-width: 740px), screen and (max-width: 740px)  {\n}\n",""])},37122:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"upgrade-flow choose-email",attrs:{"data-test":"email"}},[a("header",[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("h2",{key:e.title},[e._v(e._s(e.title))])]),e._v(" "),a("div",{staticClass:"description"},[e._v("Upgrade to Plus")])],1),e._v(" "),a("div",{staticClass:"form-body"},[a("div",{staticClass:"input-row email-row",class:{error:e.error&&"email"===e.error.field}},[a("div",{staticClass:"label-wrapper"},[a("label",[e._v("Email")]),e.unregistered?e._e():a("a",{staticClass:"external-upgrade",attrs:{"data-test":"change-email",href:e.$options.externalUpgradeUrl}},[e._v("Change")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.email,expression:"email",modifiers:{trim:!0}}],ref:"email",staticClass:"input form-field input",class:{disabled:e.disableEmailInput},attrs:{disabled:e.disableEmailInput,"data-test":"email-input",name:"email",type:"email",required:""},domProps:{value:e.email},on:{focus:e.onEmailFocus,blur:[e.onEmailBlur,function(t){return e.$forceUpdate()}],keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onEnter(t)},input:function(t){t.target.composing||(e.email=t.target.value.trim())}}})]),e._v(" "),a("transition",{attrs:{name:"fade"}},[e.showPasswordInput?a("div",{staticClass:"input-row password-row",class:{error:e.error&&"password"===e.error.field}},[a("label",[e._v("Password")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"},{name:"soft-focus",rawName:"v-soft-focus"}],ref:"password",staticClass:"input form-field password",class:{disabled:e.disablePasswordInput},attrs:{disabled:e.disablePasswordInput||e.processing,name:"password",type:"password"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onEnter(t)},input:function(t){t.target.composing||(e.password=t.target.value)}}})]):e._e()]),e._v(" "),a("footer",[e.error?a("div",{staticClass:"form-message error",attrs:{"data-test":"form-error"},domProps:{innerHTML:e._s(e.error.message)}}):e._e()])],1)])};r._withStripped=!0;var o=a(68481),n=a(94333);const i={name:"Email",externalUpgradeUrl:m.globals.urlRootAccount+"upgrade",directives:{SoftFocus:o.Z},unreactive:()=>({unregistered:localStorage.getItem("unregistered")}),props:{processing:{type:Boolean,default:!1}},data:()=>({email:localStorage.getItem("email")||"",password:"",accountExists:null,showPasswordInput:!1,disablePasswordInput:!1,error:null}),computed:{disableEmailInput(){return!this.unregistered||this.processing},title(){return this.showPasswordInput?(this.accountExists?"Enter your":"Choose a")+" password":(this.unregistered?"Enter":"Confirm")+" your email"}},created(){this.$e.on("modal:interceptSubStepCompletion",this.validateForm)},mounted(){this.unregistered&&this.$refs.email.focus()},destroyed(){this.$e.off("modal:interceptSubStepCompletion",this.validateForm)},methods:{validateForm(){this.processing||(this.error=null,this.email?m.utils.validateEmail(this.email)?this.unregistered&&m.utils.useAppleAppPayment()?!this.showPasswordInput||this.disablePasswordInput?this.checkEmail():this.password?this.password.length<6?this.setError(n.Qj.PASSWORD_INVALID,"password"):(this.$emit("update:processing",!0),this[this.accountExists?"login":"register"](this.email,this.password).then((e=>{m.utils.handleAuthResponse(e),localStorage.setItem("openAppleUpgradeOnLoad",!0),location.reload()})).catch((e=>{"string"==typeof e&&(e+=' <a target="_blank" href="https://momentumdash.com/contact">Contact us</a> if you need help.'),this.setError(e)})).finally((()=>this.$emit("update:processing",!1)))):this.setError(n.Qj.PASSWORD_EMPTY,"password"):(this.saveEmail(),this.$e.trigger("modal:subStepCompletionIntercepted")):this.setError(n.Qj.EMAIL_INVALID_SHORT,"email"):this.setError(n.Qj.EMAIL_EMPTY,"email"))},register(e,t){const a=m.models.customization.get("displayname");return this.$xhr(m.globals.urlRootLogin+"user/register",{method:"post",data:{name:a,email:e,password:t,version:m.globals.version}}).then((e=>e.data)).catch((e=>{throw console.error(e),n.Qj.SERVER_ERROR_GENERAL}))},login(e,t){return this.$xhr(m.globals.urlRootLogin+"user/authenticate",{method:"post",data:{username:e,password:t}}).then((e=>{const t=e.data;let a=t.features&&JSON.parse(atob(t.features));if(a.includes("plus")||a.includes("team"))throw"This account already has an active subscription.";return e.data})).catch((e=>{if("string"==typeof e)throw e;if(400===e.response.status||401===e.status)throw n.Qj.PASSWORD_INCORRECT_SHORT;throw 429===e.response.status?n.Qj.TOO_MANY_ATTEMPTS:(console.error(e),n.Qj.SERVER_ERROR_GENERAL)}))},checkEmail(){return this.$emit("update:processing",!0),this.$xhr.get("user-search?email="+encodeURIComponent(this.email)).then((()=>this.accountExists=!0)).catch((()=>this.accountExists=!1)).finally((()=>{this.showPasswordInput=!0,this.disablePasswordInput=!1,this.$emit("update:processing",!1),this.$nextTick((()=>{var e;return null===(e=this.$refs.password)||void 0===e?void 0:e.focus()}))}))},onEmailFocus(){m.utils.useAppleAppPayment()&&(this.disablePasswordInput=!0)},onEmailBlur(){this.unregistered&&m.utils.useAppleAppPayment()&&(this.disablePasswordInput||!this.showPasswordInput)&&this.validateForm()},setError(e,t="general"){this.error={message:e,field:t}},saveEmail(){let e=localStorage.getObject("upgrade-data")||{};e.email=this.email,localStorage.setObject("upgrade-data",e),localStorage.getItem("email")||localStorage.setItem("email",this.email)},onEnter(){this.$emit("nextStep")}}};a(27511);var s=(0,a(51900).Z)(i,r,[],!1,null,"4756e094",null);s.options.__file="source/addins-vue/modal/upgrade/Email.vue";const l=s.exports},27511:(e,t,a)=>{var r=a(67783);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,a(45346).Z)("0705d580",r,!1,{ssrId:!0})}}]);