'use strict';

const mapWith = (array, callback) => {
  let output = [];

  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.
  for (let item of array) {
    output.push(callback(item));
  }

  return output;
};

const addOne = (number) => {
  return number + 1;
};

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

const mapWith2 = (array, callback) => {
  let output = [];
  for (let word of array) {
    output.push(callback(word));
  }
  return output;
};

const removeSecondLetter = (word) => {
  // let chars = word.split('');
  // let output = [];
  // for (let i = 1; i <= chars.length; i = i + 2) {
  //   output.push(chars[i - 1]);
  // }
  // return output.join('');
  return word
    .split('')
    .filter((c, index) => (index + 1) % 2 !== 0)
    .join('');
};

console.log(mapWith2(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']
