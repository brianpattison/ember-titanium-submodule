var View  = require('/lib/em_ti/ui/view');

var Label = View.extend({
  tiOptions: 'autoLink backgroundPaddingBottom backgroundPaddingLeft backgroundPaddingRight backgroundPaddingTop color ellipsize font highlightedColor html minimumFontSize shadowColor shadowOffset text textAlign:textAlignConstant textid wordWrap'.split(/\s+/),
  tiConstantMappings: {
    textAlign: {
      center: Ti.UI.TEXT_ALIGNMENT_CENTER,
      left: Ti.UI.TEXT_ALIGNMENT_LEFT,
      right: Ti.UI.TEXT_ALIGNMENT_RIGHT
    }
  },
  
  createTiObject: function(options) {
    if (!options.text) { options.text = ''; }
    return Ti.UI.createLabel(options);
  }
});

module.exports = Label;