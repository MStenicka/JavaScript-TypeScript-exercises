// Sum of Digits / Digital Root
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples:
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function sumOfDigits(n) {
  let sum = 0;
  while (n >= 10) {
    sum = 0;
    digits = n.toString().split('');
    console.log(digits);
    for (let digit of digits) {
      digit = parseInt(digit);
      sum += digit;
    }
    n = sum;
  }
  return sum;
}

console.log(sumOfDigits(16));
console.log(sumOfDigits(942));
console.log(sumOfDigits(132189));
console.log(sumOfDigits(493193));
