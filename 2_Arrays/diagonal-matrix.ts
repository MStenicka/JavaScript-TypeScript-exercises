// - Create a two dimensional list dynamically with the following content.
//   Note that a two dimensional list is often called matrix if every
//   internal list has the same length.
//   Use a loop!
//
//   1 0 0 0
//   0 1 0 0
//   0 0 1 0
//   0 0 0 1
//
//   Its length should depend on a variable
//
// - Print this two dimensional list to the output

function diagonalMatrix(n: number): number[][] {
  let arr: any = [];

  for (let i = 0; i < n; i++) {
    arr.push([]);
    for (let x = 0; x < n; x++) {
      if (i === x) {
        arr[i][x] = 1;
      } else {
        arr[i][x] = 0;
      }
    }
  }
  return arr;
}
console.log(diagonalMatrix(4));
