import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { a11yAudit } from 'ember-a11y-testing/test-support';

module('Acceptance | transfers', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /transfers', async function (assert) {
    await visit('/transfers');

    assert.equal(currentURL(), '/transfers');

    assert.dom('h2').hasText('Transfers Report');
    assert.dom('table[aria-labelledby="transfers-heading"]').exists('');

    await a11yAudit();
    assert.ok(true, 'no a11y errors found!');
  });
});
