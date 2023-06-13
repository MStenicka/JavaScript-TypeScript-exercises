'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

let x = 30;
let y = 30;
for (let i = 1; i < 10; i++) {
  ctx.fillStyle = 'purple';
  ctx.fillRect(x * i, y * i, x, y);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(x * i, y * i, x, y);
}
