/*
Create a function called `contentFilter` that takes a number array(`numbers`) and returns a new array / list that doesn't include any zeroes or the numbers that are between two zeroes (think of the zeroes as parentheses [these things: ()] - there should be an "opening" 0 and a "closing" 0 and all the numbers between them should be removed.)

Example cases:

contentFilter([1,2,3,4]);
Should return [1,2,3,4] because there are no zeros.

contentFilter([1,2,0,3,4,0,5,6]);
Should return [1,2,5,6].

contentFilter([1,2,0,3,4,5,6]);
Should return [1,2] because there is no finishing zero.

contentFilter([1, 2, 0, 3, 4, 0, 5, 0, 12, 0, -2])
Should return [1, 2, 5, -2] as only things between pairs of zeroes are removed.
*/

function contentFilter(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      do {
        console.log('sdfsdf' + arr[i]);
        arr.splice(i, 1);
      } while (arr[i] !== 0 && i !== arr.length);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      console.log(arr[i]);
      arr.splice(i, 1);
    }
  }

  return arr;
}
console.log(contentFilter([1, 2, 0, 3, 4, 0, 5, 6]));
console.log(contentFilter([1, 2, 0, 3, 4, 5, 6]));
console.log(contentFilter([1, 2, 0, 3, 4, 0, 5, 0, 12, 0, -2]));
