import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

const TEST_DATA = [
  {
    id: 'a',
    startDate: '2020-10-31T20:23:36.693Z',
    requestDate: '2020-10-31T20:23:36.693Z',
    endDate: '2020-11-08T08:59:50.980Z',
    remaining: null,
    total: 6313673,
    processed: 6313673,
    status: 'Success 1',
    displayName: 'Howie'
  },
  {
    id: 'b',
    startDate: '2020-11-06T16:19:12.537Z',
    requestDate: '2020-11-06T16:19:12.537Z',
    endDate: '2020-11-07T22:50:35.274Z',
    remaining: null,
    total: 458788,
    processed: 458788,
    status: 'Success 2',
    displayName: 'Howie'
  },
  {
    id: 'c',
    startDate: '2020-11-02T20:32:11.121Z',
    requestDate: '2020-11-02T20:32:11.121Z',
    endDate: '2020-11-07T17:55:40.524Z',
    remaining: null,
    total: 4962399,
    processed: 4962399,
    status: 'Success 3',
    displayName: 'Howie'
  },
  {
    id: 'd',
    startDate: '2020-11-06T14:39:51.782Z',
    requestDate: '2020-11-06T14:39:51.782Z',
    endDate: '2020-11-06T00:28:02.782Z',
    remaining: null,
    total: 5376832,
    processed: 3388826,
    status: 'Error Fail 1',
    displayName: 'Howie'
  },
  {
    id: 'e',
    startDate: '2020-11-07T06:19:54.288Z',
    requestDate: '2020-11-07T06:19:54.288Z',
    endDate: '2020-11-08T16:32:56.585Z',
    remaining: null,
    total: 6815113,
    processed: 642558,
    status: 'Error Fail 2',
    displayName: 'Howie'
  },
  {
    id: 'f',
    startDate: '2020-11-01T14:22:10.442Z',
    requestDate: '2020-11-01T14:22:10.442Z',
    endDate: '2020-11-08T00:06:22.853Z',
    remaining: null,
    total: 2416100,
    processed: 1733111,
    status: 'Error Fail 3',
    displayName: 'Howie'
  },
  {
    id: 'g',
    startDate: null,
    requestDate: '2020-11-08T03:20:22.244Z',
    endDate: null,
    remaining: 0,
    total: 4331595,
    processed: 0,
    isInactive: true,
    status: 'Inactive 1',
    displayName: 'Howie'
  },
  {
    id: 'h',
    startDate: null,
    requestDate: '2020-11-07T21:58:07.971Z',
    endDate: null,
    remaining: 0,
    total: 4067250,
    processed: 0,
    isInactive: true,
    status: 'Inactive 2',
    displayName: 'Howie'
  },
  {
    id: 'i',
    startDate: null,
    requestDate: '2020-11-07T13:27:31.211Z',
    endDate: null,
    remaining: 0,
    total: 5395780,
    processed: 0,
    isInactive: true,
    status: 'Inactive 3',
    displayName: 'Howie'
  },
  {
    id: 'j',
    startDate: '2020-10-31T17:43:48.524Z',
    requestDate: '2020-10-31T17:43:48.524Z',
    endDate: null,
    remaining: 59155415,
    total: 7403202,
    processed: 1296422,
    status: 'In Progress 1',
    displayName: 'Howie'
  },
  {
    id: 'k',
    startDate: '2020-11-04T06:46:01.800Z',
    requestDate: '2020-11-04T06:46:01.800Z',
    endDate: null,
    remaining: 306017057,
    total: 2924097,
    processed: 876367,
    status: 'In Progress 2',
    displayName: 'Howie'
  },
  {
    id: 'l',
    startDate: '2020-11-07T21:12:31.041Z',
    requestDate: '2020-11-07T21:12:31.041Z',
    endDate: null,
    remaining: 115796299,
    total: 3578682,
    processed: 786338,
    status: 'In Progress 3',
    displayName: 'Howie'
  }
];

module('Integration | Component | transfers-table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders and sorts properly', async function (assert) {
    this.testTransfers = TEST_DATA;

    await render(hbs`<TransfersTable @transfers={{this.testTransfers}}/>`);
    assert.dom('table tbody tr').exists({ count: 24 }); // each item requires two rows because of the nice description

    // TODO: Assert that the transfers are sorted and rendered in the expected order

    await a11yAudit(this.element);
    assert.ok(true, 'no a11y errors found!');
  });
});
