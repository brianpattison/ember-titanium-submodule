var EmTi = Ember = require('/lib/em_ti/em_ti');

var Example = Ember.Application.create({
  isLoading: false,
  
  start: function() {
    var self = this;
    self.setupModels();
    self.setupControllers();
    self.setupViews();
  },
  
  setupModels: function() {
    
  },
  
  setupControllers: function() {
    var self = this;
    self.tweetsController = require('/controllers/tweets_controller');
  },
  
  setupViews: function() {
    var self = this;
    
    Titanium.UI.setBackgroundColor('#fff');
    
    self.tabGroup = EmTi.TabGroup.create({
      opened: function() {
        self.set('isLoading', true);
        self.tweetsController.loadTweets(function(data) {
          self.set('isLoading', false);
        });
      }
    });
    self.twitterTab = require('/views/twitter_tab');
    self.otherTab   = require('/views/other_tab');
    self.tabGroup.add(self.twitterTab);
    self.tabGroup.add(self.otherTab);
    self.tabGroup.open();
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