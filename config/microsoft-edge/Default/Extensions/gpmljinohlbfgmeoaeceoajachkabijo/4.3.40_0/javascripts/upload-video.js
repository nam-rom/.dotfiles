var uploadVideo={YOUTUBE_BASE_URL:"https://www.googleapis.com/upload/youtube/v3/videos",getGoogleOauthToken:function(){return new Promise((function(e,t){var o=chrome.extension.getBackgroundPage();o.googleOAuth.autherize((function(t){e(t),"undefined"!=typeof $&&($("#current-account").show(),$("#c-email").find("span").text(o.googleOAuth.getAccount().email))}))}))},uploadToYoutube:function(e,t){return this._upload(e,this.YOUTUBE_BASE_URL,t)},uploadToGoogleDrive:function(e,t){return this._upload(e,null,t)},_upload:function(e,t,o){return this.getGoogleOauthToken().then((function(n){return new Promise((function(a,u){if(t)var i={snippet:{title:e.name.replace(/\.webm$/,""),description:""},status:{privacyStatus:"Unlisted"}};else i={title:e.name,shareable:!0,shared:!0};new MediaUploader({baseUrl:t,file:e,token:n,metadata:i,params:{part:Object.keys(i).join(",")},onError:function(e){u(e)},onProgress:function(e){var t=Date.now(),n=e.loaded,a=e.total;this.uploadStartTime;o&&o(100*n/a)},onComplete:function(e){var t=JSON.parse(e);a(t)}}).upload()}))}))}};