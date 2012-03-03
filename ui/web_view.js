var View = require('/lib/em_ti/ui/view');

var WebView = View.extend({
  tiOptions: 'data html loading scalesPageToFit url'.split(' '),
  tiEvents: 'beforeload error load'.split(' '),
  
  createTiObject: function(options) {
    return Ti.UI.createWebView(options);
  },
  
  evalJS: function(str) {
    return this.get('tiObject').evalJS(str);
  }
});

module.exports = WebView;