var Wrapper         = require('/lib/em_ti/ui/wrapper'), 
    Animatable      = require('/lib/em_ti/mixins/animatable'),
    Hideable        = require('/lib/em_ti/mixins/hideable');

var View = Wrapper.extend(Animatable, Hideable, {
  tiOptions: 'anchorPoint animatedCenterPoint backgroundColor backgroundDisabledColor backgroundDisabledImage backgroundFocusedColor backgroundFocusedImage backgroundGradient backgroundImage backgroundLeftCap backgroundSelectedColor backgroundSelectedImage backgroundTopCap borderColor borderRadius borderWidth bottom center focusable font fontFamily fontSize fontStyle fontWeight height layout left opacity right size softKeyboardOnFocus top touchEnabled transform visible width zIndex'.split(/\s+/),
  tiEvents: 'click dblclick doubletap singletap swipe touchcancel touchend touchmove touchstart twofingertap'.split(/\s+/),

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

    this.addChildView(this.get('tiObject'), view);

    return this;
  },

  createChildView: function(view, attrs) {
    if (Wrapper.detect(view)) {
      view = view.create(attrs || {});
    } else if (view instanceof Wrapper) {
      // FIXME: Should we allow instances to pass-through?
    } else {
      throw new Error("Ember.View#createChildView called with a non-View object");
    }
    return view;
  },

  addChildView: function(tiObject, childView) {
    childView.set('parentView', this);
    tiObject.add(childView.get('tiObject'));
  },

  render: function() {
    var tiObject = this._super(), childViews = this.get('childViews');

    var childViewInstances = [];
    for (var i = 0; i < childViews.length; i++) {
      var childView = childViewInstances[i] = this.createChildView(childViews[i]);
      this.addChildView(tiObject, childView);
    }

    this.set('childViews', childViewInstances);

    return tiObject;
  },
  
  destroy: function() {
    var self = this;
    var childViews = this.get('childViews');
    childViews.forEach(function(view) {
      view.destroy();
    });
    var parentView = this.getPath('parentView.tiObject'), tiObject = this.get('tiObject');
    if (parentView !== undefined && parentView !== null && tiObject !== undefined && tiObject !== null) {
      parentView.remove(tiObject);
      this.set('tiObject', null);
    }
    this._super();
  }
});

module.exports = View;