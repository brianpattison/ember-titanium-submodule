// A mix of EmTi and straight Titanium is used as needed in this app
var EmTi = Ember = require('/lib/em_ti/em_ti');

var Example = Ember.Application.create({
  isLoading: false,
  
  start: function() {
    this.setupModels();
    this.setupControllers();
    this.setupViews();
  },
  
  setupModels: function() {
    
  },
  
  setupControllers: function() {
    this.tweetsController = require('/controllers/tweets_controller');
  },
  
  setupViews: function() {
    var self = this;
    
    Titanium.UI.setBackgroundColor('#fff');
    
    var tabGroup = EmTi.TabGroup.create({
      opened: function() {
        self.set('isLoading', true);
        self.tweetsController.loadTweets(function(data) {
          self.set('isLoading', false);
        });
      }
    });
    var twitterTab = require('/views/twitter_tab');
    var otherTab   = require('/views/other_tab');
    tabGroup.add(twitterTab);
    tabGroup.add(otherTab);
    tabGroup.open();
  },
  
  isLoadingDidChange: function() {
    if (this.get('isLoading')) {
      if (!this.loadingIndicator) this.loadingIndicator = require('/views/loading');
      this.loadingIndicator.show();
    } else {
      this.loadingIndicator.hide();
    }
  }.observes('isLoading')
});

module.exports = Example;