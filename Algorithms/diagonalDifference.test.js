import { diagonalDifference } from './diagonalDifference';

describe('diagonal difference', () => {
  test('should return results', () => {
    expect(
      diagonalDifference([
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 9],
      ]),
    ).toEqual(2);
  });
});
