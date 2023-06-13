// Max Sum
// Create a function called maxSum which expects an array of five integers as an input parameter and returns the maximum values that can be calculated by summing exactly four of the five integers.

// Examples
// [1 2 3 4 5] -> 14
// We can calculate the following sums using four of the five integers:

// 1 + 2 + 3 + 4 = 10
// 1 + 2 + 3 + 5 = 11
// 1 + 2 + 4 + 5 = 12
// 1 + 3 + 4 + 5 = 13
// 2 + 3 + 4 + 5 = 14 ✨

function maxSum(numbers: number[]): number {
  if (numbers.length !== 5) {
    throw new Error('Invalid input: array should have five integers.');
  }

  numbers.sort((a, b) => a - b);

  let sum = 0;
  for (let i = 1; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(maxSum(numbers));
