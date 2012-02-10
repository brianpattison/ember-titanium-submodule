var View      = require('/lib/em_ti/ui/view'),
    Openable  = require('/lib/em_ti/mixins/openable');

var TabGroup = View.extend(Openable, {
  tiOptions: 'activeTab allowUserCustomization barColor editButtonTitle tabs windowSoftInputMode'.w(),
  tiEvents: 'blur close:closed focus open:opened'.w(),
  
  addChildView: function(tiObject, childView) {
    childView.set('parentView', this);
    tiObject.addTab(childView.get('tiObject'));
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