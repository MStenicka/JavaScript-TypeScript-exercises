// 1 matrix diagonal average, - 1 matrix antidiagonal average

function getADiagonalAvg(matrix, direction) {
  let sum = 0;
  const n = matrix.length;
  if (direction == 1) {
    for (let i = 0; i < n; i++) {
      sum += matrix[i][i];
    }
  } else if (direction == -1) {
    for (let i = 0; i < n; i++) {
      sum += matrix[i][n - i - 1];
    }
  } else {
    console.log('Wrong direction');
  }
  return sum / n;
}

console.log(
  getADiagonalAvg(
    [
      [1, 2, 3],
      [3, 4, 6],
      [5, 2, 5],
    ],
    -1,
  ),
);

console.log(
  getADiagonalAvg(
    [
      [3, 5, 11, -2],
      [3, 1, 7, 4],
      [5, 0, 2, 9],
      [21, 7, 8, 2],
    ],
    1,
  ),
);
