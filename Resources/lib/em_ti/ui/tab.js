var View = require('/lib/em_ti/ui/view');

var Tab = View.extend({
  tiOptions: 'badge icon title window'.w(),

  createTiObject: function(options) {
    return Ti.UI.createTab(options);
  },

  open: function(scWindow) {
    this.render();
    scWindow.render();
    this.get('tiObject').open(scWindow.get('tiObject'));
    return this;
  }
});

module.exports = Tab;