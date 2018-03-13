

export function _bind(fn, ...args) {

  return function () {
    return fn.apply(undefined, args);
  };
}

export function _guard(promise, test) {
  var guarded = promise['finally'](function () {
    if (!test()) {
      guarded._subscribers.length = 0;
    }
  });

  return guarded;
}

export function _objectIsAlive(object) {
  return !(Ember.get(object, "isDestroyed") || Ember.get(object, "isDestroying"));
}