'use strict';
// Bunnies
// We have a number of bunnies and each bunny has two big floppy ears. Write a recursive method (no loops or multiplication) which takes the number of bunnies as its sole parameter and returns the total number of ears the bunnies have. The method should be able to handle invalid input (e.g. negative numbers)

function countBunnyEars(bunnies: number): number {
  if (bunnies < 0) {
    throw new Error('Invalid input (negative numbers)');
  } else if (bunnies === 0) {
    return 0;
  } else {
    return 2 + countBunnyEars(bunnies - 1);
  }
}
console.log(countBunnyEars(4));

export { countBunnyEars };
