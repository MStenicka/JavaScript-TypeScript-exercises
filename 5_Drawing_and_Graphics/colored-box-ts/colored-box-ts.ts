'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(300, 100);
ctx.strokeStyle = '#0000ff';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300, 100);
ctx.lineTo(300, 300);
ctx.strokeStyle = 'red';
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(300, 300);
ctx.lineTo(100, 300);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'yellow';
ctx.moveTo(100, 300);
ctx.lineTo(100, 100);
ctx.stroke();
