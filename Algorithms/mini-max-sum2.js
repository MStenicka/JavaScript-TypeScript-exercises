'use strict';

function miniMaxSum(arr) {
  let sum = arr.reduce((a, b) => a + b);
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let minSum = sum - max;
  let maxSum = sum - min;
  console.log(minSum + ' ' + maxSum);
}

let arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);
