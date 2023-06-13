'use strict';
let myArray = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

function hourglassSum(arr) {
  // Write your code here
  let maxSum = -63;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let topSum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
      let middleSum = arr[i + 1][j + 1];
      let bottomSum = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
      let currentTotalSum = topSum + middleSum + bottomSum;
      console.log(currentTotalSum);
      if (currentTotalSum > maxSum) {
        maxSum = currentTotalSum;
      } else {
        maxSum = maxSum;
      }
      //console.log(maxSum);
    }
  }
  console.log(maxSum.toString());
}

hourglassSum(myArray);
