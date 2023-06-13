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
 * Complete the 'makeAnagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function makeAnagram(a, b) {
  let count = 0;
  let charactersA = a.split('');
  let charactersB = b.split('');

  for (let i = 0; i < charactersA.length; i++) {
    if (!b.includes(charactersA[i])) {
      count++;
    }
    //b = b.replace(charactersA[i], '');
    //console.log('B: ' + b);
  }

  for (let i = 0; i < charactersB.length; i++) {
    if (!a.includes(charactersB[i])) {
      count++;
    }
    //a = a.replace(charactersB[i], '');
    //console.log('A: ' + a);
  }

  return count;
}

makeAnagram('cde', 'abc');

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const a = readLine();

  const b = readLine();

  const res = makeAnagram(a, b);

  ws.write(res + '\n');

  ws.end();
}
