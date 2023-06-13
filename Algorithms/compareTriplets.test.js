import { compareTriplets } from './compareTriplets';

describe('compare triplets', () => {
  test('should return results', () => {
    expect(compareTriplets([5, 6, 7], [3, 6, 10])).toEqual([1, 1]);
  });
});
