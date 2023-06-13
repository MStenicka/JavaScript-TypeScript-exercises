'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles
// Avoid code duplication!

// Draw a colored rectangle
ctx.fillStyle = 'red';
ctx.fillRect(10, 100, 50, 50);

ctx.fillStyle = 'blue';
ctx.fillRect(80, 100, 100, 100);

ctx.fillStyle = 'green';
ctx.fillRect(200, 100, 150, 150);

ctx.fillStyle = 'yellow';
ctx.fillRect(380, 100, 200, 200);
