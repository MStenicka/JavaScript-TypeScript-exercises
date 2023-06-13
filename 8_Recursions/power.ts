'use strict';
// Power
// Given base and n that are both 1 or more, write a recursive method (no loops) which returns the value of base to the n-th power, so powerN(3, 2) is 9 (3 squared).

function powerN(base: number, exponent: number): number {
  if (exponent === 0) {
    return 1;
  } else {
    return base * powerN(base, exponent - 1);
  }
}
console.log(powerN(3, 3));

export { powerN };
