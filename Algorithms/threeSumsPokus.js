/*
  create function called threeSum that takes array of integers (array) 
  as an input and finds 3 different elements (they might have the same value, 
  they need to differ in index) in the array for which their sum is the smallest and 
  returns indexes of these 3 elements in any order
*/

function threeS(arr) {
  let newArr = [...arr];
  let smallestNumbers = newArr.sort((a, b) => a - b).slice(0, 3);
  console.log(smallestNumbers);
  console.log(newArr);
  let result = [];

  for (let i = 0; i < smallestNumbers.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === smallestNumbers[i] && !result.includes(j)) {
        result.push(j);
      }
    }
  }
  return result;
}

console.log(threeS([1, 3, 5, 4, 1]));
