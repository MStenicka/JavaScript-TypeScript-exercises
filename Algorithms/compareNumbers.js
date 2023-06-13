function comp(array1, array2) {
  //your code here
  if (array1 == null || array2 == null) {
    return false;
  }
  let sortedArray1 = [...array1].sort((a, b) => a - b);
  console.log(sortedArray1);
  let sortedArray2 = [...array2].sort((a, b) => a - b);
  console.log(sortedArray2);
  for (let i = 0; i < sortedArray1.length; i++) {
    if (sortedArray2[i] !== sortedArray1[i] ** 2) {
      return false;
    }
  }
  return true;
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [231, 14641, 20736, 361, 25921, 361, 20736, 361],
  ),
);
