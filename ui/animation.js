var Wrapper = require('/lib/em_ti/ui/wrapper');

var Animation = Wrapper.extend({
  tiOptions: 'autoreverse backgroundColor bottom center color delay duration height left opacity opaque repeat right top transform transition visible width zIndex'.split(/\s+/),
  tiEvents: 'complete start'.split(/\s+/),

  createTiObject: function(options) {
    return Ti.UI.createAnimation(options);
  }
});

module.exports = Animation;