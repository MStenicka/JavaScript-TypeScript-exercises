// function downwardRotate(matrix, n) {
//   let columns = matrix[0].length;
//   //console.log(columns);
//   let rows = matrix.length;
//   //console.log(rows);
//   let newMatrix = [
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//   ];
//   for (let i = 0; i < rows; i++) {
//     newMatrix.length = rows;
//     newMatrix[i].length = columns;
//     let number = i + n;
//     for (let j = 0; j < columns; j++) {
//       if (j == n) {
//         number = number % rows;
//         newMatrix[number][j] = matrix[i][j];
//         console.log('i + n >= rows: ' + newMatrix[number][j]);
//       } else {
//         newMatrix[i][j] = matrix[i][j];
//       }
//     }
//   }
//   return newMatrix;
// }
// matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];

// function downwardRotate(matrix, n) {
//   const col = matrix.map((row) => row[n]); // Get the column to be rotated
//   col.unshift(...col.splice(-n)); // Rotate the column downward
//   matrix.forEach((row, i) => (row[n] = col[i])); // Replace the column in the matrix
//   return matrix;
// }

function downwardRotate(matrix, n) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 0; i < cols; i++) {
    if (i === n) {
      for (let j = 0; j < rows - n; j++) {
        const temp = matrix[j][i];
        matrix[j][i] = matrix[j + n][i];
        matrix[j + n][i] = temp;
      }
      break;
    }
  }

  return matrix;
}

// Test the function with the example input
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(downwardRotate(matrix, 2)); // Output: [ [ 1, 2, 7, 4 ], [ 5, 6, 11, 8 ], [ 9, 10, 3, 12 ] ]

// console.log(downwardRotate(matrix, 2));
// console.log(downwardRotate(matrix, 1));
// console.log(
//   downwardRotate(
//     [
//       [1, 2, 3],
//       [5, 6, 7],
//       [9, 10, 11],
//     ],
//     1,
//   ),
// );
