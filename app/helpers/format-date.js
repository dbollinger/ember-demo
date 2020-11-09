import { helper } from '@ember/component/helper';
import { DateTime } from 'luxon';

export default helper(function formatDate([date, formatString = 'MM/dd/yyyy']) {
  return DateTime.fromJSDate(date).toFormat(formatString);
});
