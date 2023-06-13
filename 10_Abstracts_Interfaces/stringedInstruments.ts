'use strict';
export abstract class Instrument {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract play(): void;
}

export abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;

  constructor(name: string, numberOfStrings: number) {
    super(name);
    this.numberOfStrings = numberOfStrings;
  }

  abstract sound(): string;

  play(): void {
    console.log(
      `${this.name}, a ${
        this.numberOfStrings
      }-stringed instrument that goes ${this.sound()}`,
    );
  }
}

export class ElectricGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 6) {
    super('Electric Guitar', numberOfStrings);
  }

  sound(): string {
    return 'Twang';
  }
}

class BassGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 4) {
    super('Bass Guitar', numberOfStrings);
  }

  sound(): string {
    return 'Duum-duum-duum';
  }
}

export class Violin extends StringedInstrument {
  constructor(numberOfStrings: number = 4) {
    super('Violin', numberOfStrings);
  }

  sound(): string {
    return 'Screech';
  }
}

// Test 1
const guitar = new ElectricGuitar();
const bassGuitar = new BassGuitar();
const violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

// Test 2
const guitar2 = new ElectricGuitar(7);
const bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();
