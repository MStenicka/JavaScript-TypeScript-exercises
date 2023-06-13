let matrix = [[]];

function isBalancedMatrix(matrix) {
  let upperDiagonalSum = 0;
  let underDiagonalSum = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix.length; column++) {
      if (column > row) {
        upperDiagonalSum += matrix[row][column];
      } else if (row > column) {
        underDiagonalSum += matrix[row][column];
      } else {
        upperDiagonalSum += 0;
        underDiagonalSum += 0;
      }
    }
  }
  console.log(underDiagonalSum === upperDiagonalSum ? true : false);
}

isBalancedMatrix([
  [0, -1, 5, 4],
  [5, 0, 5, 1],
  [1, 2, 0, 1],
  [1, 2, 3, 0],
]);

isBalancedMatrix([
  [1, 0, 1, 4],
  [5, 2, 9, 3],
  [1, 2, 3, 1],
  [1, 6, 3, 4],
]);
