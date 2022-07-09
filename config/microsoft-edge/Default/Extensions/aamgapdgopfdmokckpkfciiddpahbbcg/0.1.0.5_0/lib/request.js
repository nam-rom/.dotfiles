function request(type, url, responseCallback) {
  var xhr = new XMLHttpRequest();

  xhr.open(type, url);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      responseCallback(JSON.parse(xhr.responseText));
    }
  };

  xhr.send();
}
