import { Animal } from './animal';

class Farm {
  private _listOfAnimals: Animal[];
  private _limit: number;

  constructor(limit: number) {
    this._listOfAnimals = [];
    this._limit = limit;
  }

  breed(): void {
    if (
      this._listOfAnimals.length >= 2 &&
      this._listOfAnimals.length < this._limit
    ) {
      const newAnimal = new Animal();
      this._listOfAnimals.push(newAnimal);
    }
  }

  sell(): void {
    const lowest = this._listOfAnimals.reduce((a, b) =>
      a.hunger < b.hunger ? a : b,
    );
    const index = this._listOfAnimals.indexOf(lowest);
    console.log(index);
    this._listOfAnimals.splice(index, 1);
  }

  get animals() {
    return this._listOfAnimals;
  }

  get limit() {
    return this._limit;
  }
}

const animal1 = new Animal();
const animal2 = new Animal();
const animal3 = new Animal();

const farm = new Farm(5);
farm.animals.push(animal1);
farm.animals.push(animal2);
farm.animals.push(animal3);

animal1.play();
farm.breed();
animal2.play();
animal3.play();
animal3.play();
console.log(farm.animals);
farm.sell();
console.log(farm.animals);

const doWeStillHaveAnimal1 = farm.animals.includes(animal1);
const doWeStillHaveAnimal2 = farm.animals.includes(animal2);

// Expected output: true, true
console.log(doWeStillHaveAnimal1, doWeStillHaveAnimal2);
console.log(farm.animals);
export { Farm };
