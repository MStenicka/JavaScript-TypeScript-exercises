// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter

export function sum(numbers: number): number {
  let sumOfNumbers: number = 0;
  for (let i = 0; i <= numbers; i++) {
    sumOfNumbers += i;
  }
  return sumOfNumbers;
}
console.log(sum(3));
