// Create a function that divides number 10
// by a number that's passed as a paramater and prints the result.
// It should print "fail" if the parameter is 0

function divideByZero(divider: number): number {
  if (divider === 0) {
    throw new RangeError("Can't divide by zero");
  }
  return 10 / divider;
}

try {
  let result: number = divideByZero(0);
  console.log(`${result} %`);
} catch (e: any) {
  console.log(`Error: ${e.message}`);
} finally {
  console.log('Finally');
}
console.log('Program finished');
console.log(divideByZero(5));
