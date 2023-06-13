'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

export function drawPyramid(lineCount: number) {
  if (lineCount % 2 !== 0) {
    // when is lineCount odd number
    let n = (lineCount + 1) / 2;
    let string = '';
    // Upside pyramid
    for (let i = 1; i <= n; i++) {
      // printing spaces
      for (let j = n; j > i; j--) {
        string += ' ';
      }
      // printing star
      for (let k = 0; k < i * 2 - 1; k++) {
        string += '*';
      }
      string += '\n';
    }
    // downside pyramid
    for (let i = 1; i <= n - 1; i++) {
      // printing spaces
      for (let j = 0; j < i; j++) {
        string += ' ';
      }
      // printing star
      for (let k = (n - i) * 2 - 1; k > 0; k--) {
        string += '*';
      }
      if (i < n - 1) {
        string += '\n';
      }
    }
    console.log(string);
  } else {
    // when is lineCount even number
    let n = lineCount / 2;
    let string = '';
    // Upside pyramid
    for (let i = 1; i <= n; i++) {
      // printing spaces
      for (let j = n; j > i; j--) {
        string += ' ';
      }
      // printing star
      for (let k = 0; k < i * 2 - 1; k++) {
        string += '*';
      }
      string += '\n';
    }
    // downside pyramid
    for (let i = 1; i <= n - 1; i++) {
      // printing spaces
      for (let j = 0; j < i; j++) {
        string += ' ';
      }
      // printing star
      for (let k = (n - i) * 2 - 1; k > 0; k--) {
        string += '*';
      }
      if (i < n - 1) {
        string += '\n';
      }
    }
    console.log(string);
  }
}
drawPyramid(9);
