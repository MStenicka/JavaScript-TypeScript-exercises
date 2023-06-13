'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line
// Use this function to draw the canvas' diagonals
// If the line starts from the upper-left corner it should be green, otherwise it should be red
// Make decision about the color in the function

function diagonals(diagonal: string) {
  const canvasHeight = canvas.height;
  const canvasWidth = canvas.width;
  if (diagonal == 'upper-left') {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(canvasWidth, canvasHeight);
    ctx.strokeStyle = 'green';
    ctx.stroke();
  } else if (diagonal == 'upper-right') {
    ctx.beginPath();
    ctx.moveTo(0, canvasHeight);
    ctx.lineTo(canvasWidth, 0);
    ctx.strokeStyle = 'red';
    ctx.stroke();
  }
}
diagonals('upper-left');
