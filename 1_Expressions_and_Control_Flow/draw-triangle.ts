'use strict';
// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

function triangle() {
  let lineCount: number = 4;
  let star: string = '';
  for (let i = 0; i < lineCount; i++) {
    star += '*';
    console.log(star); //console.log('*'.repeat(i)); another way to solve it
  }
}
triangle();
