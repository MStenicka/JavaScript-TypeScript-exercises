'use strict';
import { Car } from './car';

class Station {
  private _gasAmount: number;

  constructor(gasAmount: number) {
    this._gasAmount = gasAmount;
  }

  refill(car: Car) {
    const requiredGas = car.capacity - car.gasAmount;
    const gasToFill = Math.min(requiredGas, this._gasAmount);

    car.gasAmount += gasToFill;
    this._gasAmount -= gasToFill;
  }

  get gasAmount(): number {
    return this._gasAmount;
  }
}

export { Station };
