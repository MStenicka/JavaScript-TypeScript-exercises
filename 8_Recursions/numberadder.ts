// Number adder
// Write a recursive function that takes one parameter: n and returns the sum of numbers (integers) from 1 to n. The function should return 0 for inputs less than 1.

function numberAdder(n: number): number {
  if (n < 1) {
    //base case
    return 0;
  } else {
    return n + numberAdder(n - 1);
  }
}

console.log(numberAdder(5));

export { numberAdder };
