var View = require('/lib/em_ti/ui/view');

var Tab = View.extend({
  tiOptions: 'badge icon title window'.split(' '),

  createTiObject: function(options) {
    return Ti.UI.createTab(options);
  },

  open: function(win) {
    this.get('tiObject').open(win.get('tiObject'));
    return this;
  }
});

module.exports = Tab;