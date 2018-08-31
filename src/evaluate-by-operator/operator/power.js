import {toNumber} from './../../helper/number';
import {ERROR_VALUE} from './../../error';

export const SYMBOL = '^';

export default function func(exp1, exp2) {
  const result = Math.pow(toNumber(exp1), toNumber(exp2));

  if (isNaN(result)) {
    throw Error(ERROR_VALUE);
  }

  return result;
}

func.trans = function (exp1, exp2) {
  if (typeof exp1 === 'number' && typeof exp2 === 'number') {
    return Math.pow(toNumber(exp1), toNumber(exp2));
  } else {
    return `pow(${exp1}, ${exp2})`;
  }
}

func.SYMBOL = SYMBOL;
