var View  = require('/lib/em_ti/ui/view');

var Button = View.extend({
  tiOptions: 'color enabled font image selectedColor style:styleConstant systemButton title titleid'.w(),
  tiConstantMappings: {
    style: {
      bar: Titanium.UI.iPhone.SystemButtonStyle.BAR,
      bordered: Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
      done: Titanium.UI.iPhone.SystemButtonStyle.DONE,
      plain: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
    }
  },
  
  createTiObject: function(options) {
    return Ti.UI.createButton(options);
  }
});

module.exports = Button;