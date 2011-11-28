var window = this;
Ti.include('/lib/sc_ti.js');

var RUN_TESTS = true;

if (RUN_TESTS) {
  Ti.include('/tests/tests.js');
} else {
  // this sets the background color of the master UIView (when there are no windows/tab groups on it)
  Titanium.UI.setBackgroundColor('#000');

  // create tab group
  var tabGroup = SCTi.TabGroup.create({
    opened: function() {
      var alertDialog = SCTi.AlertDialog.create({
        title: 'Hello',
        message: 'SproutCore Rocks!',
        buttonNames: ['OK', 'Cancel']
      });
      alertDialog.show();
    }
  });

  // create base UI tab and root window
  var win1 = SCTi.Window.create({
      title:'Tab 1',
      backgroundColor:'#fff'
  });
  var tab1 = SCTi.Tab.create({
      icon:'KS_nav_views.png',
      title:'Tab 1',
      window:win1
  });

  var label1 = SCTi.Label.create({
  	color:'#999',
  	text:'I am Window 1',
  	font:{fontSize:20,fontFamily:'Helvetica Neue'},
  	textAlign:'center',
  	width:'auto'
  });

  win1.add(label1);
  
  var image = SCTi.ImageView.create({
    image: 'KS_nav_views.png',
    height: 43,
    width: 46,
    top: 10
  });
  
  win1.add(image);
  
  var textarea = SCTi.TextArea.create({
    top: 60,
    height: 50,
    width: 200,
    value: 'I am a SCTi.TextArea'
  });
  
  win1.add(textarea);

  // create controls tab and root window
  var win2 = SCTi.Window.create({
      title:'Tab 2',
      backgroundColor:'#fff'
  });
  var tab2 = SCTi.Tab.create({
      icon:'KS_nav_ui.png',
      title:'Tab 2',
      window:win2
  });

  var label2 = SCTi.Label.create({
  	color:'#999',
  	text:'I am Window 2',
  	font:{fontSize:20,fontFamily:'Helvetica Neue'},
  	textAlign:'center',
  	width:'auto'
  });

  win2.add(label2);
  
  var animation = SCTi.Animation.create({
    duration: 2000,
    opacity: 0
  });
  
  image.animate(animation);
  
  // Map Tab
  var win3 = SCTi.Window.create({
    title: 'Map Test'
  });
  
  var mapView = SCTi.MapView.create({
    animate: true,
    mapType: 'standard',
    region: {
      latitude: 46.876951,
      longitude: -96.78664,
      latitudeDelta: 0.005, 
      longitudeDelta: 0.005 },
    regionFit: true
  });
  var mapAnnotation = SCTi.MapAnnotation.create({
    animate: true,
    latitude: 46.876951,
    longitude: -96.78664,
    pinColor: 'green',
    title: 'Brian was here!',
    subtitle: 'Mmmm... beer.'
  });
  mapView.add(mapAnnotation);
  
  win3.add(mapView);
  
  var tab3 = SCTi.Tab.create({
    icon: 'KS_nav_views.png',
    title: 'Map Test',
    window: win3
  });

  var win4 = SCTi.Window.create({
    title: 'TableView',
    backgroundColor: 'white'
  });
  var tab4 = SCTi.Tab.create({
    titleBinding: "window.title",
    window: win4
  });
  
  var testRow1 = SC.Object.create({
    firstName: 'Aaron',
    lastName: 'Rodgers',
    
    hasChild: function() {
      if (this.get('lastName') === 'Rodgers') {
        return true;
      } else {
        return false;
      }
    }.property('lastName'),
    
    title: function() {
      return 'Row 3 - ' + this.get('firstName') + ' ' + this.get('lastName');
    }.property('firstName', 'lastName')
  });
  
  var testRow2 = SC.Object.create({title: "Row 4"});
  
  var tableView = SCTi.TableView.create({
    content: [
      SC.Object.create({title: "Row 1"}),
      SC.Object.create({title: "Row 2"}),
      testRow1,
      testRow2,
      SC.Object.create({title: "Row 5"})
    ]
  });
  win4.add(tableView);
  
  tableView.content.pushObjects([
    SC.Object.create({title: "Row 6"}),
    SC.Object.create({title: "Row 7"})
  ]);
  
  tableView.content.removeAt(4, 2);
  
  // Testing adding/removing rows after tableView has been rendered
  setTimeout(function() {
    tableView.content.pushObjects([SC.Object.create({title: "Row 1"}), SC.Object.create({title: "Row 2"})]);
    tableView.content.removeObject(testRow2);
    testRow1.set('firstName', 'Clay').set('lastName', 'Matthews');
  }, 5000);
  
  //  add tabs
  tabGroup.add(tab1);
  tabGroup.add(tab2);
  tabGroup.add(tab3);
  tabGroup.add(tab4);

  // open tab group
  tabGroup.open();
}
