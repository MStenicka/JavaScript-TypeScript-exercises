// https://www.geeksforgeeks.org/narcissistic-number/

function isNarcissisticNumber(number) {
  let digits = number
    .toString()
    .split('')
    .map((v) => parseInt(v));
  let sum = digits.map((v) => v ** digits.length).reduce((a, b) => a + b);
  console.log(number === sum ? true : false);
}
isNarcissisticNumber(153); //true
isNarcissisticNumber(1634); //true
isNarcissisticNumber(123); // false
