'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//
const size: number = 8;

export function drawChessTable(size: number) {
  let pattern: string = '';
  for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
      if ((i + j) % 2 === 0) {
        pattern += '%';
      } else {
        pattern += ' ';
      }
    }
    if (j < size - 1) {
      pattern += '\n';
    }
  }
  console.log(pattern);
}

drawChessTable(size);
