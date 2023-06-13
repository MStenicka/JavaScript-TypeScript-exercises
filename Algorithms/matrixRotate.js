// Matrix rotate
// Create a function named rotateMatrix that takes an n×n integer matrix (array of arrays) as parameter and returns a matrix which elements are rotated 90 degrees clockwise.
// Example
// Input

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Output

// [ [ 7, 4, 1 ],
//   [ 8, 5, 2 ],
//   [ 9, 6, 3 ]
// ]

function rotateMatrix(matrix) {
  const n = matrix.length;
  const rotated = new Array(n).fill().map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotated[j][n - 1 - i] = matrix[i][j];
    }
  }

  return rotated;
}

console.log(rotateMatrix(matrix));
