//https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
  // Write your code here
  let n = arr.length;
  let positiveNumbers = 0;
  let negativeNumbers = 0;
  let zeroNumbers = 0;
  for (let a of arr) {
    if (a > 0) {
      positiveNumbers++;
    } else if (a < 0) {
      negativeNumbers++;
    } else if (a == 0) {
      zeroNumbers++;
    } else {
      console.log('It is not a right number');
    }
  }

  let positiveRatio = (positiveNumbers / n).toFixed(6);
  let negativeRatio = (negativeNumbers / n).toFixed(6);
  let zeroRatio = (zeroNumbers / n).toFixed(6);
  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);
}
plusMinus([1, 1, 0, -1, -1]);
