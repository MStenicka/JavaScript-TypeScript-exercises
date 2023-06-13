'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE
const canvasHeight = canvas.height;
const canvasWidth = canvas.width;

// draw a red horizontal line to the center of the canvas
ctx.beginPath();
ctx.strokeStyle = '#ff0000';
ctx.moveTo(0, canvasHeight / 2);
ctx.lineTo(canvasWidth, canvasHeight / 2);
ctx.stroke();

// draw a green vertical line to the center of the canvas
ctx.beginPath();
ctx.strokeStyle = '#00FF00';
ctx.moveTo(canvasWidth / 2, 0);
ctx.lineTo(canvasWidth / 2, canvasWidth);
ctx.stroke();
