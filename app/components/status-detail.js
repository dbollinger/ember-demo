import Component from '@glimmer/component';
import { STATUS_TYPES } from '../models/transfer-request';
import { Duration, DateTime } from 'luxon';

const STATUS_TEXT_MAP = new Map([
  [STATUS_TYPES.INACTIVE, 'not started'],
  [STATUS_TYPES.SUCCESS, 'Completed:'],
  [STATUS_TYPES.ERROR, 'Halted:'],
  [STATUS_TYPES.IN_PROGRESS, 'Time Remaining:']
]);

const TWO_DAYS = 60 * 60 * 48 * 1000;

export default class StatusDetailComponent extends Component {
  get statusText() {
    return STATUS_TEXT_MAP.get(this.args.transfer.statusType);
  }

  get remainingDisplayText() {
    let format = this.args.transfer.remaining < TWO_DAYS ? 'hh:mm:ss' : `d 'days'`;
    let duration = Duration.fromMillis(this.args.transfer.remaining);
    return duration.toFormat(format);
  }

  get timestamp() {
    if (this.args.transfer.endDate) {
      return DateTime.fromJSDate(this.args.transfer.endDate).toFormat('MM/dd/yyyy hh:mm a');
    } else if (this.args.transfer.remaining) {
      return this.remainingDisplayText;
    } else {
      return null;
    }
  }
}
