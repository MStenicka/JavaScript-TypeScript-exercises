import { getADiagonalAvg } from './getDiagonalAvg';

describe('diagonal average', () => {
  test('get diagonal average', () => {
    expect(
      getADiagonalAvg(
        [
          [1, 2, 3],
          [3, 4, 6],
          [5, 2, 5],
        ],
        -1,
      ),
    ).toEqual(4);
  });
});
