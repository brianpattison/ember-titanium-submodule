var Wrapper = require('/lib/em_ti/ui/wrapper');

var Animation = Wrapper.extend({
  tiOptions: 'autoreverse backgroundColor bottom center color curve:curveConstant delay duration height left opacity opaque repeat right top transform transition visible width zIndex'.split(' '),
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