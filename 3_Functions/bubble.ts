'use strict';

//  Create a function that takes a list of numbers as parameter
//  and returns a list where the elements are sorted in ascending numerical order
//  When you are done, add a second boolean parameter to the function
//  If it is `true` sort the list descending, otherwise ascending

export function bubble(numbers: number[]) {
  return numbers.sort((a, b) => a - b);
}

console.log(bubble([34, 12, 24, 9, 5]));
// //  should print [5, 9, 12, 24, 34]

export function advancedBubble(numbers1: number[], descending: boolean) {
  return numbers1.sort((a, b) => (descending ? b - a : a - b));
}
console.log(advancedBubble([34, 12, 24, 9, 5], true));
// //  should print [34, 24, 12, 9, 5]
