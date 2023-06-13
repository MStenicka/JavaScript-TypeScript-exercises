'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

const increment = 20;
let lastPos = 20;

for (let i = 1; i <= 6; i++) {
  ctx.fillStyle = 'purple';
  const size = increment * i;
  const leftCornerPos = lastPos + size - increment;
  ctx.fillRect(leftCornerPos, leftCornerPos, size, size);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(leftCornerPos, leftCornerPos, size, size);
  lastPos = leftCornerPos;
}
