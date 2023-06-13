'use strict';

// # Flyable

// - Create a `Flyable` interface
//   - it should have `land`, `fly` and `takeOff` methods
// - Create an abstract `Vehicle` class
//   - it should have at least 3 fields which you are free to define
// - Extend `Helicopter` class from `Vehicle`
//   - implement your `Flyable` interface
// - Extend a new `Bird` class from the abstract `Animal` class that
//   was in the zoo exercise
//   - implement your `Flyable` interface

// Export the Helicopter and Bird classes for gradescope

interface Flyable {
  land(): void;
  fly(): void;
  takeOff(): void;
}

abstract class Vehicle {
  protected brand: string;
  protected year: number;
  protected color: string;

  constructor(brand: string, year: number, color: string) {
    this.brand = brand;
    this.year = year;
    this.color = color;
  }

  abstract getInfo(): string;
}

class Helicopter extends Vehicle implements Flyable {
  constructor(brand: string, year: number, color: string) {
    super(brand, year, color);
  }

  land(): void {
    console.log(`Helicopter ${this.brand} is landing.`);
  }

  fly(): void {
    console.log(`Helicopter ${this.brand}  flying.`);
  }

  takeOff(): void {
    console.log(`Helicopter ${this.brand}  taking off.`);
  }

  getInfo(): string {
    return `Helicopter - Brand: ${this.brand}, Year: ${this.year}, Color: ${this.color}`;
  }
}

abstract class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract getInfo(): string;
}

class Bird extends Animal implements Flyable {
  constructor(name: string) {
    super(name);
  }

  land(): void {
    console.log(`${this.name} is landing.`);
  }

  fly(): void {
    console.log(`${this.name} is flying.`);
  }

  takeOff(): void {
    console.log(`${this.name} is taking off.`);
  }

  getInfo(): string {
    return `Bird - Name: ${this.name}`;
  }
}

export { Helicopter, Bird };

// test
const helicopter = new Helicopter('Airbus', 2022, 'White');

helicopter.fly();
helicopter.takeOff();
helicopter.land();

console.log(helicopter.getInfo());

const bird = new Bird('Eagle');

bird.fly();
bird.takeOff();
bird.land();

console.log(bird.getInfo());
