'use strict';

// Define several things as a variable, then print their values
// Your name as a string
// Your age as a number
// Your height in meters as a number
// Whether you are married or not as a boolean

function printBasicInfo(): void {
  const name: string = 'Martin Stenicka';
  const age: number = 30;
  const heightInMeters: number = 1.79;
  const isMarried: boolean = false;

  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Height: ${heightInMeters}m`);
  console.log(`Married: ${isMarried}`);
}

printBasicInfo();

export { printBasicInfo };
