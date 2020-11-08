import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { STATUS_TYPES } from 'status-tracker/models/transfer-request';

module('Unit | Model | transfer request', function (hooks) {
  setupTest(hooks);

  test('displayName returns "Missing Info" when fullname, username, and email are not present', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('transfer-request', {});
    assert.equal(model.displayName, 'Missing Info');
  });

  test('displayName returns fullname when populated', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('transfer-request', {
      fullname: 'Howie Bollinger',
      username: 'howie1234',
      email: 'howie@example.com'
    });
    assert.equal(model.displayName, 'Howie Bollinger');
  });

  test('displayName returns username when fullname is not populated', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('transfer-request', {
      username: 'howie1234',
      email: 'howie@example.com'
    });
    assert.equal(model.displayName, 'howie1234');
  });

  test('displayName returns email when fullname and username are not populated', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('transfer-request', {
      email: 'howie@example.com'
    });
    assert.equal(model.displayName, 'howie@example.com');
  });

  test('it computes INACTIVE status', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('transfer-request', {
      requestDate: new Date()
    });

    assert.equal(model.statusType, STATUS_TYPES.INACTIVE);
  });

  test('it computes IN_PROGRESS status', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('transfer-request', {
      requestDate: new Date(),
      startDate: new Date(),
      endDate: null,
      remaining: 100000,
      total: 1000,
      processed: 500
    });

    assert.equal(model.statusType, STATUS_TYPES.IN_PROGRESS);
  });

  test('it computes ERROR status', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('transfer-request', {
      requestDate: new Date(),
      startDate: new Date(),
      endDate: new Date(),
      total: 1000,
      processed: 500
    });

    assert.equal(model.statusType, STATUS_TYPES.ERROR);
  });

  test('it computes SUCCESS status', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('transfer-request', {
      requestDate: new Date(),
      startDate: new Date(),
      endDate: new Date(),
      total: 1000,
      processed: 1000
    });

    assert.equal(model.statusType, STATUS_TYPES.SUCCESS);
  });
});

/*


  get statusType() {
    if (!this.startDate) {
      return STATUS_TYPES.INACTIVE;
    } else if (this.startDate && this.endDate && this.total === this.processed) {
      return STATUS_TYPES.SUCCESS;
    } else if (this.startDate && this.endDate && this.total !== this.processed) {
      return STATUS_TYPES.ERROR;
    } else if (this.startDate && !this.endDate && this.total !== this.processed) {
      return STATUS_TYPES.IN_PROGRESS;
    } else {
      return 'UNKNOWN';
    }
  }
*/
