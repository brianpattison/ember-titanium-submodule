var Wrapper     = require('/lib/em_ti/ui/wrapper'), 
    Animatable  = require('/lib/em_ti/mixins/animatable'), 
    Hideable    = require('/lib/em_ti/mixins/hideable');

var View = Wrapper.extend(Animatable, Hideable, {
  tiOptions: 'anchorPoint animatedCenterPoint backgroundColor backgroundDisabledColor backgroundDisabledImage backgroundFocusedColor backgroundFocusedImage backgroundGradient backgroundImage backgroundLeftCap backgroundSelectedColor backgroundSelectedImage backgroundTopCap borderColor borderRadius borderWidth bottom center focusable font fontFamily fontSize fontStyle fontWeight height layout left opacity right size softKeyboardOnFocus top touchEnabled transform visible width zIndex'.w(),
  tiEvents: 'click dblclick doubletap singletap swipe touchcancel touchend touchmove touchstart twofingertap'.w(),
  
  childViews: [],
  
  init: function() {
    this._super();
    
    // Use slice to create copies of the following arrays.
    var childViews = this.get('childViews').slice();
    this.set('childViews', childViews);
  },
  
  createTiObject: function(options) {
    return Ti.UI.createView(options);
  },
  
  add: function(view) {
    var childViews = this.get('childViews');
    childViews.push(view);
    
    if (this.get('isRendered')) {
      view.render();
      this.addChildView(this.get('tiObject'), view);
    }
    
    return this;
  },
  
  addChildView: function(tiObject, childView) {
    if (childView instanceof Wrapper) {
      childView.set('parentView', this);
      tiObject.add(childView.get('tiObject'));
    } else {
      tiObject.add(childView);
    }
  },
  
  render: function() {
    var tiObject = this.createObject(), childViews = this.get('childViews');
    
    if (this.get('isRendered')) { return this; }
    
    this._super();

    for (var i = 0; i < childViews.length; i++) {
      var childView = childViews[i];
      if (childView instanceof Wrapper) {
        childView.render();
      }
      this.addChildView(tiObject, childView);
    }
    
    return this;
  }
});

module.exports = View;