import { ibeizhuIsEven } from 'ibeizhu-is-even';

export function ibeizhuIsOdd(): string {
  return ibeizhuIsEven() + 'and ibeizhu-is-odd';
}
