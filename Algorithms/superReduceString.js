'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function superReducedString(s) {
  // Write your code here
  let reducedString = [];
  for (let i = 0; i < s.length; i++) {
    if (reducedString[reducedString.length - 1] === s[i]) {
      reducedString.pop();
      console.log(reducedString);
      console.log(s[i]);
    } else {
      reducedString.push(s[i]);
      console.log(reducedString);
    }
  }
  if (reducedString.length === 0) {
    console.log('Empty String');
  } else {
    console.log(reducedString.join(''));
  }
  console.log(reducedString);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = superReducedString(s);

  ws.write(result + '\n');

  ws.end();
}

superReducedString('aaabccddd');
