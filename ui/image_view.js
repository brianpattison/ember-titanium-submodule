var View = require('/lib/em_ti/ui/view');

var ImageView = View.extend({
  tiOptions: 'animating canScale decodeRetries defaultImage duration enableZoomControls hires image images paused preventDefaultImage repeatCount reverse'.split(' '),
  tiEvents: 'change load start stop'.split(' '),
  tiNotNullable: 'image'.split(' '),
  
  createTiObject: function(options) {
    return Ti.UI.createImageView(options);
  }
});

module.exports = ImageView;