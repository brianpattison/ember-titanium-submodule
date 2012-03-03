var Ember = require('/lib/em_ti/ember-runtime');

var Animatable = Ember.Mixin.create({
  animate: function(scAnimation) {
    this.render();
    scAnimation.render();
    this.get('tiObject').animate(scAnimation.get('tiObject'));
    
    return this;
  }
});

module.exports = Animatable;