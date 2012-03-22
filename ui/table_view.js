var CollectionView = require('/lib/em_ti/ui/collection_view'),
    TableViewRow   = require('/lib/em_ti/ui/table_view_row');

var TableView = CollectionView.extend({
  tiOptions: 'allowsSelection allowsSelectionDuringEditing anchorPoint animatedCenterPoint backgroundColor backgroundDisabledColor backgroundDisabledImage backgroundFocusedColor backgroundFocusedImage backgroundGradient backgroundImage backgroundLeftCap backgroundSelectedColor backgroundSelectedImage backgroundTopCap borderColor borderRadius borderWidth bottom center data editable editing filterAttribute filterCaseInsensitive focusable font-family font-size font-style font-weight footerTitle footerView headerTitle headerView height index left maxRowHeight minRowHeight moving opacity right rowHeight scrollable search searchHidden separatorColor separatorStyle showVerticalScrollIndicator size softKeyboardOnFocus style top touchEnabled transform visible width zIndex'.split(' '),
  tiEvents: 'click dblclick delete doubletap move scroll scrollEnd singletap swipe touchcancel touchend touchmove touchstart twofingertap'.split(' '),
  itemViewClass: TableViewRow,

  createTiObject: function(options) {
    return Ti.UI.createTableView(options);
  },

  addChildView: function(tiObject, childView) {
    if (childView instanceof TableViewRow) {
      childView.set('parentView', this);
      tiObject.appendRow(childView.get('tiObject'));
    } else {
      tiObject.appendRow(childView);
    }
  },
  
  createChildView: function(viewClass, attrs) {
    // Create the row bound to the content and save it to the
    // content object so it doesn't have to be recreated when sorting data
    if (attrs.content.get('cachedRow')) {
      return attrs.content.get('cachedRow');
    } else {
      var row = this._super(viewClass, attrs);
      row.set('parentView', this);
      attrs.content.set('cachedRow', row);
      return row;
    }
  },

  contentDidChange: function() {
    var self = this, content = this.get('content'), childViews = this.get('childViews'), itemViewClass = this.get('itemViewClass'), tiObject = this.get('tiObject'), renderedRows = [];
    childViews.splice(0, childViews.length);
    if (content && content !== null && content.get('length')) {
      content.forEach(function(el, idx) {
        if (self.get('isRendered')) {
          var renderedRow = self.createChildView(itemViewClass, {content: el}).render();
          renderedRows.push(renderedRow.get('tiObject'));
        } else {
          var row = self.createChildView(itemViewClass, {content: el});
          childViews.push(row);
        }
      });
    }
    if (this.get('isRendered')) {
      tiObject.setData(renderedRows);
    }
  }.observes('content'),

  arrayWillChange: function(content, startIdx, removedCount, addedCount) {
    var childViews = this.get('childViews');

    if (removedCount) {
      if (this.get('isRendered')) {
        var tiObject = this.get('tiObject');
        for (var i = 0; i < removedCount; i++) {
          tiObject.deleteRow(startIdx);
        }
      } else {
        childViews.splice(startIdx, removedCount);
      }
    }
  },

  arrayDidChange: function(content, startIdx, removedCount, addedCount) {
    var self = this, childViews = this.get('childViews'), itemViewClass = this.get('itemViewClass');

    if (addedCount) {
      content.slice(startIdx, startIdx+addedCount).forEach(function(el) {
        if (self.get('isRendered')) {
          var tiObject = self.get('tiObject'), renderedRow = self.createChildView(itemViewClass, {content: el}).render();
          if (content.length === 1) {
            tiObject.appendRow(renderedRow.get('tiObject'));
          } else {
            var insertAt = startIdx - 1;
            if (insertAt >= 0) {
              tiObject.insertRowAfter(insertAt, renderedRow.get('tiObject'));
            } else {
              tiObject.insertRowBefore(startIdx, renderedRow.get('tiObject'));
            }
          }
        } else {
          childViews.insertAt(startIdx, self.createChildView(itemViewClass, {content: el}));
        }
      });
    }
  }
});

module.exports = TableView;