import RESTAdapter from '@ember-data/adapter/rest';
import config from 'status-tracker/config/environment';

export default class TransferRequestAdapter extends RESTAdapter {
  namespace = '/api';

  headers = {
    'api-key': 'globus'
  };

  urlForQuery(query) {
    let { usingProxy } = config['ember-cli-mirage'];

    if (query.testNumber && usingProxy) {
      // Workaround to support test case API requests in the express server
      let url = `${this.namespace}/${query.testNumber}`;
      delete query.testNumber;
      return url;
    } else {
      return this._buildURL(query);
    }
  }

  pathForType() {
    return 'transfer-requests';
  }
}
