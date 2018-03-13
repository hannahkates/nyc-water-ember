QUnit.module('ESLint | app');

QUnit.test('app.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'app.js should pass ESLint\n\n');
});

QUnit.test('components/bar-chart.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/bar-chart.js should pass ESLint\n\n3:8 - \'$\' is defined but never used. (no-unused-vars)\n5:16 - Use import Component from \'@ember/component\'; instead of using Ember.Component (ember/new-module-imports)\n52:9 - \'height\' is assigned a value but never used. (no-unused-vars)\n55:9 - \'x\' is assigned a value but never used. (no-unused-vars)');
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

