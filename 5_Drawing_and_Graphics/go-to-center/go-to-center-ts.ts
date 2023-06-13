'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop

const canvasHeight = canvas.height;
const canvasWidth = canvas.width;

function goToCenter(x: number, y: number) {
  for (let i = 1; i < 100; i++) {
    x = +i * 5;
    y = +i * 10;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvasWidth / 2, canvasHeight / 2);
    ctx.strokeStyle = 'green';
    ctx.stroke();
  }
}
goToCenter(200, 200);
