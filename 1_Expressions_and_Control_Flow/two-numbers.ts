'use strict';

function twoNumbers(): void {
  // Create a program that prints a few operations on two numbers: 22 and 13
  const a: number = 22;
  const b: number = 13;

  // Print the result of 13 added to 22
  // Print the result of 13 substracted from 22
  // Print the result of 22 multiplied by 13
  // Print the result of 22 divided by 13 (as a decimal fraction)
  // Print the remainder of 22 divided by 13
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
  console.log(a % b);
}

twoNumbers();

export { twoNumbers };
