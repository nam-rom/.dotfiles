"use strict";(self.webpackChunkmomentum=self.webpackChunkmomentum||[]).push([[6615],{86615:(e,n,t)=>{t.r(n);var l=t(50700),o=t(1862),s=t(9116);const a=JSON.parse('{"widget":true,"webpack":true,"id":"quicklinks","class":"links","label":"Links","appClass":"links-app calculates-own-max-height","region":"top-left","order":"prepend","width":260,"openState":"LinksOpen","keepOpenSetting":"linksKeepOpen","placeholderType":"pane","addin":"ad54d482-248b-4abf-b5b0-a8eaf3e89132","requiredFeature":["!teamLinks"],"storedHeight":"links-height","toggleEvent":"globalEvent:key:L","closeOnEsc":"true","visibleSetting":"linksVisible"}');t(21306),m.widgetManager.handover("quicklinks",null,{region:"top-left",order:"prepend",bootstrap:function(e,n){function t(i){m.models.customization.get("linksVisible")&&(n(new s.Z({collection:i,region:"top-left",order:"prepend",name:"Links",team:!1,id:"quicklinks",el:e,metadata:a})),m.stopListening(m.models.customization,"change:linksVisible"))}m.conditionalFeatures.checkFeatureAndMigrateData("serverlinks","linksVisible","momentum-quicklinks",(function(){t(new l.Z(null,{model:o.Z}))}),(function(){!function(){let e=localStorage.getItem("momentum-quicklinks");if(!e)return;localStorage.setItem("quicklinks",e);let n=Object.keys(localStorage);for(i=0;i<n.length;i++)if(key=n[i],0===key.indexOf("momentum-quicklinks")&&key.length>20){let e=JSON.parse(localStorage.getItem(key));e.csid||(e.csid=e.id,delete e.id),localStorage.setItem("quicklinks-"+e.csid,JSON.stringify(e)),localStorage.removeItem(key)}localStorage.removeItem("momentum-quicklinks")}(),t(new l.Z(null,{model:o.Z,offlineOnly:!0}))}),(function(e){m.listenTo(m.models.customization,"change:linksVisible",e)}))}})}}]);