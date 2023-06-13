/*
Create a function called trickyAverage that takes an array of integers as an input and returns the average of the smallest odd and the largest even number in it.

You cannot use LINQ/Streams or similar functions that would solve this with single command.

Example cases:

trickyAverage([1, 2, 3]);
Should return 1.5, because the average of 1 and 2 is 1.5.

trickyAverage([3, 4, 5, 6]);
Should return 4.5, because the average of 3 and 6 is 4.5.

trickyAverage([5, 2, 8, -1]);
Should return 3.5, because the average of -1 and 8 is 3.5.
*/

function trickyAverage(numbers) {
  let sortedNumbers = numbers.sort((a, b) => a - b);
  let oddNumbers = [];
  let evenNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (sortedNumbers[i] % 2 == 0) {
      oddNumbers.push(sortedNumbers[i]);
    } else if (sortedNumbers[i] % 2 !== 0) {
      evenNumbers.push(sortedNumbers[i]);
    } else {
      console.log('There are no odd or even numbers');
    }
  }
  let odd = oddNumbers[0];
  let even = evenNumbers[evenNumbers.length - 1];
  return (odd + even) / 2;
}

console.log(trickyAverage([5, 2, 8, -1]));
