var xhr = Ti.Network.createHTTPClient(),
    url = 'https://api.twitter.com/1/statuses/user_timeline.json?screen_name=appcelerator&exclude_replies=true';
    
xhr.onerror = function(e) {
  Ti.warn('Error: ' + e.message);
  Ti.App.fireEvent('tweetsError', {error: e});
};
xhr.onload = function() {
  var data = JSON.parse(this.responseText);
  Ti.API.info(JSON.stringify(data));
  Ti.App.fireEvent('tweetsLoaded', {data: data});
};

xhr.open('GET', url);
xhr.send();