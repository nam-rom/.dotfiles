"use strict";(self.webpackChunkmomentum=self.webpackChunkmomentum||[]).push([[8338],{33758:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade",mode:"out-in"},on:{"after-enter":e.afterEnter}},[!e.showGreeting||e.mantraOverride?n("div",{key:"mantra"},[n("mantra",{attrs:{"forced-mantra":e.mantraOverride},on:{"show-greeting":function(t){e.showGreeting=!0},"stop-cycle":e.stopMantraGreetingCycle}})],1):n("div",{key:"greeting"},[n("greeting",{on:{"show-mantra":function(t){e.showGreeting=!1},"stop-cycle":e.stopMantraGreetingCycle}})],1)])};a._withStripped=!0;const r={name:"GreetingMantraContainer",components:{Greeting:()=>Promise.all([n.e(3001),n.e(5448)]).then(n.bind(n,7730)),Mantra:()=>Promise.all([n.e(3001),n.e(2891)]).then(n.bind(n,22891))},mixins:[n(51940).Z],mantraManager:m.models.mantraManager,data:()=>({showGreeting:null,timeoutId:null,intervalId:null,mantraOverride:null}),computed:{isMantraShowing(){return!1===this.showGreeting}},created(){this.$e.listenTo(m,"globalEvent:pageHidden",this.clearMantraGreetingCycleIfInAlternatingMode),this.$e.listenTo(m,"globalEvent:pageShown",this.setMantraGreetingCycleIfInAlternatingMode),this.$e.listenTo(m.models.customization,"change:mantraVisible",this.toggleMantraFromTrigger),this.$e.listenTo(m.models.mantraManager,"show-mantra",this.showMantraFromTrigger),this.$e.listenTo(m.models.mantraSettings,"change:firstMantraActivated",this.showMantraFromTrigger),this.$e.listenTo(m.models.mantraManager,"show-greeting",this.showGreetingFromTrigger),this.$e.listenTo(m.models.mantraSettings,"change:frequency",this.mantraFrequencyChangeFromTrigger),this.$e.listenTo(m.models.mantraManager,"mantra-pin",this.showPinnnedMantraFromTrigger),this.$e.listenTo(m.models.mantraManager,"mantra-un-pin",this.hidePinnnedMantraFromTrigger),this.$e.listenTo(m.models.mantraManager,"mantra-active-change",this.showMantraFromTrigger),this.$options.mantraManager.shouldShowMantraAfterGreetingFirstTabOfDay()&&this.showMantraOnTimeoutForFirstTabOfDay(),m.on("mantra:override",this.overrideMantra),m.trigger("greetingMantraContainer:created"),this.showGreeting=!this.$options.mantraManager.checkIfMantraShouldBeShown(),this.showGreeting&&!this.$options.mantraManager.hasSeenGreetingToday()&&this.$options.mantraManager.markGreetingAsSeenToday(),this.setMantraGreetingCycleIfInAlternatingMode()},destroyed(){this.clearMantraGreetingCycle(),this.$e.stopListening(m,"globalEvent:pageHidden",this.clearMantraGreetingCycleIfInAlternatingMode),this.$e.stopListening(m,"globalEvent:pageShown",this.setMantraGreetingCycleIfInAlternatingMode),this.$e.stopListening(m.models.customization,"change:mantraVisible",this.toggleMantraFromTrigger),this.$e.stopListening(m.models.mantraManager,"show-mantra",this.showMantraFromTrigger),this.$e.stopListening(m.models.mantraManager,"show-greeting",this.showGreetingFromTrigger),this.$e.stopListening(m.models.mantraManager,"mantra-pin",this.clearAndSetMantraGreetingCycleIfInAlternatingMode),this.$e.stopListening(m.models.mantraSettings,"change:frequency",this.mantraFrequencyChangeFromTrigger),m.off("mantra:override",this.overrideMantra)},methods:{overrideMantra(e){this.mantraOverride=e,this.clearMantraGreetingCycle()},afterEnter(){m.trigger("showGreeting:updated")},showMantraOnTimeoutForFirstTabOfDay(){this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout((()=>{this.showGreeting=!1}),this.$options.mantraManager.durationGreetingFirstTabOfDay),this.$options.mantraManager.markGreetingAsSeenToday()},showGreetingFromTrigger(){this.clearAndSetMantraGreetingCycleIfInAlternatingMode(),this.showGreeting=!0},showMantraFromTrigger(){this.$options.mantraManager.getActiveItem()&&(this.clearAndSetMantraGreetingCycleIfInAlternatingMode(),this.showGreeting=!1)},toggleMantraFromTrigger(){this.$options.mantraManager.isEnabled()&&this.$options.mantraManager.getActiveItem()&&this.showGreeting?this.showGreeting=!1:this.showGreeting=!0,this.clearAndSetMantraGreetingCycleIfInAlternatingMode()},mantraFrequencyChangeFromTrigger(){this.clearMantraGreetingCycle(),this.$options.mantraManager.isFrequencyAlways()?this.showGreeting=!1:this.setMantraGreetingCycleIfInAlternatingMode()},setMantraGreetingCycleIfInAlternatingMode(){this.intervalId||this.$options.mantraManager.noMantra||this.$options.mantraManager.activeFeedsEmpty()||!this.$options.mantraManager.isEnabled()||!this.$options.mantraManager.isInAlternatingMode()||this.setMantraGreetingCycleInterval()},setMantraGreetingCycleInterval(){if(this.intervalId)return;const e=this.$options.mantraManager.getDurationTotal();e&&(this.intervalId=setInterval(this.setMantraGreetingCycleTimeout,e),this.setMantraGreetingCycleTimeoutInitial())},setMantraGreetingCycleTimeout(){this.isMantraShowing?(this.setMantraGreetingCycleTimeoutHelper("mantra","greeting"),document.hidden||(this.showGreeting=!0)):(document.hidden||(this.showGreeting=!1),this.setMantraGreetingCycleTimeoutHelper("greeting","mantra"))},setMantraGreetingCycleTimeoutInitial(){this.isMantraShowing?this.setMantraGreetingCycleTimeoutHelper("greeting","mantra"):this.setMantraGreetingCycleTimeoutHelper("mantra","greeting")},setMantraGreetingCycleTimeoutHelper(e,t){this.$options.mantraManager.getDuration(t)>0&&(this.timeoutId=setTimeout((()=>{document.hidden||("greeting"===e?this.showGreeting=!0:"mantra"===e&&(this.showGreeting=!1))}),this.$options.mantraManager.getDuration(t)))},clearMantraGreetingCycleIfInAlternatingMode(){this.intervalId&&this.$options.mantraManager.isEnabled()&&this.$options.mantraManager.isInAlternatingMode()&&this.clearMantraGreetingCycle()},clearMantraGreetingCycle(){clearInterval(this.intervalId),clearTimeout(this.timeoutId),this.intervalId=null,this.timeoutId=null},clearAndSetMantraGreetingCycleIfInAlternatingMode(){this.clearMantraGreetingCycle(),this.setMantraGreetingCycleIfInAlternatingMode()},stopMantraGreetingCycle(e){e?this.clearMantraGreetingCycle():this.setMantraGreetingCycleIfInAlternatingMode()},showPinnnedMantraFromTrigger(){this.showGreeting=!1,this.clearMantraGreetingCycleIfInAlternatingMode()},hidePinnnedMantraFromTrigger(){this.showGreeting=!0,this.clearMantraGreetingCycleIfInAlternatingMode()}}};var i=(0,n(51900).Z)(r,a,[],!1,null,null,null);i.options.__file="source/addins-vue/greetings-mantra/GreetingMantraContainer.vue";const s=i.exports}}]);