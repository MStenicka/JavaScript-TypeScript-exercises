// Create a function called removeInvalidTriangles that takes an array of triangles (triangles) as an input, (a triangle is represented by an array with 3 integers which are the length of its sides) and removes the invalid triangles from the array. It returns an array / list with only the valid triangles.  hint: A triangle is valid if sum of any of its two sides is greater than the third side:
// java a + b > c b + c > a a + c > b

function validTriangles(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i][0] + arr[i][1] > arr[i][2] &&
      arr[i][1] + arr[i][2] > arr[i][0] &&
      arr[i][0] + arr[i][2] > arr[i][1]
    ) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(
  validTriangles([
    [2, 3, 3],
    [1, 3, 5],
    [1, 4, 5],
  ]),
);
