'use strict';

let lineCount: number = 6;

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

export function drawDiagonalSquare(lineCount: number) {
  let pattern: string = '';
  for (let i = 0; i < lineCount; i++) {
    for (let j = 0; j < lineCount; j++) {
      if (i === 0 || i === lineCount - 1) {
        pattern += '%';
      } else {
        if (j === 0 || j === lineCount - 1 || j == i) {
          pattern += '%';
        } else {
          pattern += ' ';
        }
      }
    }
    if (i < lineCount - 1) {
      pattern += '\n';
    }
  }
  console.log(pattern);
}
drawDiagonalSquare(6);
