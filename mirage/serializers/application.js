import { RestSerializer } from 'ember-cli-mirage';
import { underscore } from '@ember/string';

export default class ApplicationSerializer extends RestSerializer {
  keyForAttribute(key) {
    // ensure mirage responses match the real API's responses
    return underscore(key);
  }
}
