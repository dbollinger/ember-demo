import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | transfers', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /transfers', async function (assert) {
    server.createList('transfer-request', 5, 'success');
    server.createList('transfer-request', 5, 'error');
    server.createList('transfer-request', 5, 'inactive');
    server.createList('transfer-request', 5, 'inProgress');

    await visit('/transfers');

    assert.equal(currentURL(), '/transfers');

    assert.dom('h2').hasText('Transfers Report');
    assert.dom('table[aria-labelledby="transfers-heading"]').exists('');
    assert.dom('tbody tr').exists({ count: 40 }, 'assert 40 rows are rendered in the table body');

    await a11yAudit();
    assert.ok(true, 'no a11y errors found!');
  });

  test('visiting /transfers', async function (assert) {
    server.createList('transfer-request', 5, 'success');
    server.createList('transfer-request', 5, 'error');
    server.createList('transfer-request', 5, 'inactive');
    server.createList('transfer-request', 5, 'inProgress');

    await visit('/transfers');

    assert.equal(currentURL(), '/transfers');

    assert.dom('h2').hasText('Transfers Report');
    assert.dom('table[aria-labelledby="transfers-heading"]').exists('');
    assert.dom('tbody tr').exists({ count: 40 }, 'assert 40 rows are rendered in the table body');

    await a11yAudit();
    assert.ok(true, 'no a11y errors found!');
  });
});
