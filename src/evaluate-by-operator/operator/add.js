import {toNumber} from './../../helper/number';
import {ERROR_VALUE} from './../../error';

export const SYMBOL = '+';

export default function func(first, ...rest) {
  const result = rest.reduce((acc, value) => acc + toNumber(value), toNumber(first));

  if (isNaN(result)) {
    throw Error(ERROR_VALUE);
  }

  return result;
}

func.trans = function (first, ...rest) {
  const result = rest.reduce(function(acc, value) {
    if (typeof acc === 'number' && typeof value === 'number') {
      return acc + value;
    } else {
      return `${acc} + ${value}`;
    }
  }, first);

  return result;
}

func.SYMBOL = SYMBOL;
