// Sharpie
// Create a Sharpie class
// We should know the followings about each sharpie:
// color (which should be a string),
// width (which will be a number) and the
// inkAmount (another number)
// We need to specify the color and the width at creation
// Every sharpie is created with a default inkAmount value: 100
// We can use() the sharpie objects: using it decreases inkAmount by 10

import { userInfo } from 'os';

export class Sharpie {
  private _color: string;
  private _width: number;
  private _inkAmount: number;

  constructor(color: string, width: number) {
    this._color = color;
    this._width = width;
    this._inkAmount = 100;
  }
  use() {
    if (this._inkAmount >= 10) {
      this._inkAmount -= 10;
    } else {
      this._inkAmount = 0;
    }
  }

  get color() {
    return this._color;
  }

  get width() {
    return this._width;
  }

  get ink() {
    return this._inkAmount;
  }
}
