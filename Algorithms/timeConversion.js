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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  let hours = parseInt(s.substring(0, 2));
  let rest = s.substring(2, 8);
  if (s.includes('PM')) {
    if (hours < 12) {
      hours += 12;
      hours = hours.toString();
      console.log(hours + rest);
    } else {
      console.log(hours + rest);
    }
  }

  if (s.includes('AM')) {
    if (hours >= 12) {
      hours -= 12;
      hours = '00';
      console.log(hours + rest);
    } else if (hours < 10) {
      console.log('0' + hours + rest);
    } else {
      console.log(hours + rest);
    }
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + '\n');

  ws.end();
}

timeConversion('12:01:00PM');
timeConversion('11:01:00PM');
timeConversion('10:01:00AM');
timeConversion('12:01:00AM');
timeConversion('06:40:03AM');
timeConversion('04:59:59AM');
