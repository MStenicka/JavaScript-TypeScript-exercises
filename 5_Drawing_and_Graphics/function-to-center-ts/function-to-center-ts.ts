'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Fill the canvas with lines from the edges (every 20 px) to the center

const height: number = canvas.height;
const width: number = canvas.width;
let density: number = 5;

function toCenter(x: number, y: number) {
  for (let i = 0; i <= width - 2 * x; i += density) {
    ctx.beginPath();
    ctx.moveTo(x + i, y);
    ctx.lineTo(width / 2, height / 2);
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }
  for (let m = 0; m <= width - 2 * x; m += density) {
    ctx.beginPath();
    ctx.moveTo(x + m, height - y);
    ctx.lineTo(width / 2, height / 2);
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }
  for (let j = 0; j <= height - 2 * y; j += density) {
    ctx.beginPath();
    ctx.moveTo(x, y + j);
    ctx.lineTo(width / 2, height / 2);
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }
  for (let n = 0; n <= height - 2 * y; n += density) {
    ctx.beginPath();
    ctx.moveTo(width - x, y + n);
    ctx.lineTo(width / 2, height / 2);
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }
}
toCenter(20, 20);
