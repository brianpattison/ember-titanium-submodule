var View = require('/lib/em_ti/ui/view');

var Animation = View.extend({
  tiOptions: 'autoreverse color curve:curveConstant delay duration opaque repeat transition'.split(' '),
  tiEvents: 'complete start'.split(' '),
  tiConstantMappings: {
    curve: {
      easeIn: Ti.UI.iOS.ANIMATION_CURVE_EASE_IN,
      easeInOut: Ti.UI.iOS.ANIMATION_CURVE_EASE_IN_OUT,
      easeOut: Ti.UI.iOS.ANIMATION_CURVE_EASE_OUT,
      linear: Ti.UI.iOS.ANIMATION_CURVE_LINEAR
    }
  },

  createTiObject: function(options) {
    return Ti.UI.createAnimation(options);
  }
});

module.exports = Animation;