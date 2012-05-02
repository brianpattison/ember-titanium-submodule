var Ember = require('/lib/em_ti/ember-runtime');

var Animatable = Ember.Mixin.create({
  animate: function(animation) {
    this.get('tiObject').animate(animation.get('tiObject'));
    return this;
  }
});

module.exports = Animatable;