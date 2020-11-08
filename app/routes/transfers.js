import Route from '@ember/routing/route';

export default class TransfersRoute extends Route {
  model() {
    let transfers = this.store.query('transfer-request', {});

    return {
      transfers
    };
  }
}
