import { helper } from '@ember/component/helper';

export function humanizeBytes(bytes, decimals = 2) {
  if (bytes === 0 || isNaN(bytes)) return '0 b';

  const scale = 1024;
  const sizes = ['b', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const factor = Math.floor(Math.log(bytes) / Math.log(scale));

  return parseFloat((bytes / Math.pow(scale, factor)).toFixed(decimals)) + ' ' + sizes[factor];
}

export default helper(function byteNotation([bytes, decimals]) {
  return humanizeBytes(bytes, decimals);
});
