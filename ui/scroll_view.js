var View = require('/lib/em_ti/ui/view');

var ScrollView = View.extend({
  tiOptions: 'canCancelEvents contentHeight contentOffset contentWidth disableBounce horizontalBounce maxZoomScale minZoomScale scrollType showHorizontalScrollIndicator showVerticalScrollIndicator verticalBounce zoomScale'.split(' '),
  tiEvents: 'scale scroll'.split(' '),
  
  createTiObject: function(options) {
    return Ti.UI.createScrollView(options);
  }
});

module.exports = ScrollView;