var View = require('/lib/em_ti/ui/view');

var ImageView = View.extend({
  tiOptions: 'animating canScale decodeRetries defaultImage duration enableZoomControls hires image images paused preventDefaultImage repeatCount reverse'.split(/\s+/),
  tiEvents: 'change load start stop'.split(/\s+/),
  tiNotNullable: 'image'.split(/\s+/),
  
  createTiObject: function(options) {
    return Ti.UI.createImageView(options);
  }
});

module.exports = ImageView;