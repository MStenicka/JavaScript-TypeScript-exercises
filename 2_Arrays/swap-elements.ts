// -  Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `names`

let names = ['Arthur', 'Boe', 'Chloe'];
[names[0], names[2]] = [names[2], names[0]];
console.log(names);

// const swap = names[0];  another way to solve it
// names[0] = names[2];
// names[2] = swap;

// console.log(names);
