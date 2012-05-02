var Ember = require('/lib/em_ti/ember-runtime');

var Focusable = Ember.Mixin.create({
  tiEvents: 'focus:focused blur:blurred'.split(' '),
  
  blur: function() {
    this.get('tiObject').blur();
    return this;
  },
  
  focus: function() {
    this.get('tiObject').focus();
    return this;
  }
});

module.exports = Focusable;