import RESTSerializer from '@ember-data/serializer/rest';
import { underscore } from '@ember/string';

export default class ApplicationSerializer extends RESTSerializer {
  normalizeQueryResponse(store, ModelClass, payload, id, requestName) {
    if (payload.DATA) {
      // Handle response format from express server
      payload = { transferRequests: payload.DATA };
    }

    return this.normalizeArrayResponse(store, ModelClass, payload, id, requestName);
  }

  keyForAttribute(attr) {
    return underscore(attr);
  }
}
