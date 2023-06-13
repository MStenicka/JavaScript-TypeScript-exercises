import { Animal } from '../../../week-09/day-2/animal';

describe('Animal', () => {
  let animal: Animal;

  beforeEach(() => {
    animal = new Animal();
  });

  it('should initialize with hunger and thirst values of 50', () => {
    expect(animal.hunger).toEqual(50);
    expect(animal.thirst).toEqual(50);
  });

  it('should decrease hunger when eat() is called', () => {
    animal.eat();
    expect(animal.hunger).toEqual(49);
  });

  it('should decrease thirst when drink() is called', () => {
    animal.drink();
    expect(animal.thirst).toEqual(49);
  });

  it('should increase hunger and thirst when play() is called', () => {
    animal.play();
    expect(animal.hunger).toEqual(51);
    expect(animal.thirst).toEqual(51);
  });
});
