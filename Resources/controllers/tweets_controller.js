var EmTi = Ember = require('/lib/em_ti/em_ti');

var useWindow = true, tweetsLoadedCallback;

var tweetsUtilityWindow = Ti.UI.createWindow({
  height: 5,
  left: -10,
  top: -10,
  url: '/controllers/tweets_utility.js',
  width: 5
});

tweetsUtilityWindow.addEventListener('close', function(e) {
  if (typeof tweetsLoadedCallback === 'function') tweetsLoadedCallback();
});

var tweetsController = Ember.ArrayController.create({
  content: [],
  
  loadTweets: function(callback) {
    tweetsLoadedCallback = callback;
    if (useWindow) {
      // Experimenting with "heavy windows" (windows with urls) and threading/performance/memory usage
      tweetsUtilityWindow.open();
    } else {
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
    }
  }
});

Ti.App.addEventListener('tweetsLoaded', function(e) {
  tweetsController.set('content', e.data);
  tweetsUtilityWindow.close();
});

Ti.App.addEventListener('tweetsError', function(e) {
  tweetsUtilityWindow.close();
});

module.exports = tweetsController;