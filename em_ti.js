function classLoader(requirePath) {
  return {
    create: function(options) {
      if (options && options !== null) {
        return require(requirePath).create(options);
      } else {
        return require(requirePath).create();
      }
    },
    extend: function(options) {
      if (options && options !== null) {
        return require(requirePath).extend(options);
      } else {
        return require(requirePath).extend();
      }
    }
  };
}

var EmTi = require('/lib/em_ti/ember-runtime');

EmTi.AlertDialog    = classLoader('/lib/em_ti/ui/alert_dialog');
EmTi.Animation      = classLoader('/lib/em_ti/ui/animation');
EmTi.Button         = classLoader('/lib/em_ti/ui/button');
EmTi.CollectionView = classLoader('/lib/em_ti/ui/collection_view');
EmTi.ImageView      = classLoader('/lib/em_ti/ui/image_view');
EmTi.Label          = classLoader('/lib/em_ti/ui/label');
EmTi.MapAnnotation  = classLoader('/lib/em_ti/ui/map_annotation');
EmTi.MapView        = classLoader('/lib/em_ti/ui/map_view');
EmTi.Tab            = classLoader('/lib/em_ti/ui/tab');
EmTi.TabGroup       = classLoader('/lib/em_ti/ui/tab_group');
EmTi.TableView      = classLoader('/lib/em_ti/ui/table_view');
EmTi.TableViewRow   = classLoader('/lib/em_ti/ui/table_view_row');
EmTi.TextArea       = classLoader('/lib/em_ti/ui/text_area');
EmTi.TextField      = classLoader('/lib/em_ti/ui/text_field');
EmTi.View           = classLoader('/lib/em_ti/ui/view');
EmTi.Window         = classLoader('/lib/em_ti/ui/window');
EmTi.WebView        = classLoader('/lib/em_ti/ui/web_view');

module.exports = EmTi;