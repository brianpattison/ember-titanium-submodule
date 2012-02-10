// Here we want bindings, so we're using EmTi
var EmTi = Ember = require('/lib/em_ti/em_ti');

var twitterWindow = EmTi.Window.create({
  tweetsBinding: Ember.Binding.oneWay('Example.tweetsController.content'),

  backgroundColor: '#fff',
  
  title: function() {
    var tweets = this.get('tweets');
    if (tweets.length === 0) {
      return 'Twitter';
    } else {
      return '@' + tweets[0].user.screen_name;
    }
  }.property('tweets')
});
var twitterTableView = EmTi.TableView.create({
  contentBinding: Ember.Binding.oneWay('Example.tweetsController.content'),
  itemViewClass: EmTi.TableViewRow.extend({className: 'twitterRow', titleBinding: Ember.Binding.oneWay('content.text')})
});
twitterWindow.add(twitterTableView);
var twitterTab = EmTi.Tab.create({
  tweetsBinding: Ember.Binding.oneWay('Example.tweetsController.content'),

  icon: 'KS_nav_views.png',
  window: twitterWindow,
  
  title: function() {
    var tweets = this.get('tweets');
    if (tweets.length === 0) {
      return 'Twitter';
    } else {
      return '@' + tweets[0].user.screen_name;
    }
  }.property('tweets')
});

module.exports = twitterTab;