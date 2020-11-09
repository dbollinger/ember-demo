import Route from '@ember/routing/route';
import { task } from 'ember-concurrency';

export default class TransfersRoute extends Route {
  model() {
    this.loadTransfers.perform().catch((e) => {
      // Very basic error handling for failed attempts to request from the API
      console.log(e);
    });

    return {
      loadTransfers: this.loadTransfers
    };
  }

  @task(function* (options = {}) {
    return yield this.store.query('transfer-request', options);
  })
  loadTransfers;
}
