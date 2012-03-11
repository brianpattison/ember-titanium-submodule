var Ember = require('/lib/em_ti/ember-runtime');

var Wrapper = Ember.Object.extend({
  tiObject: null,
  tiOptions: [],
  tiEvents: [],
  tiConstantMappings: {},
  
  concatenatedProperties: ['tiOptions', 'tiEvents'],
  
  init: function() {
    this._super();
    
    // Use slice to create copies of the following arrays.
    var tiOptions = this.get('tiOptions').slice(),
        tiEvents = this.get('tiEvents').slice();

    this.set('tiOptions', tiOptions);
    this.set('tiEvents', tiEvents);
  },
  
  createTiObject: function(options) {
    return this;
  },
  
  createObject: function() {
    var tiObject = this.get('tiObject');
    
    if (!tiObject) {
      var tiObject = this.createTiObject(this.optionsForTiObject());
      this.set('tiObject', tiObject);
      this.createObservers();
    }
     
    return tiObject;
  },
  
  render: function() {
    var tiObject = this.createObject();
    
    if (this.get('isRendered')) { return this; }
    
    Ember.run.sync(); // FIXME: is this okay?
    
    this.registerEvents();
    
    this.set('isRendered', true);
    
    return this;
  },
  
  registerEvents: function() {
    var self = this, tiObject = this.get('tiObject'), tiEvents = this.get('tiEvents');
    tiEvents.forEach(function(eventName) {
      var tiEvent = eventName.split(':')[0];
      var scFunction = eventName.split(':')[1] || tiEvent;
      var handler = self.get(scFunction);
      if (handler && typeof handler === 'function') {
        tiObject.addEventListener(tiEvent, function(event) {
          Ember.run(function() {
            handler.call(self, event);
          });
        });
      }
    });
  },

  getTiOptionValue: function(optionName) {
    var tiOptionName = optionName, translatedOptionName, splitOptionNames, val;
    
    if (optionName.indexOf(':') !== -1) {
      splitOptionNames = optionName.split(':');
      tiOptionName = splitOptionNames[0];
      translatedOptionName = splitOptionNames[1];
      val = this.get(translatedOptionName);
    } else {
      val = this.get(tiOptionName);
    }
    
    return val;
  },

  forEachValidTiOption: function(callback) {
    var tiOptions = this.get('tiOptions');

    tiOptions.forEach(function(optionName) {
      var val = this.getTiOptionValue(optionName),
          disableNullSetting = this.tiNotNullable && this.tiNotNullable.indexOf(optionName) !== -1;
      
      if (val !== undefined && !(disableNullSetting && val === null)) {
        callback.call(this, optionName);
      }
    }, this);

    return this;
  },
      
  optionsForTiObject: function() {
    var self = this, tiObjectOptions = {};
    
    this.forEachValidTiOption(function(optionName) {
      var optionVal = self.getTiOptionValue(optionName), tiOptionName = optionName;
      
      if (optionName.indexOf(':') !== -1) {
        tiOptionName = optionName.split(':')[0];
      }
      // Assign the Ti Object if the value is an SC wrapped Ti Object
      if (Wrapper.detect(optionVal)) {
        optionVal = optionVal.create();
      }
      if (optionVal instanceof Wrapper) {
        // This is only for Tabs (I think), so set the tab as the parent view of the window
        optionVal.set('parentView', this);
        optionVal.render();
        tiObjectOptions[tiOptionName] = optionVal.get('tiObject');
      } else {
        tiObjectOptions[tiOptionName] = optionVal;
      }
    });
    
    return tiObjectOptions;
  },

  createObservers: function() {
    var self = this, tiOptions = this.get('tiOptions');
    
    tiOptions.forEach(function(optionName) {
      var observer = function() {
        var tiObject = this.get('tiObject');
        var currentValue = tiObject[optionName], newValue = this.get(optionName);
        
        // FIXME: This can't be the right way to do it, but zIndex behavior is weird
        if (optionName === 'zIndex' && newValue === null && newValue !== currentValue) {
          newValue = undefined;
        }
        
        if (newValue !== currentValue) {
          if (optionName === 'zIndex') {
            // FIXME: figure out what the right thing is to do here since zIndex is weird
            tiObject[optionName] = newValue || 0;
          } else if (optionName === "value") {
            tiObject[optionName] = newValue || "";
          } else if (newValue !== undefined) {
            tiObject[optionName] = newValue;
          }
        }
      };

      Ember.addObserver(self, optionName, observer);
    });
  },
  
  unknownProperty: function(key, value) {
    var isConstant = /^.+Constant$/.test(key), propertyName, constantMap, ret;
    
    if (isConstant) {
      propertyName = key.slice(0,-8);
      constantMap = this.get('tiConstantMappings')[propertyName];
      if (constantMap) {
        ret = constantMap[this.get(propertyName)];
      }
      
      ret = ret || this.get(propertyName);
    }
    
    return ret;
  }
});

module.exports = Wrapper;