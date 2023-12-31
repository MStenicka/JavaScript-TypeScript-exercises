'use strict';

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one

function substr(str: string, keyword: string): number {
  return str.indexOf(keyword);
}

//  Example
console.log(substr("this is what I'm searching in", 'searching')); // "17"
console.log(substr("this is what I'm searching in", 'not')); // "-1"
