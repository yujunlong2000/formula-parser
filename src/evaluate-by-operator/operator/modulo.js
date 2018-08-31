import { toNumber } from './../../helper/number';
import { ERROR_DIV_ZERO, ERROR_VALUE } from './../../error';

export const SYMBOL = '%';

export default function func(first, ...rest) {
  if (isNaN(first)) {
    throw Error(ERROR_VALUE);
  }
  const result = rest.reduce((acc, value) => acc % toNumber(value), toNumber(first));

  if (isNaN(result)) {
    throw Error(ERROR_DIV_ZERO);
  }

  return result;
}

func.trans = function (first, ...rest) {
  if (isNaN(first)) {
    throw Error(ERROR_VALUE);
  }
  const result = rest.reduce(function (acc, value) {
    if (typeof acc === 'number' && typeof value === 'number') {
      return acc % value;
    } else {
      return `${acc} % ${value}`;
    }
  }, first);

  if (isNaN(result)) {
    throw Error(ERROR_DIV_ZERO);
  }

  return result;
}

func.SYMBOL = SYMBOL;
