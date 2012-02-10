var RUN_TESTS = true;

if (RUN_TESTS) {
  Ti.include('/tests/tests.js');
} else {
  var Example = require('example');
  Example.start();
}