QUnit.module('ESLint | app');

QUnit.test('app.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'app.js should pass ESLint\n\n');
});

QUnit.test('components/bar-chart.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/bar-chart.js should pass ESLint\n\n2:8 - \'d3\' is defined but never used. (no-unused-vars)\n3:8 - \'$\' is defined but never used. (no-unused-vars)\n5:16 - Use import Component from \'@ember/component\'; instead of using Ember.Component (ember/new-module-imports)\n7:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
});

QUnit.test('resolver.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'resolver.js should pass ESLint\n\n');
});

QUnit.test('router.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'router.js should pass ESLint\n\n');
});

QUnit.test('routes/application.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/application.js should pass ESLint\n\n');
});

