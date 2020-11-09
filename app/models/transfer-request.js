import Model, { attr } from '@ember-data/model';

export const STATUS_TYPES = {
  INACTIVE: 'INACTIVE',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  IN_PROGRESS: 'IN_PROGRESS'
};

export default class TransferRequestModel extends Model {
  @attr('date') startDate;
  @attr('date') requestDate;
  @attr('date') endDate;
  @attr('number') remaining;
  @attr('number') total;
  @attr('number') processed;
  @attr('string') status;
  @attr('string') username;
  @attr('string') fullname;
  @attr('string') email;

  get statusType() {
    if (!this.startDate) {
      return STATUS_TYPES.INACTIVE;
    } else if (this.startDate && this.endDate && this.total === this.processed) {
      return STATUS_TYPES.SUCCESS;
    } else if (this.startDate && this.endDate && this.total !== this.processed) {
      return STATUS_TYPES.ERROR;
    } else if (this.startDate && !this.endDate && this.total !== this.processed) {
      return STATUS_TYPES.IN_PROGRESS;
    } else {
      return 'UNKNOWN';
    }
  }

  get isInactive() {
    return this.statusType === STATUS_TYPES.INACTIVE;
  }

  get isInProgress() {
    return this.statusType === STATUS_TYPES.IN_PROGRESS;
  }

  get displayName() {
    return this.fullname || this.username || this.email || 'Missing Info';
  }
}
