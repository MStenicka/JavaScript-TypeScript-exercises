// https://www.hackerrank.com/challenges/camelcase/problem

function camelcase(s) {
  // Write your code here
  let count = 1;
  for (let ch of s) {
    if (ch.match(/[A-Z]/)) {
      count++;
    }
  }
  console.log(count);
}

camelcase('oneTwoThree');
