'use strict';

// Swap the values of these variables
function swap(numberToSwap1: number, numberToSwap2: number): void {
  let temp: number = numberToSwap1; // temporary variable https://dmitripavlutin.com/swap-variables-javascript/
  numberToSwap1 = numberToSwap2;
  numberToSwap2 = temp;

  console.log(numberToSwap1);
  console.log(numberToSwap2);
}

swap(123, 526);

export { swap };
