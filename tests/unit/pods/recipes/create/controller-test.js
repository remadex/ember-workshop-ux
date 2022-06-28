import { module, test } from 'qunit';
import { setupTest } from 'ember-workshop/tests/helpers';

module('Unit | Controller | recipes/create', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:recipes/create');
    assert.ok(controller);
  });
});
