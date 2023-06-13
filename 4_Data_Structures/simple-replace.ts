'use strict';

// I would like to replace "dishwasher" with "galaxy" in this example variable, but it has a problem
// Please fix it for me!
// Expected ouput: In a galaxy far far away

export function simpleReplace() {
  let example: string = 'In a dishwasher far, far away';
  example = example.replace('dishwasher', 'galaxy');
  console.log(example);
}

simpleReplace();
