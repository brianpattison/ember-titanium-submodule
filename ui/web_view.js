var View = require('/lib/em_ti/ui/view');

var WebView = View.extend({
  tiOptions: 'data html loading scalesPageToFit url'.split(/\s+/),
  tiEvents: 'beforeload error load'.split(/\s+/),
  tiNotNullable: 'url'.split(/\s+/),

  createTiObject: function(options) {
    return Ti.UI.createWebView(options);
  },

  evalJS: function(str) {
    this.get('tiObject').evalJS(str);
    return this;
  }
});

module.exports = WebView;