'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

function cuboid(): void {
  let sideA: number = 10;
  let sideB: number = 20;
  let sideC: number = 30;

  let surfaceArea: number = 2 * (sideA * sideB + sideA * sideC + sideB * sideC);
  let volume: number = sideA * sideB * sideC;

  console.log('Surface Area: ' + surfaceArea);
  console.log('Volume: ' + volume);
}

cuboid();

export { cuboid };
