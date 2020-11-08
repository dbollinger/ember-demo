import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { STATUS_TYPES } from 'status-tracker/models/transfer-request';

module('Integration | Component | status-detail', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders "not started" for INACTIVE status', async function (assert) {
    this.transfer = {
      statusType: STATUS_TYPES.INACTIVE
    };

    await render(hbs`<StatusDetail @transfer={{this.transfer}} />`);

    assert.equal(this.element.textContent.trim(), 'not started');
  });

  test('it renders "Completed: <end_date>" for SUCCESS status', async function (assert) {
    let endDate = new Date('10-15-2020');

    this.transfer = {
      statusType: STATUS_TYPES.SUCCESS,
      endDate
    };

    await render(hbs`<StatusDetail @transfer={{this.transfer}} />`);

    assert.equal(this.element.textContent.trim(), `Completed: 10/15/2020 12:00 AM`);
  });

  test('it renders "Halted: <end_date>" for ERROR status', async function (assert) {
    let endDate = new Date('10-15-2020');

    this.transfer = {
      statusType: STATUS_TYPES.ERROR,
      endDate
    };

    await render(hbs`<StatusDetail @transfer={{this.transfer}} />`);

    assert.equal(this.element.textContent.trim(), `Halted: 10/15/2020 12:00 AM`);
  });

  test('it renders "Time Remaining: <hh:mm:ss>" for IN_PROGRESS status when remaining time is less than two days', async function (assert) {
    this.transfer = {
      statusType: STATUS_TYPES.IN_PROGRESS,
      remaining: 1000
    };

    await render(hbs`<StatusDetail @transfer={{this.transfer}} />`);

    assert.equal(this.element.textContent.trim(), 'Time Remaining: 00:00:01');

    this.transfer = {
      statusType: STATUS_TYPES.IN_PROGRESS,
      remaining: 60 * 60 * 47 * 1000
    };

    await render(hbs`<StatusDetail @transfer={{this.transfer}} />`);

    assert.equal(this.element.textContent.trim(), 'Time Remaining: 47:00:00');
  });

  test('it renders "Time Remaining: <dd> days" for IN_PROGRESS status when remaining time is greater than two days', async function (assert) {
    this.transfer = {
      statusType: STATUS_TYPES.IN_PROGRESS,
      remaining: 60 * 60 * 70 * 1000
    };

    await render(hbs`<StatusDetail @transfer={{this.transfer}} />`);

    assert.equal(this.element.textContent.trim(), 'Time Remaining: 2 days');

    this.transfer = {
      statusType: STATUS_TYPES.IN_PROGRESS,
      remaining: 60 * 60 * 75 * 1000
    };

    await render(hbs`<StatusDetail @transfer={{this.transfer}} />`);

    assert.equal(this.element.textContent.trim(), 'Time Remaining: 3 days');
  });
});
