import RESTAdapter from '@ember-data/adapter/rest';

export default class TransferRequestAdapter extends RESTAdapter {
  namespace = '/api';
  pathForType() {
    return 'transfer-requests';
  }
}
