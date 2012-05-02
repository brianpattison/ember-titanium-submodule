var View = require('/lib/em_ti/ui/view');

var MapView = View.extend({
  tiOptions: 'animate annotations location mapType:mapTypeConstant region regionFit userLocation'.split(' '),
  tiEvents: 'complete error loading regionChanged'.split(' '),
  tiConstantMappings: {
    mapType: {
      standard: Ti.Map.STANDARD_TYPE,
      satellite: Ti.Map.SATELLITE_TYPE,
      hybrid: Ti.Map.HYBRID_TYPE
    }
  },
  
  addChildView: function(tiObject, childView) {
    tiObject.addAnnotation(childView.get('tiObject'));
  },
  
  createTiObject: function(options) {
    return Ti.Map.createView(options);
  },
  
  selectAnnotation: function(emtiAnnotation) {
    this.get('tiObject').selectAnnotation(emtiAnnotation.get('tiObject'));
    return this;
  },
    
  zoom: function(level) {
    this.get('tiObject').zoom(level);
    return this;
  }
});

module.exports = MapView;