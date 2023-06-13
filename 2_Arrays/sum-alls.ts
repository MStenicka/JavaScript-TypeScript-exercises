// -  Create a variable named `numbers` with the following content:
//   `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements of `numbers` to the console

let numbers: number[] = [3, 4, 5, 6, 7];

let result = numbers.reduce((a, b) => {
  return a + b;
}, 0);

console.log(result);
