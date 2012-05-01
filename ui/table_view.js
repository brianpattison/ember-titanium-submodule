var Ember = require('/lib/em_ti/ember-runtime'),
    View  = require('/lib/em_ti/ui/view');

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
    var content = this.get('content'), tiObject = this.get('tiObject'), rows = [];
    if (!Ember.empty(content) && this.get('isRendered')) {
      for (var i = 0; i < content.length; i++) {
        var item = content[i];
        if (!Ember.none(item) && item instanceof Ember.Object) {
          rows.push(this.createRow(item));
        }
      }
    }
    tiObject.setData(rows);
  }.observes('content')
});

module.exports = TableView;