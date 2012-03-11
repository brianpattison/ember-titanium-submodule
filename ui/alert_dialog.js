var Wrapper  = require('/lib/em_ti/ui/wrapper'),
    Hideable = require('/lib/em_ti/mixins/hideable');

var AlertDialog = Wrapper.extend(Hideable, {
  tiOptions: 'buttonNames cancel message messageid title'.split(' '),
  tiEvents: 'click'.split(' '),

  createTiObject: function(options) {
    return Ti.UI.createAlertDialog(options);
  }
});

module.exports = AlertDialog;