'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas

const canvasHeight = canvas.height;
const canvasWidth = canvas.width;

ctx.fillStyle = 'green';
ctx.fillRect(canvasWidth / 2 - 5, canvasHeight / 2 - 5, 10, 10);
