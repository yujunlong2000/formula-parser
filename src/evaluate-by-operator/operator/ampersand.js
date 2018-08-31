export const SYMBOL = '&';

export default function func(...params) {
  return params.reduce((acc, value) => acc + value.toString(), '');
}

func.trans = function (first, ...rest) {
  return rest.reduce(function (exp1, exp2) {
    if (typeof exp1 !== 'string' && typeof exp2 !== 'string') {
      return '' + exp1 + exp2;
    } else {
      return `concat(${exp1}, ${exp2})`;
    }
  }, first);
}

func.SYMBOL = SYMBOL;
