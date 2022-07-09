var preivewConfig={ws:"wss",domain:"preview.awesomescreenshot.com",cookie:"awesomescreenshot.com",schema:"https"},wwwConfig={ws:"wss",domain:"www.awesomescreenshot.com",cookie:"awesomescreenshot.com",schema:"https"},awsConfig={ws:"ws",domain:"www.aws.cn",cookie:"aws.cn",schema:"http"},config=wwwConfig;function SocketClient(e){this.active=!0,this.URL=config.ws+"://"+config.domain+"/websocket/video/open",this.socket=null,this.status="unconnected",this.sentQueue=[],this.willSendQueue=[],this.currentSendId=1,this.option=e,this.retryCount=0,this.retryTimeout=null,this.videoURI="",this.paused=!1,this.lock=!1,this.videoName="",this.videoID="",this.needReconnect=!0,this.lastOnLine=!0}SocketClient.prototype.connect=function(){var e=this;clearTimeout(e.retryTimeout),e.retryTimeout=null,e.socket=new WebSocket(this.URL+"?time="+(new Date).getTime()),e.socket.binaryType="blob",e.socket.onopen=function(){e.status="connected",chrome.cookies.getAll({domain:config.cookie},(function(t){var n="",o="";if(t.forEach((function(e){"screenshot_personal_session_id"===e.name?n=e.value:"screenshot_personal_uid"===e.name&&(o=e.value)})),e.videoName)e.socket.send(JSON.stringify({type:"recover",videoName:e.videoName,token:n,userID:o}));else{var i=getFormatName();e.socket.send(JSON.stringify({type:"init",title:i,token:n,userID:o,extra:{userAgent:navigator.userAgent,client:getClientStr(),extVersion:currentversion,recordType:currentRecordType,sourceURL:"camera"===currentRecordType?"":currentRecordingTabUrl,screenSize:window.screen.width*window.devicePixelRatio+"*"+window.screen.height*window.devicePixelRatio,countdown:localStorage.record_countdown}}))}}))},e.socket.onclose=function(t){e.status="unconnected",!isRecordingPaused&&e.needReconnect&&e.reConnect(),e.needReconnect||(e.needReconnect=!0)},e.socket.onerror=function(e){},e.socket.onmessage=function(t){if(t.data){var n=JSON.parse(t.data);if("slice"===n.type){var o=e.sentQueue.findIndex((function(e){return e.id===Number(n.id)}));e.sentQueue.splice(o,1)}else"init"===n.type?("1"===n.status?(e.videoURI=n.videoURI,e.videoName=n.videoName,e.videoID=n.videoID,e.option&&e.option.onopen()):(setDefaults(),e.needReconnect=!1),e.retryCount=0):"recover"===n.type?("1"===n.status?((isRecordingPaused||e.paused)&&(e.paused=!1,e.active&&resumeScreenRecording()),e.resendSent(Number(n.id))):"2"===n.status||(e.active&&stopStream(),e.needReconnect=!1),e.retryCount=0):"complete"===n.type&&(e.needReconnect=!1,e.sentQueue=[],e.willSendQueue=[],e.close(1e3))}}},SocketClient.prototype.reConnect=function(){var e=this;e.status="reconnecting",e.socket=null,e.retryCount<5?(0===e.retryCount?e.connect():setTimeout((function(){e.connect()}),2500),e.retryCount++):("recording"!==recordingStatus?(e.needReconnect=!1,e.active&&(setDefaults(),$.ajax({method:"GET",url:config.schema+"://"+config.domain+"/api/v1/common/check_status",success:function(e){100===e.code&&alert(e.msg)}}))):e.handleError(),e.retryCount=1)},SocketClient.prototype.complete=function(){var e=this;"connected"===e.status?(e.socket.send(JSON.stringify({type:"complete",videoName:this.videoName,stopAt:(new Date).getTime()/1e3})),e.sentQueue.push({type:"complete",videoName:this.videoName,stopAt:(new Date).getTime()})):SocketClient.httpComplete(e.videoName).then((function(t){1===t.code?e.active&&(localStorage.video_need_complete=""):(e.sentQueue=[],e.willSendQueue=[])})),e.active=!1},SocketClient.prototype.pause=function(e){if("connected"===this.status){var t={type:"pause",videoName:this.videoName};e&&(t.isErrorPause="true"),this.socket.send(JSON.stringify(t)),localStorage.video_need_complete=this.videoName}},SocketClient.prototype.close=function(e){e=e||1e3,this.socket&&(this.socket.close(e),this.status="unconnected",this.socket=null)},SocketClient.prototype.sendWillsend=function(){var e=this,t=e.willSendQueue.slice();e.willSendQueue=[],t.forEach((function(t){e.send(t)}))},SocketClient.prototype.resendSent=function(e){var t=this;t.lock=!0,t.sentQueue.forEach((function(n){n.id?n.id>e&&t.send(n.data,!0):"complete"===n.type&&t.socket.send(JSON.stringify(n))})),t.lock=!1},SocketClient.prototype.checkData=function(){this.sentQueue.length;this.willSendQueue.length>150&&this.handleError()},SocketClient.prototype.send=function(e,t){var n=this;!n.lastOnLine&&window.navigator.onLine,"connected"!==n.status?n.willSendQueue.push(e):t?window.navigator.onLine?n.socket.send(e):n.willSendQueue.push(e):window.navigator.onLine&&!0!==this.lock?0!==this.willSendQueue.length?(n.willSendQueue.push(e),n.sendWillsend()):(n.sentQueue.push({id:n.currentSendId,data:e}),n.socket.send(e),n.currentSendId++):(window.navigator.onLine,n.willSendQueue.push(e)),n.lastOnLine=window.navigator.onLine,n.checkData()},SocketClient.prototype.cancel=function(){var e={type:"cancel"};this.videoName&&(e.videoName=this.videoName),1===this.socket.readyState&&this.socket.send(JSON.stringify(e))},SocketClient.prototype.handleError=function(e){this.needReconnect=!0,isRecordingPaused||this.active&&pauseScreenRecording(!0),this.paused=!0,chrome.browserAction.setBadgeText({text:"!"})},SocketClient.prototype.updateAnnotatedFlag=function(){$.ajax({method:"POST",url:config.schema+"://"+config.domain+"/api/v1/video/annotated_flag",contentType:"application/json; charset=utf-8",data:JSON.stringify({videoID:this.videoID})})},SocketClient.httpComplete=function(e){return $.ajax({method:"POST",url:config.schema+"://"+config.domain+"/api/v1/video/complete",contentType:"application/json; charset=utf-8",data:JSON.stringify({videoName:e})})},SocketClient.httpClickStop=function(e){return $.ajax({method:"POST",url:config.schema+"://"+config.domain+"/api/v1/video/click_stop",contentType:"application/json; charset=utf-8",data:JSON.stringify({videoID:e})})};