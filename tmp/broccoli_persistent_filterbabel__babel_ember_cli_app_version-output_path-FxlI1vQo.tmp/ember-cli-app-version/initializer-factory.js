define('ember-cli-app-version/initializer-factory', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = initializerFactory;


  const {
    String: { classify },
    libraries
  } = Ember;

  function initializerFactory(name, version) {
    let registered = false;

    return function () {
      if (!registered && name && version) {
        var appName = classify(name);
        libraries.register(appName, version);
        registered = true;
      }
    };
  }
});