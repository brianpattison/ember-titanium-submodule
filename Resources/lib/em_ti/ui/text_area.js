var View      = require('/lib/em_ti/ui/view'),
    Focusable = require('/lib/em_ti/mixins/focusable'),
    Constants = require('/lib/em_ti/mixins/constants');

var TextField = View.extend(Focusable, {
  tiOptions: 'autoLink autocapitalization:autocapitalizationConstant editable enabled keyboardToolbar keyboardToolbarColor keyboardToolbarHeight returnKeyType:returnKeyTypeConstant suppressReturn value'.w(),
  tiEvents: 'change return selected'.w(),
  tiConstantMappings: {
    autocapitalization: Constants.AUTOCAPITALIZATION_CONSTANTS,
    keyboardType: Constants.KEYBOARD_TYPE_CONSTANTS,
    returnKeyType: Constants.RETURNKEY_CONSTANTS
  },

  createTiObject: function(options) {
    return Ti.UI.createTextArea(options);
  },

  change: function() {
    var tiObject = this.get('tiObject');
    this.set('value', tiObject.value);
  }
});

module.exports = TextField;