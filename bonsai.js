
(function() {

  'use strict';

  var Bonsai = {
    action: 'something'
  };

  /* TEST_ENTRY_POINT */

  if (typeof exports === 'object') {
    module.exports = Bonsai;
  } else if (typeof define === 'function' && define.amd) {
    define(function() { return Bonsai; });
  } else {
    this.Bonsai = Bonsai;
  }

}.call(this));
