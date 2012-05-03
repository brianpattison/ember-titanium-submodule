var Wrapper  = require('/lib/em_ti/ui/wrapper'),
    Hideable = require('/lib/em_ti/mixins/hideable');

var AlertDialog = Wrapper.extend(Hideable, {
  tiOptions: 'buttonNames cancel message messageid title'.split(/\s+/),
  tiEvents: 'click'.split(/\s+/),

  createTiObject: function(options) {
    return Ti.UI.createAlertDialog(options);
  }
});

module.exports = AlertDialog;