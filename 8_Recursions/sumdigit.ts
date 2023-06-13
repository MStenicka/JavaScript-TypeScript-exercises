// Sum Digits
// Given a non-negative integer n, return the sum of its digits recursively (without loops).

// Hint (don't read this if you'd like to have a challenge)
// Mod (%) by 10 yields the rightmost digit (e.g. 126 % 10 is 6)

// C++, C#, Python
// Divide (/) by 10 removes the rightmost digit (e.g. 126 / 10 is 12).

// JavaScript, TypeScript
// There is no integer type in JavaScript. To remove the rightmost digit you must divide (/) the number by 10 and find a way to get the the whole number portion of that number.

function sumOfDigits(n: number): number {
  if (n < 10) {
    //base case
    return n;
  } else {
    let rightmostDigit = n % 10;
    let withoutRightDigit = Math.floor(n / 10);
    return rightmostDigit + sumOfDigits(withoutRightDigit); // return the sum of its digits recursively (without loops).
  }
}

console.log(sumOfDigits(123)); // 6

export { sumOfDigits };
