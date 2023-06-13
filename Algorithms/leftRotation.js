export function rotLeft(a, d) {
  // Write your code here
  const rotatedArray = a.slice(d).concat(a.slice(0, d));
  return rotatedArray;
}

rotLeft([1, 2, 3, 4, 5], 4);
