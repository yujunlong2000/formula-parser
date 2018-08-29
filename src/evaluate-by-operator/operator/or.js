import { toBoolean } from './../../helper/boolean';

export const SYMBOL = '||';

export default function func(first, ...rest) {
  if (toBoolean(first)) return true; // eslint-disable-line curly
  for (let i = 0; i < rest.length; ++i) {
    if (toBoolean(rest[i])) return true; // eslint-disable-line curly
  }
  return false;
}

func.SYMBOL = SYMBOL;
