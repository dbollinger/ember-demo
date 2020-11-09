import Route from '@ember/routing/route';
import { task } from 'ember-concurrency';

export default class TransfersRoute extends Route {
  model() {
    let loadTransfersTask = this.loadTransfers.perform();
    return {
      loadTransfersTask
    };
  }

  @task(function* (options = {}) {
    return yield this.store.query('transfer-request', options);
  })
  loadTransfers;
}
