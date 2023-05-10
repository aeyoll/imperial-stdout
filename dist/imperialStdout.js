// imperialStdout v0.1.0 Copyright (c) 2023 Jean-Philippe Bidegain and contributors
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.imperialStdout = factory());
})(this, (function () { 'use strict';

  function imperialStdout(message) {
    console.log(message);
  }

  return imperialStdout;

}));
//# sourceMappingURL=imperialStdout.js.map
