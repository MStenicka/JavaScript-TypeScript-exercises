'use strict';
// Animal
// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// When creating a new animal instance these values must be set to the default 50 value
// Every animal can eat() which decreases its hunger by one
// Every animal can drink() which decreases its thirst by one
// Every animal can play() which increases both its hunger and thirst by one

class Animal {
  private _hunger: number;
  private _thirst: number;

  constructor() {
    this._hunger = 50;
    this._thirst = 50;
  }

  public eat(): void {
    this._hunger--;
  }
  public drink(): void {
    this._thirst--;
  }
  public play(): void {
    this._hunger++;
    this._thirst++;
  }

  public get hunger(): number {
    return this._hunger;
  }

  public get thirst(): number {
    return this._thirst;
  }
}

export { Animal };
