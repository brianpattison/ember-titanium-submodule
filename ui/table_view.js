var View = require('/lib/em_ti/ui/view');

var TableView = View.extend({
  tiOptions: 'allowsSelection allowsSelectionDuringEditing anchorPoint animatedCenterPoint backgroundColor backgroundDisabledColor backgroundDisabledImage backgroundFocusedColor backgroundFocusedImage backgroundGradient backgroundImage backgroundLeftCap backgroundSelectedColor backgroundSelectedImage backgroundTopCap borderColor borderRadius borderWidth bottom center data editable editing filterAttribute filterCaseInsensitive focusable font-family font-size font-style font-weight footerTitle footerView headerTitle headerView height index left maxRowHeight minRowHeight moving opacity right rowHeight scrollable search searchHidden separatorColor separatorStyle showVerticalScrollIndicator size softKeyboardOnFocus style top touchEnabled transform visible width zIndex'.split(' '),
  tiEvents: 'click dblclick delete doubletap move scroll scrollEnd singletap swipe touchcancel touchend touchmove touchstart twofingertap'.split(' '),

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
    var content = this.get('content');
    if (!Ember.none(content) && this.get('isRendered')) {
      var tiObject = this.get('tiObject'), rows = [], rowObjects = [];
      for (var i = 0; i < content.length; i++) {
        rows.push(this.createRow(content[i]));
      }
      tiObject.setData(rows);
    }
  }.observes('content')
});

module.exports = TableView;