'use strict';

// Write a program that prints a few details to the console about you
// It should print each detail to a new line:
//  - Your name
//  - Your age
//  - Your height in meters (as a decimal fraction)
//
//  Example output:
//  John Doe
//  31
//  1.87

const fullName: string = 'Martin Stenicka';
const age: number = 29;
const height: number = 1.79;

function introduceYourself(): void {
  console.log(fullName);
  console.log(age);
  console.log(height);
}

introduceYourself();
