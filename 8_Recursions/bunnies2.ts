'use strict';
// Bunnies again
// We have bunnies standing in a line numbered as 1, 2, ... The "odd" bunnies (1, 3, ...) have the usual number of ears = 2. However, the even bunnies (2, 4, ...) have 3 ears each (because they have a raised foot). Write a recursive method which accepts the number of bunnies as a parameter and returns the total number of "ears" in the bunny line. The method should be able to handle invalid input (e.g. negative numbers).

function countBunnyEars2(bunnies: number): number {
  if (bunnies < 0) {
    throw new Error('Invalid input (negative numbers)');
  } else if ((bunnies = 0)) {
    return 0;
  } else if (bunnies % 2 !== 0) {
    return 2 + countBunnyEars2(bunnies - 1); //2 ears each
  } else {
    return 3 + countBunnyEars2(bunnies - 1); //3 ears each
  }
}

// Test
try {
  console.log(countBunnyEars2(3));
  console.log(countBunnyEars2(-4));
} catch (error: any) {
  console.error((error as Error).message);
}

export { countBunnyEars2 };
