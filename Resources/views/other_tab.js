// No EmTi needed, so it's not used here
var otherWindow = Ti.UI.createWindow({
  backgroundColor: '#fff',
  title: 'Tab 2'
});
var otherLabel = Ti.UI.createLabel({
	color: '#999',
	font: {fontSize: 20},
	text: 'Window 2',
	textAlign: 'center',
	width: 'auto'
});
otherWindow.add(otherLabel);
var otherTab = Ti.UI.createTab({
    icon: 'KS_nav_ui.png',
    title: 'Tab 2',
    window: otherWindow
});

module.exports = otherTab;