var Ember = require('/lib/em_ti/ember-runtime');

var Hideable = Ember.Mixin.create({
  hide: function() {
    this.get('tiObject').hide();
    return this;
  },
  
  show: function() {
    this.get('tiObject').show();
    return this;
  }
});

module.exports = Hideable;