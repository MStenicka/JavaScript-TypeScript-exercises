export function getADiagonalAvg(matrix, direction) {
  let sum = 0;
  let n = matrix.length;
  for (let i = 0; i < matrix.length; i++) {
    if (direction == 1) {
      sum += matrix[i][i];
    }
    if (direction == -1) {
      sum += matrix[i][n - i - 1];
    }
  }
  return sum / n;
}

// console.log(
//   getADiagonalAvg(
//     [
//       [1, 2, 3],
//       [3, 4, 6],
//       [5, 2, 5],
//     ],
//     -1,
//   ),
// );

// console.log(
//   getADiagonalAvg(
//     [
//       [3, 5, 11, -2],
//       [3, 1, 7, 4],
//       [5, 0, 2, 9],
//       [21, 7, 8, 2],
//     ],
//     1,
//   ),
// );
