'use strict';
export class Sum {
  sum(numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
  }
}
