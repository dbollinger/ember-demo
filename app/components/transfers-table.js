import Component from '@glimmer/component';
import { sort } from '@ember/object/computed';
import { set } from '@ember/object';

class SortedTransfers {
  constructor(transfers) {
    set(this, 'transfers', transfers);
  }

  sortProperties = ['isInactive:desc', 'isInProgress:desc', 'remaining:asc', 'endDate:desc'];
  @sort('transfers', 'sortProperties') sortedTransfers;
}

export default class TransfersTableComponent extends Component {
  get sortedTransfers() {
    return new SortedTransfers(this.args.transfers).sortedTransfers;
  }
}
