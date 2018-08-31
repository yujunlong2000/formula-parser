export const SYMBOL = '>';

export default function func(exp1, exp2) {
  return exp1 > exp2;
}

func.trans = function (exp1, exp2) {
  if (typeof exp1 !== 'string' && typeof exp2 !== 'string') {
    return exp1 > exp2;
  } else {
    return `${exp1} > ${exp2}`;
  }
}

func.SYMBOL = SYMBOL;
