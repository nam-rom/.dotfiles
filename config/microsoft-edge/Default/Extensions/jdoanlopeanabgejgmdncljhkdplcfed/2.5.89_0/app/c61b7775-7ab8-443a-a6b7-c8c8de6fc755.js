var fn_addin=function(d,s,n){var l=l||{};l.styles=l.styles||{},l.commands=l.commands||{},l.dependencies=n||l.dependencies||{},l.styles.style=function(){},l.views=l.views||{},l.collect=l.collect||{},l.models=l.models||{},l.templates=l.templates||{},l.info={addin:"c61b7775-7ab8-443a-a6b7-c8c8de6fc755",dependencies:["settings"],id:"settings_trello",commands:["settings.panels.trello.config"]},d.console.log(d.elapsed()+": "+l.info.id+" started"),l.templates=l.templates||{},l.templates.boards_available=Handlebars.template({1:function(n,e,t,a,o){var i,s,l=null!=e?e:n.nullContext||{},r=n.hooks.helperMissing,c="function",d=n.escapeExpression,p=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'        <li data-board-id="'+d(typeof(s=null!=(s=p(t,"id")||(null!=e?p(e,"id"):e))?s:r)==c?s.call(l,{name:"id",hash:{},data:o,loc:{start:{line:4,column:27},end:{line:4,column:33}}}):s)+'" class="connect-board"><span class="board-icon">'+(null!=(i=p(t,"if").call(l,null!=e?p(e,"icon_url"):e,{name:"if",hash:{},fn:n.program(2,o,0),inverse:n.noop,data:o,loc:{start:{line:4,column:82},end:{line:4,column:152}}}))?i:"")+"</span> "+d(typeof(s=null!=(s=p(t,"board_name")||(null!=e?p(e,"board_name"):e))?s:r)==c?s.call(l,{name:"board_name",hash:{},data:o,loc:{start:{line:4,column:160},end:{line:4,column:174}}}):s)+'\n        <span class="u--right"><span class="status"></span></span></li>\n'},2:function(n,e,t,a,o){var i,s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<img class="todo-list-icon" src="'+n.escapeExpression("function"==typeof(i=null!=(i=s(t,"icon_url")||(null!=e?s(e,"icon_url"):e))?i:n.hooks.helperMissing)?i.call(null!=e?e:n.nullContext||{},{name:"icon_url",hash:{},data:o,loc:{start:{line:4,column:131},end:{line:4,column:143}}}):i)+'">'},compiler:[8,">= 4.3.0"],main:function(n,e,t,a,o){var i,s,l=null!=e?e:n.nullContext||{},r=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"<h5>"+n.escapeExpression("function"==typeof(s=null!=(s=r(t,"organization_name")||(null!=e?r(e,"organization_name"):e))?s:n.hooks.helperMissing)?s.call(l,{name:"organization_name",hash:{},data:o,loc:{start:{line:1,column:4},end:{line:1,column:25}}}):s)+'</h5>\n<ul class="settings-list provider-list add-provider">\n'+(null!=(i=r(t,"each").call(l,null!=e?r(e,"boards"):e,{name:"each",hash:{},fn:n.program(1,o,0),inverse:n.noop,data:o,loc:{start:{line:3,column:4},end:{line:6,column:13}}}))?i:"")+"</ul>"},useData:!0}),l.templates.boards_connected=Handlebars.template({1:function(n,e,t,a,o){var i,s,l=null!=e?e:n.nullContext||{},r=n.hooks.helperMissing,c="function",d=n.escapeExpression,p=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'\t<li data-board-id="'+d(typeof(s=null!=(s=p(t,"id")||(null!=e?p(e,"id"):e))?s:r)==c?s.call(l,{name:"id",hash:{},data:o,loc:{start:{line:4,column:20},end:{line:4,column:26}}}):s)+'" class="has-board-id">\n\t\t<span class="u--flex-grow">\n\t\t\t<span class="board-icon">'+(null!=(i=p(t,"if").call(l,null!=e?p(e,"icon_url"):e,{name:"if",hash:{},fn:n.program(2,o,0),inverse:n.noop,data:o,loc:{start:{line:6,column:28},end:{line:6,column:98}}}))?i:"")+d(typeof(s=null!=(s=p(t,"board_name")||(null!=e?p(e,"board_name"):e))?s:r)==c?s.call(l,{name:"board_name",hash:{},data:o,loc:{start:{line:6,column:98},end:{line:6,column:112}}}):s)+'</span>\n\t\t</span>\n\t\t<span class="settings-list-right">\n\t\t\t<span class="provider-actions">\n\t\t\t\t<span class="provider-action disconnect-board">Disconnect</span>\n\t\t\t</span>\n\t\t\t<span class="status">Connected</span>\n\t\t</span>\n\t</li>\n'},2:function(n,e,t,a,o){var i,s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<img class="todo-list-icon" src="'+n.escapeExpression("function"==typeof(i=null!=(i=s(t,"icon_url")||(null!=e?s(e,"icon_url"):e))?i:n.hooks.helperMissing)?i.call(null!=e?e:n.nullContext||{},{name:"icon_url",hash:{},data:o,loc:{start:{line:6,column:77},end:{line:6,column:89}}}):i)+'">'},compiler:[8,">= 4.3.0"],main:function(n,e,t,a,o){var i,s,l=null!=e?e:n.nullContext||{},r=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"<h5>"+n.escapeExpression("function"==typeof(s=null!=(s=r(t,"organization_name")||(null!=e?r(e,"organization_name"):e))?s:n.hooks.helperMissing)?s.call(l,{name:"organization_name",hash:{},data:o,loc:{start:{line:1,column:4},end:{line:1,column:25}}}):s)+'</h5>\n<ul class="settings-list provider-list connected-providers">\n'+(null!=(i=r(t,"each").call(l,null!=e?r(e,"boards"):e,{name:"each",hash:{},fn:n.program(1,o,0),inverse:n.noop,data:o,loc:{start:{line:3,column:4},end:{line:15,column:13}}}))?i:"")+"</ul>\n"},useData:!0}),l.templates.main=Handlebars.template({compiler:[8,">= 4.3.0"],main:function(n,e,t,a,o){return'<div class="settings-detail-header">\n\t<span class="icon-wrapper back" title="Back"><i class="icon icon-left"></i></span>\n\t<h3><img src="https://az814671.vo.msecnd.net/logos/trello-blue-128.png"> Trello</h3>\n\t<p class="description">Choose the boards you\'d like to use in Momentum</p>\n</div>\n\n<h4 id="connected-boards-header">Connected Boards</h4>\n\n<div id="connected-providers" class="provider-list-wrapper"><span class="loading"><i class="loading-icon"></i>Loading...</span></div>\n<p class="empty">No Trello boards connected yet. Add a Board to get started!</p>\n\n<button class="button show-form toggle-form">Add Board</button>\n\n<div class="form" style="display: none;">\n\t<h4>Add Board</h4>\n\t<p class="all-connected">Congratulations, you\'re fully connected!</p>\n\t<div id="available-providers" class="provider-list-wrapper"><span class="loading"><i class="loading-icon"></i>Loading...</span></div>\n\t<div class="suggest-integration">\n\t\t<h5>Suggestions for this integration?</h5>\n\t\t<p>\x3c!--We\'d love to hear what other services you use.<br>--\x3e\n\t\t\t<a href="https://momentumdash.com/contact">Make a suggestion</a></p>\n\t</div>\n</div>\n\n<div class="settings-connect"></div>\n'},useData:!0}),l.styles=l.styles||{},l.styles.style=function(){var n=document.createElement("style");n.type="text/css",n.innerHTML=".settings-trello .form{margin-top:25px}",document.getElementsByTagName("head")[0].appendChild(n)};var e=l.dependencies.settings;return l.views.Main=e.views.SettingsPanel.extend({attributes:{id:"settings-trello",class:"settings-view settings-trello"},template:l.templates.main,panelid:"trello",events:{"click .connect-board":"connectBoard","click .disconnect-board":"disconnectBoard","click #connect-button":"connectTodoProvider","click .toggle-form":"toggleForm","click .back":"clickedBack"},initialize:function(){var e=this;this.collection=new d.collect.Settings,this.collection.url=d.globals.urlRootApi+"settings/todo/providers/5",this.collection.parse=function(n){return e.collection.lastResponse=n,e.collection.organizations=_.chain(e.collection.lastResponse.available_boards).map(function(n){if(n.organization_id)return{id:n.organization_id,name:n.organization_name}}).uniq(function(n){return n?n.id:null}).omit(_.isUndefined).omit(_.isNull).sortBy("name").value(),n.connected_boards},this.listenTo(this.collection,"reset",this.collectionReset),this.listenTo(d.models.customization,"change",this.customizationChanged),this.refreshData()},render:function(){return this.$el.html(this.template({})),this.$connect=this.$(".settings-connect")[0],this.$settingsTrello=this.$(".settings-trello")[0],this.$("#connected-boards-header").hide(),this},collectionReset:function(){this.populateConnectedBoards(),this.populateAvailableBoards()},refreshData:function(){this.collection.fetch({reset:!0})},disconnectBoard:function(n){n&&(n.stopPropagation(),n.preventDefault());var e=s(n.delegatedTarget).closest(".has-board-id"),t=e.data("board-id");if(t){s(n.delegatedTarget).hide(),e.find(".status").html('<span class="loading disconnecting-board"><i class="loading-icon"></i>Disconnecting...</span>');var r=this;this.authAttempts=0;var a=d.globals.urlRootApi+"settings/todo/providers/5",o={operation:"disconnect_board",board_id:t};s.ajax({type:"POST",contentType:"application/json",url:a,data:JSON.stringify(o)}).done(function(n){if(n.status&&"authRequired"==n.status){if(n.authorizationUrl&&r.authAttempts<2){r.authAttempts++;var e=n.winWidth?n.winWidth:600,t=n.winHeight?n.winHeight:510,a=n.windowFeatures?n.windowFeatures:"titlebar,resizable,toolbar,status",o=window.screen.width/2-e/2,i=window.screen.height/2-t/2,s=window.open(n.authorizationUrl,"MomentumAuthWindow",a+",left="+o+",top="+i+",width="+e+",height="+t),l=setInterval(function(){s.closed&&(clearInterval(l),r.$connect.hide(),r.$settingsTrello.css("display","block"),r.$el.find(".pop-body").scrollTop(0),r.refreshData(),d.commandManager.execute("settings.todo.provider.change",null,{provider_id:"1"}))},250)}}else n.status&&"success"==n.status&&d.commandManager.execute("settings.todo.provider.change",null,{provider_id:"1"}),r.$el.find(".pop-body").scrollTop(0),r.refreshData()}).fail(function(){r.$el.find(".pop-body").scrollTop(0),r.refreshData()})}},connectBoard:function(n){n&&(n.stopPropagation(),n.preventDefault());var e=s(n.delegatedTarget).data("board-id");if(e){s(n.delegatedTarget).find(".status").html('<span class="loading"><i class="loading-icon"></i>Connecting...</span>');var r=this;this.authAttempts=0;var t=d.globals.urlRootApi+"settings/todo/providers/5",c={operation:"connect_board",board_id:e};s.ajax({type:"POST",contentType:"application/json",url:t,data:JSON.stringify(c)}).done(function(n){if(n.status&&"authRequired"==n.status){if(n.authorizationUrl&&r.authAttempts<2){r.authAttempts++;var e=n.winWidth?n.winWidth:600,t=n.winHeight?n.winHeight:510,a=n.windowFeatures?n.windowFeatures:"titlebar,resizable,toolbar,status",o=window.screen.width/2-e/2,i=window.screen.height/2-t/2,s=window.open(n.authorizationUrl,"MomentumAuthWindow",a+",left="+o+",top="+i+",width="+e+",height="+t),l=setInterval(function(){s.closed&&(clearInterval(l),r.$connect.hide(),r.$settingsTrello.css("display","block"),r.$el.find(".pop-body").scrollTop(0),r.refreshData(),d.commandManager.execute("settings.todo.provider.change",null,{provider_id:"5-"+c.board_id}))},250)}}else n.status&&"success"==n.status&&(r.$el.find(".pop-body").scrollTop(0),r.refreshData(),d.commandManager.execute("settings.todo.provider.change",null,{provider_id:"5-"+c.board_id}))}).fail(function(){})}},clickedBack:function(n){n&&(n.stopPropagation(),n.preventDefault()),d.commandManager.execute("settings.display",null,{section:"todo"})},populateConnectedBoards:function(){var n=s(this.$("#connected-providers")[0]),e=l.templates.boards_connected({organization_name:"",boards:this.collection.toJSON()});n.html(e),this.collection.length<1?(this.$(".show-form").hide(),this.$("#connected-boards-header").hide(),this.$(".form").css("display","block"),this.$(".empty").css("display","block"),n.hide()):(n.css("display","block"),this.$(".empty").hide(),this.$("#connected-boards-header").css("display","block"))},populateAvailableBoards:function(){var a=this,o=s(this.$("#available-providers")[0]);o.html("");var n=_.chain(a.collection.lastResponse.available_boards).where({starred:!0}).sortBy("board_name").value();if(n&&0<n.length){var e=l.templates.boards_available({organization_name:"Starred Boards",boards:n});o.append(e)}var t=_.chain(a.collection.lastResponse.available_boards).filter(function(n){return null!=n.dateLastActivity}).sortBy("dateLastActivity").reverse().first(5).value();if(t&&0<t.length){e=l.templates.boards_available({organization_name:"Recent Boards",boards:t});o.append(e)}var i=_.chain(a.collection.lastResponse.available_boards).filter(function(n){return!n.organization_id}).sortBy("board_name").value();if(i&&0<i.length){e=l.templates.boards_available({organization_name:"My Boards",boards:i});o.append(e)}_.each(a.collection.organizations,function(n){var e=_.chain(a.collection.lastResponse.available_boards).where({organization_id:n.id}).sortBy("board_name").value();if(e&&0<e.length){var t=l.templates.boards_available({organization_name:n.name,boards:e});o.append(t)}}),0==this.collection.lastResponse.available_boards.length?(this.$(".all-connected").css("display","block"),this.$("#available-providers").hide()):(this.$(".all-connected").hide(),this.$("#available-providers").css("display","block"))},toggleForm:function(){this.$(".show-form").mToggle("inline-block"),this.$(".form").mToggle("block")}}),d.commandManager&&d.commandManager.registerCommand("settings.panels.trello.config",function(){return l.styleLoaded||(l.styleLoaded=!0,l.styles.style()),new l.views.Main}),l};m.addinManager&&m.addinManager.registerAddinFn("c61b7775-7ab8-443a-a6b7-c8c8de6fc755",fn_addin);