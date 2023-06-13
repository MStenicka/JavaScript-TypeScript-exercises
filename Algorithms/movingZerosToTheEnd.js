function moveZeros(arr) {
  let newArray = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count++;
    } else {
      newArray.push(arr[i]);
    }
  }
  for (let j = 0; j < count; j++) {
    newArray.push(0);
  }
  return newArray;
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
