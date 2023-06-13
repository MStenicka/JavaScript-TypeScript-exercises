'use strict';
// Write a program that draws a
// pyramid like this:
//    *
//   ***
//  *****
// *******
// The pyramid should have as many lines as lineCount is
//let lineCount: number = 4;
export function drawPyramid(lineCount: number) {
  for (let i = 0; i < lineCount; i++) {
    //console.log(' '.repeat(lineCount - i) + '*'.repeat(i + i - 1)); another way to solve it
    let spaces: string = '';
    let stars: string = '';

    for (let j = 0; j < lineCount - i - 1; j++) {
      spaces += ' ';
    }

    for (let j = 0; j < 2 * i + 1; j++) {
      stars += '*';
    }
    console.log(spaces + stars);
  }
}
drawPyramid(3);
