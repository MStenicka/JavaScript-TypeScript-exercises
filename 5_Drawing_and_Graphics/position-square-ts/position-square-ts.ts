'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws one square
// Parameters: the x and y coordinates of the square's top left corner
// The function shall draw a 50x50 square from that point
// Draw 3 squares with that function
// Avoid code duplication!

function square(x: number, y: number) {
  for (let i = 0; i < 3; i++) {
    ctx.fillStyle = 'blue';
    ctx.fillRect(x + i * 100, y, 50, 50);
  }
}

square(200, 100);
