'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a 50-long long horizontal line from that point
// Draw at least 3 lines with that function using a loop

function horizontalLines(x: number, y: number) {
  for (let i = 1; i < 10; i++) {
    // x += i * 5;
    // y += i * 10;
    ctx.beginPath();
    ctx.moveTo(x, y + 20 * i);
    ctx.lineTo(x + 50, y + 20 * i);
    ctx.strokeStyle = 'green';
    ctx.stroke();
  }
}
horizontalLines(20, 20);
