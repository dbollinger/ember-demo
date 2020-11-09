import RESTAdapter from '@ember-data/adapter/rest';

export default class TransferRequestAdapter extends RESTAdapter {
  namespace = '/api';

  headers = {
    'api-key': 'globus'
  };

  pathForType() {
    return 'transfer-requests';
  }
}
