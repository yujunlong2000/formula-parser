import { toBoolean } from './../../helper/boolean';

export const SYMBOL = '&&';

export default function func(first, ...rest) {
  if (!toBoolean(first)) return false; // eslint-disable-line curly
  for (let i = 0; i < rest.length; ++i) {
    if (!toBoolean(rest[i])) return false; // eslint-disable-line curly
  }
  return true;
}

func.trans = function (first, ...rest) {
  const result = rest.reduce(function (exp1, exp2) {
    if (typeof exp1 !== 'string' && typeof exp2 !== 'string') {
      return exp1 && exp2;
    } else {
      return `${exp1} and ${exp2}`;
    }
  }, first);

  return result;
}

func.SYMBOL = SYMBOL;
