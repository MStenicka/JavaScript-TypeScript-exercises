'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern

let width: number = canvas.width; // chessboard 800
let height: number = canvas.height; // chessboard 800
let w: number = width / 8; // 800/100=100
let h: number = height / 8; // 800/100=100
let x: number = 0;
let y: number = 0;
let positionX = 0;
let positionY = 0;

for (let j = 0; j < height; j += 200) {
  for (let i = 0; i < width; i += 200) {
    positionX = x + i;
    positionY = y + j;
    ctx.fillStyle = 'black';
    ctx.fillRect(positionX, positionY, w, h);
  }
}

for (let j = 100; j < height; j += 200) {
  for (let i = 100; i < width; i += 200) {
    positionX = x + i;
    positionY = y + j;
    ctx.fillStyle = 'black';
    ctx.fillRect(positionX, positionY, w, h);
  }
}
