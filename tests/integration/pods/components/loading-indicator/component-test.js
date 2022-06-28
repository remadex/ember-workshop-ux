import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-workshop/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | loading-indicator', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<LoadingIndicator />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <LoadingIndicator>
        template block text
      </LoadingIndicator>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
