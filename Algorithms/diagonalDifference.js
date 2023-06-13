//https://www.hackerrank.com/challenges/diagonal-difference/problem

export function diagonalDifference(arr) {
  // Write your code here
  let leftToRightDiagonalSum = 0;
  let rightToLeftDiagonalSum = 0;
  let results = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        leftToRightDiagonalSum += arr[i][j];
      }
    }
    for (let j = arr.length - 1; j >= 0; j--) {
      rightToLeftDiagonalSum += arr[i][j - i];
      break;
    }
  }
  results = Math.abs(leftToRightDiagonalSum - rightToLeftDiagonalSum);
  return results;
}

diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
]);
