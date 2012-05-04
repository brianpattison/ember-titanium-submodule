if (Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad') {
  var Ember = require('/lib/em_ti/ember-runtime');
} else {
  Ti.include('/lib/em_ti/ember-runtime-android.js');
}

var View = require('/lib/em_ti/ui/view');

var TableView = View.extend({
  tiOptions: 'allowsSelection allowsSelectionDuringEditing anchorPoint animatedCenterPoint backgroundColor backgroundDisabledColor backgroundDisabledImage backgroundFocusedColor backgroundFocusedImage backgroundGradient backgroundImage backgroundLeftCap backgroundSelectedColor backgroundSelectedImage backgroundTopCap borderColor borderRadius borderWidth bottom center data editable editing filterAttribute filterCaseInsensitive focusable font-family font-size font-style font-weight footerTitle footerView headerTitle headerView height index left maxRowHeight minRowHeight moving opacity right rowHeight scrollable search searchHidden separatorColor separatorStyle showVerticalScrollIndicator size softKeyboardOnFocus style top touchEnabled transform visible width zIndex'.split(/\s+/),
  tiEvents: 'click dblclick delete doubletap move scroll scrollEnd singletap swipe touchcancel touchend touchmove touchstart twofingertap'.split(/\s+/),

  createTiObject: function(options) {
    return Ti.UI.createTableView(options);
  },

  createRow: function(content) {
    // Example of how you might use createRow
    return Ti.UI.createTableViewRow({
      className: 'rowClass',
      id: content.get('id'),
      title: content.get('title')
    });
  },
  
  contentDidChange: function() {
    var content = this.get('content'), tiObject = this.get('tiObject'), rows = [], self = this;
    if (!Ember.empty(content)) {
      content.forEach(function(item) {
        if (!Ember.none(item) && item instanceof Ember.Object) {
          rows.push(self.createRow(item));
        }
      });
    }
    tiObject.setData(rows);
  }.observes('content')
});

module.exports = TableView;