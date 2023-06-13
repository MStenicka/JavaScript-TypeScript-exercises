// Write a function called `findUniqueItems()` that takes a list of numbers
// as a parameter and returns a list of numbers in which every number is unique
// (occurs only once)

export function findUniqueItems(numbers: number[]): number[] {
  numbers = numbers.filter((x, i, a) => a.indexOf(x) === i);
  return numbers;
}

// Example
console.log(findUniqueItems([1, 11, 34, 11, 52, 61, 1, 34])); // print: `[1, 11, 34, 52, 61]`
