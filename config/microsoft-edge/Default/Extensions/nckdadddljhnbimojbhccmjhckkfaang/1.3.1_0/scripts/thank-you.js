"use strict";!function(e){new Vue({el:"#juno_okyo",data:{locale:e.i18n.getUILanguage(),review_url:"hmlcjjclebjnfohgmgikjfnbmfkigocc"===e.runtime.id?"https://chrome.google.com/webstore/detail/"+e.runtime.id+"/reviews?utm_source=extension&utm_medium=thank_you":"https://j2team.dev/home"},methods:{i18n:function(t){return e.i18n.getMessage(t)}},computed:{share_url:function(){var t="https://chrome.google.com/webstore/detail/"+e.runtime.id+"/?utm_source=facebook";return"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(t)}}}),e.runtime.sendMessage({cmd:"track_page_view",path:"/thank-you.html"})}(chrome);