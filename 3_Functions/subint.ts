'use strict';

//  Create a function that takes a number and an array of numbers as a parameter
//  and returns the indices of the numbers of the array which contain the given number
//  or returns an empty list (if the number is not part of any of the numbers in the array)

export function findMatchingIndexes(
  digit: number,
  numbers: number[],
): number[] {
  const matchingIndexes: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i].toString().includes(digit.toString())) {
      matchingIndexes.push(i);
    }
  }

  return matchingIndexes;
}

console.log(findMatchingIndexes(1, [1, 2, 1]));
console.log(findMatchingIndexes(1, [1, 21, 31]));
console.log(findMatchingIndexes(1, []));
