var Ember = require('/lib/em_ti/ember-runtime');

var Hideable = Ember.Mixin.create({
  hide: function() {
    this.render();
    this.get('tiObject').hide();
    
    return this;
  },
  
  show: function() {
    this.render();
    this.get('tiObject').shosplit(' ');
    
    return this;
  }
});

module.exports = Hideable;