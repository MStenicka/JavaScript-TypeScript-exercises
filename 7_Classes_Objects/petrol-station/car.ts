'use strict';

class Car {
  private _gasAmount: number;
  private _capacity: number;

  constructor() {
    this._gasAmount = 0;
    this._capacity = 100;
  }

  get gasAmount(): number {
    return this._gasAmount;
  }

  set gasAmount(value: number) {
    this._gasAmount = value;
  }

  get capacity(): number {
    return this._capacity;
  }
}

export { Car };
