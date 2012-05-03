var View      = require('/lib/em_ti/ui/view'),
    Focusable = require('/lib/em_ti/mixins/focusable'),
    Constants = require('/lib/em_ti/mixins/constants');

var TextField = View.extend(Focusable, {
  tiOptions: 'autocapitalization:autocapitalizationConstant autocorrect borderStyle:borderStyleConstant clearButtonMode:clearButtonModeConstant clearOnEdit color editable enabled hintText keyboardToolbar keyboardToolbarColor keyboardToolbarHeight keyboardType:keyboardTypeConstant leftButton leftButtonMode leftButtonPadding minimumFontSize paddingLeft paddingRight passwordMask returnKeyType:returnKeyTypeConstant rightButton rightButtonMode rightButtonPadding suppressReturn value verticalAlign:verticalAlignConstant'.split(/\s+/),
  tiEvents: 'change hasText return'.split(/\s+/),
  tiConstantMappings: {
    autocapitalization: Constants.AUTOCAPITALIZATION_CONSTANTS,
    borderStyle: {
      none: Ti.UI.INPUT_BORDERSTYLE_NONE,
      line: Ti.UI.INPUT_BORDERSTYLE_LINE,
      bezel: Ti.UI.INPUT_BORDERSTYLE_BEZEL,
      rounded: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
    },
    clearButtonMode: {
      always: Ti.UI.INPUT_BUTTONMODE_ALWAYS,
      never: Ti.UI.INPUT_BUTTONMODE_NEVER,
      blur: Ti.UI.INPUT_BUTTONMODE_ONBLUR,
      focus: Ti.UI.INPUT_BUTTONMODE_ONFOCUS
    },
    keyboardType: Constants.KEYBOARD_TYPE_CONSTANTS,
    returnKeyType: Constants.RETURNKEY_CONSTANTS,
    verticalAlign: {
      bottom: Ti.UI.TEXT_VERTICAL_ALIGNMENT_BOTTOM,
      center: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
      top: Ti.UI.TEXT_VERTICAL_ALIGNMENT_TOP
    }
  },
  
  createTiObject: function(options) {
    return Ti.UI.createTextField(options);
  },
  
  change: function() {
    var tiObject = this.get('tiObject');
    this.set('value', tiObject.value);
  }
});

module.exports = TextField;