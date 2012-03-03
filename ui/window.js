var View      = require('/lib/em_ti/ui/view'),
    Openable  = require('/lib/em_ti/mixins/openable');

var Window = View.extend(Openable, {
  tiOptions: 'backButtonTitle backButtonTitleImage barColor barImage exitOnClose fullscreen leftNavButton modal navBarHidden orientationModes rightNavButton tabBarHidden title titleControl titleImage titlePrompt titleid titlepromptid toolbar translucent url windowSoftInputMode'.split(' '),
  tiEvents: 'android:back android:camera android:focus android:search android:voldown android:volup blur close:closed focus open:opened'.split(' '),
  
  createTiObject: function(options) {
    return Ti.UI.createWindow(options);
  }
});

module.exports = Window;