var Wrapper  = require('/lib/em_ti/ui/wrapper'),
    View     = require('/lib/em_ti/ui/view');

var CollectionView = Wrapper.extend({
  tiOptions: "layout".split(' '),

  layout: "vertical",
  content: [],
  childViews: [],
  itemViewClass: View,

  init: function() {
    var content = this.get('content');

    this._super();

    this.contentDidChange(); // to set childViews array
    content.addArrayObserver(this);
  },

  contentWillChange: function() {
    var content = this.get('content');
    if (content && content !== null) {
      content.removeArrayObserver(this);
    }
  }.observesBefore('content'),

  contentDidChange: function() {
    var self = this, content = this.get('content'), childViews = this.get('childViews'), itemViewClass = this.get('itemViewClass');
    childViews.splice(0, childViews.length);
    if (content && content !== null && content.get('length')) {
      content.forEach(function(el) {
        var row = self.createChildView(itemViewClass, {content: el, titleBinding: "content.title"});
        childViews.push(row);
      });
    }
  }.observes('content'),

  arrayWillChange: function(content, startIdx, removedCount, addedCount) {
    var childViews = this.get('childViews');

    if (removedCount) {
      childViews.splice(startIdx, startIdx+removedCount-1);
    }
  },

  arrayDidChange: function(content, startIdx, removedCount, addedCount) {
    var self = this, childViews = this.get('childViews'), itemViewClass = this.get('itemViewClass');

    if (addedCount) {
      content.slice(startIdx, startIdx+addedCount).forEach(function(el) {
        childViews.push(self.createChildView(itemViewClass, {content: el, titleBinding: "content.title"}));
      });
    }
  },

  createChildView: function(viewClass, attrs) {
    // attrs.height = attrs.height || "30";
    return viewClass.create(attrs);
  },

  createTiObject: function(options) {
    return Ti.UI.createView(options);
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
      childView.render();
      this.addChildView(tiObject, childView);
    }

    return this;
  }
});

module.exports = CollectionView;