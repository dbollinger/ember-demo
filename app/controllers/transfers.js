import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import config from 'status-tracker/config/environment';

export default class TransfersController extends Controller {
  queryParams = ['testNumber'];

  @tracked testNumber = '1';

  @action
  changeTest(event) {
    this.testNumber = event.target.value;
  }

  get isUsingProxy() {
    return config['ember-cli-mirage'].usingProxy;
  }
}
