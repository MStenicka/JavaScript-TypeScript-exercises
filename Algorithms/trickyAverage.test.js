import { trickyAverage } from './trickyAverage';

describe('trickyAverage', () => {
  it('should return average', () => {
    expect(trickyAverage([1, 2, 3])).toEqual(1.5);
    expect(trickyAverage([3, 4, 5, 6])).toEqual(4.5);
    expect(trickyAverage([5, 2, 8, -1])).toEqual(3.5);
  });
});
