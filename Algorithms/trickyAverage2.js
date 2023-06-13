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

function trickyAverage(arr) {
  let odd = [];
  let even = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    } else if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    }
  }

  let min = odd[0];
  for (let j = 1; j < odd.length; j++) {
    if (min > odd[j]) {
      min = odd[j];
    }
  }

  let max = even[0];
  for (let k = 1; k < even.length; k++) {
    if (max < even[k]) {
      max = even[k];
    }
  }

  return (min + max) / 2;
}

console.log(trickyAverage([1, 2, 3]));
