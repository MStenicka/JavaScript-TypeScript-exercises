// Maximum finder
// Write a function which returns the largest element of an array using recursion.

function findMaximum(array: number[]): number {
  if (array.length === 1) {
    return array[0];
  }

  const last = array.pop()!;
  console.log(last);
  console.log(array);
  const maxRest = findMaximum(array);
  return last > maxRest ? last : maxRest;
}

let array = [1, 2, 3, 11, 10];

console.log(findMaximum(array));
