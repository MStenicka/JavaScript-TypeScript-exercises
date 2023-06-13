import { countTriples } from './zkouska';

describe('count triples', () => {
  test('should return number of triples in string', () => {
    expect(countTriples('abcXXXaabacaaa')).toBe(2);
  });
});
