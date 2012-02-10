var loadingWindow = Ti.UI.createWindow({
  bottom: 49,
  height: 48,
  left: 0,
  width: '100%'
});
var loadingView = Ti.UI.createView({
  backgroundColor: '#000',
  height: '100%',
  left: 0,
  opacity: 0.7,
  top: 0,
  width: '100%'
});
loadingWindow.add(loadingView);

var loadingIndicator = Ti.UI.createActivityIndicator({
  top: 2
});
var indicatorWrapper = Ti.UI.createView({
  height: 48,
  left: 60,
  top: 0,
  width: 48
});
indicatorWrapper.add(loadingIndicator);
loadingWindow.add(indicatorWrapper);

var indicatorLabel = Ti.UI.createLabel({
  color: '#fff',
  font: {fontSize: 16, fontWeight: 'bold'},
  height: 48,
  opacity: 0.7,
  shadowColor: '#000',
  shadowOffset: {x: 0, y: -1},
  text: 'Loading...',
  textAlign: 'center',
  top: 0,
  width: '100%'
});
loadingWindow.add(indicatorLabel);
loadingIndicator.show();

module.exports = {
  hide: function() {
    loadingWindow.close();
  },
  show: function() {
    loadingWindow.open();
  }
};