var View      = require('/lib/em_ti/ui/view'),
    Openable  = require('/lib/em_ti/mixins/openable');

var Window = View.extend(Openable, {
  tiOptions: 'backButtonTitle backButtonTitleImage barColor barImage exitOnClose fullscreen leftNavButton modal navBarHidden orientationModes rightNavButton tabBarHidden title titleControl titleImage titlePrompt titleid titlepromptid toolbar translucent url windowSoftInputMode'.split(' '),
  tiEvents: 'android:back android:camera android:focus android:search android:voldown android:volup blur close:closed focus open:opened'.split(' '),
  
  createTiObject: function(options) {
    return Ti.UI.createWindow(options);
  },
  
  setLeftNavButton: function(button) {
    if (button instanceof View) {
      button.render();
      button = button.get('tiObject');
    }
    this.render();
    this.get('tiObject').setLeftNavButton(button, { animated: false });
    return this;
  },
  
  setRightNavButton: function(button) {
    if (button instanceof View) {
      button.render();
      button = button.get('tiObject');
    }
    this.render();
    this.get('tiObject').setRightNavButton(button, { animated: false });
    return this;
  }
});

module.exports = Window;