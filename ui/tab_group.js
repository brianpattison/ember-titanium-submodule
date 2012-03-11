var View      = require('/lib/em_ti/ui/view'),
    Openable  = require('/lib/em_ti/mixins/openable');

var TabGroup = View.extend(Openable, {
  tiOptions: 'activeTab allowUserCustomization barColor editButtonTitle tabs windowSoftInputMode'.split(' '),
  tiEvents: 'blur close:closed focus open:opened'.split(' '),
  
  addChildView: function(tiObject, childView) {
    if (childView instanceof View) {
      childView.set('parentView', this);
      tiObject.addTab(childView.get('tiObject'));
    } else {
      tiObject.addTab(childView);
    }
  },

  createTiObject: function(options) {
    return Ti.UI.createTabGroup(options);
  },
  
  setActiveTab: function(tabIndex) {
    this.render();
    this.get('tiObject').setActiveTab(tabIndex);
    
    return this;
  }
});

module.exports = TabGroup;