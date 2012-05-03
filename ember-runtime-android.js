var Ember = require('/lib/em_ti/ember-runtime');

var get = Ember.get, set = Ember.set, a_slice = Array.prototype.slice;

function xform(target, method, params) {
  method.call(target, params[0], params[2], params[3], params[4]);
}

Function.prototype.property = function() {
  var ret = Ember.computed(this);
  return ret.property.apply(ret, arguments);
};

Function.prototype.observes = function() {
  this.__ember_observes__ = a_slice.call(arguments);
  return this;
};

Ember.NativeArray.apply(Array.prototype);