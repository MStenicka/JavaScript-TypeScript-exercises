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
 * Complete the 'alternatingCharacters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternatingCharacters(s) {
  // Write your code here
  s = s.split('');
  let deletesCounter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      deletesCounter++;
    }
  }
  return deletesCounter;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    const result = alternatingCharacters(s);

    ws.write(result + '\n');
  }

  ws.end();
}

alternatingCharacters('5');
alternatingCharacters('AAAA');
alternatingCharacters('BBBBB');
alternatingCharacters('ABABABAB');
alternatingCharacters('BABABA');
alternatingCharacters('AAABBB');
