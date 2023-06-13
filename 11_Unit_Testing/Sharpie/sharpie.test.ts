import { Sharpie } from '../../../week-09/day-2/sharpie';

describe('Sharpie', () => {
  let sharpie: Sharpie;

  beforeEach(() => {
    sharpie = new Sharpie('black', 2);
  });

  it('should initialize with the provided color and width', () => {
    expect(sharpie.color).toEqual('black');
    expect(sharpie.width).toEqual(2);
  });

  it('should initialize with an ink amount of 100', () => {
    expect(sharpie.ink).toEqual(100);
  });

  it('should decrease the ink amount by 10 when use() is called', () => {
    sharpie.use();
    expect(sharpie.ink).toEqual(90);
  });

  it('should not decrease the ink amount below 0 when repeatedly using', () => {
    for (let i = 0; i < 15; i++) {
      sharpie.use();
    }
    expect(sharpie.ink).toEqual(0);
  });
});
