import RESTAdapter from '@ember-data/adapter/rest';

export default class TransferRequestAdapter extends RESTAdapter {
  namespace = '/api';

  headers = {
    API_KEY: 'globus'
  };

  pathForType() {
    return 'transfer-requests';
  }
}
