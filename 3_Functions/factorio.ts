// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input

export function calculateFactorial(inputNumber: number): number {
  if (inputNumber === 0 || inputNumber === 1) {
    return 1;
  }
  let factorial: number = 1;
  for (let i = 2; i <= inputNumber; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(calculateFactorial(4));
