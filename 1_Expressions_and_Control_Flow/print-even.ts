'use strict';

// Create a program that prints all the even numbers between 0 and 500

function printEven(): void {
  for (let i = 0; i <= 500; i++) {
    if (i % 2 == 0 && i !== 0) {
      console.log(i);
    }
  }
}

printEven();

export { printEven };
