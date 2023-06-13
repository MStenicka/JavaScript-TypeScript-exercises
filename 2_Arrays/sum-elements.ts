// - Create a variable named `numbers`
//   with the following content: `[54, 23, 66, 12]`
// - Print the sum of the second and the third element

function sumElements(numbers: number[]): void {
  let sum = numbers[1] + numbers[2];
  console.log(sum);
}

sumElements([54, 23, 66, 12]);

export { sumElements };
