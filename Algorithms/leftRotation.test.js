import { rotLeft } from './leftRotation';

describe('leftRotation', () => {
  test('should returt left rotated array', () => {
    expect(rotLeft([1, 2, 3, 4, 5], 4)).toEqual([5, 1, 2, 3, 4]);
  });
});
