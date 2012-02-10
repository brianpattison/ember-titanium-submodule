var View = require('/lib/em_ti/ui/view');

var MapAnnotation = View.extend({
  tiOptions: 'animate image latitude longitude leftButton leftView pinImage pincolor:pinColorConstant rightButton rightView subtitle subtitleid title titleid'.w(),
  tiConstantMappings: {
    pinColor: {
      red: Ti.Map.ANNOTATION_RED,
      green: Ti.Map.ANNOTATION_GREEN,
      purple: Ti.Map.ANNOTATION_PURPLE
    }
  },
  
  createTiObject: function(options) {
    return Ti.Map.createAnnotation(options);
  }
});

module.exports = MapAnnotation;



