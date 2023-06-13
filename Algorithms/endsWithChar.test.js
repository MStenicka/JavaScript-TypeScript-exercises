import { endsWithChar } from './endsWithChar';

describe('ends with char', () => {
  test('should return count of repeated last characters', () => {
    expect(endsWithChar('all is well that ends well', 'l')).toEqual(2);
  });
});
