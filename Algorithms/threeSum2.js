/*
  create function called threeSum that takes array of integers (array) 
  as an input and finds 3 different elements (they might have the same value, 
  they need to differ in index) in the array for which their sum is the smallest and 
  returns indexes of these 3 elements in any order
*/

function threeSum2(arr) {
  let newArr = [...arr];
  let minArr = arr.sort((a, b) => a - b).slice(0, 3);
  console.log(minArr);
  console.log(newArr);

  let result = [];

  for (let i = 0; i < minArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (minArr[i] === newArr[j]) {
        result.push(j);
      }
    }
  }

  return [...new Set(result)];
}
console.log(threeSum2([1, 3, 5, 4, 1]));
