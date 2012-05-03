var Wrapper  = require('/lib/em_ti/ui/wrapper'),
    Hideable = require('/lib/em_ti/mixins/hideable');

var OptionDialog = Wrapper.extend(Hideable, {
  tiOptions: 'androidView cancel destructive options selectedIndex title titleid'.split(/\s+/),
  tiEvents: 'click'.split(/\s+/),

  createTiObject: function(options) {
    return Ti.UI.createOptionDialog(options);
  }
});

module.exports = OptionDialog;