import { toBoolean } from './../../helper/boolean';

export const SYMBOL = '&&';

export default function func(first, ...rest) {
  if (!toBoolean(first)) return false; // eslint-disable-line curly
  for (let i = 0; i < rest.length; ++i) {
    if (!toBoolean(rest[i])) return false; // eslint-disable-line curly
  }
  return true;
}

func.SYMBOL = SYMBOL;
