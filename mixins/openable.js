var Ember = require('/lib/em_ti/ember-runtime');

var Openable = Ember.Mixin.create({
  open: function(options) {
    this.get('tiObject').open(options);
    return this;
  },
  
  close: function(options) {
    this.get('tiObject').close(options);
    return this;
  }
});

module.exports = Openable;