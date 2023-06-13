// Greatest Common Divisor
// Write a recursive method which returns the greatest common divisor (GCD) of two numbers. The method should be able to handle negative numbers!

function greatestCommonDivisor(x: number, y: number): number {
  if (y < 0 || x < 0) {
    throw new Error('X,Y should not be a negative numbers');
  } else if (y === 0) {
    return x;
  } else {
    return greatestCommonDivisor(y, x % y);
  }
}

console.log(greatestCommonDivisor(10, 3));
