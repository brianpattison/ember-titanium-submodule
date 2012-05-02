var View      = require('/lib/em_ti/ui/view'),
    Openable  = require('/lib/em_ti/mixins/openable');

var Window = View.extend(Openable, {
  tiOptions: 'backButtonTitle backButtonTitleImage barColor barImage exitOnClose fullscreen leftNavButton modal navBarHidden orientationModes rightNavButton tabBarHidden title titleControl titleImage titlePrompt titleid titlepromptid toolbar translucent url windowSoftInputMode'.split(' '),
  tiEvents: 'android:back android:camera android:focus android:search android:voldown android:volup blur close:closed focus open:opened'.split(' '),
  
  createTiObject: function(options) {
    return Ti.UI.createWindow(options);
  },
  
  setLeftNavButton: function(button, options) {
    if (button instanceof View) {
      button = button.get('tiObject');
    }
    this.get('tiObject').setLeftNavButton(button, options);
    return this;
  },
  
  setRightNavButton: function(button, options) {
    if (button instanceof View) {
      button = button.get('tiObject');
    }
    this.get('tiObject').setRightNavButton(button, options);
    return this;
  },
  
  destroy: function() {
    var self = this;
    if (this.get('isRendered')) {
      var childViews = this.get('childViews');
      childViews.forEach(function(view) {
        view.destroy();
      });
      // Don't try to remove a window from a parent view
      // var parentView = this.getPath('parentView.tiObject');
      // if (parentView !== undefined && parentView !== null) {
      //   parentView.remove(this.get('tiObject'));
      // }
      this.set('tiObject', null);
    }
    this._super();
  }
});

module.exports = Window;