var EmTi = Ember = require('/lib/em_ti/em_ti');

var otherWindow = EmTi.Window.create({
  backgroundColor: '#fff',
  title: 'Tab 2'
});
var otherLabel = EmTi.Label.create({
	color: '#999',
	font: {fontSize: 20},
	text: 'Window 2',
	textAlign: 'center',
	width: 'auto'
});
otherWindow.add(otherLabel);
var otherTab = EmTi.Tab.create({
    icon: 'KS_nav_ui.png',
    title: 'Tab 2',
    window: otherWindow
});

module.exports = otherTab;