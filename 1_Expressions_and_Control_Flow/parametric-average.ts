'use strict';

// Write a program that calculates the sum and the average from 1 to a given number
// Example input: 5
// Example output: Sum: 15, Average: 3

function parametricAverage(givenNumber: number): void {
  let sum: number = 0;
  let average: number = 0;
  for (let i = 1; i <= givenNumber; i++) {
    sum += i;
  }
  average = sum / givenNumber;
  console.log('Example output: Sum: ' + sum + ', Average: ' + average);
}

parametricAverage(5);

export { parametricAverage };
