var View = require('/lib/em_ti/ui/view');

var TableViewRow = View.extend({
  tiOptions: "className color hasCheck hasChild hasDetail indentionLevel layout leftImage rightImage selectedBackgroundColor selectedBackgroundImage selectedColor selectionStyle title".split(' '),

  createTiObject: function(options) {
    return Ti.UI.createTableViewRow(options);
  }
});

module.exports = TableViewRow;

