// Create a function called removeInvalidTriangles that takes an array of triangles (triangles) as an input, (a triangle is represented by an array with 3 integers which are the length of its sides) and removes the invalid triangles from the array. It returns an array / list with only the valid triangles.  hint: A triangle is valid if sum of any of its two sides is greater than the third side:
// java a + b > c b + c > a a + c > b

function validTriangles(triangles) {
  //   let validTrianglesArray = [];
  //   for (let triangle of triangles) {
  //     if (
  //       triangle[0] + triangle[1] > triangle[2] &&
  //       triangle[1] + triangle[2] > triangle[0] &&
  //       triangle[0] + triangle[2] > triangle[1]
  //     ) {
  //       validTrianglesArray.push(triangle);
  //     }
  //   }
  //   return validTrianglesArray;
  // }

  for (let i = 0; i < triangles.length; i++) {
    let triangle = triangles[i];
    for (let j = 0; j < triangle.length; j++) {
      let sum = triangle.reduce((sum, a) => sum + a, 0) - triangle[j];
      if (sum <= triangle[j]) {
        triangles.splice(triangles[i], 1);
        break;
      }
    }
  }
  return triangles;
}

console.log(
  validTriangles([
    [2, 3, 4],
    [3, 4, 5],
    [1, 3, 5],
  ]),
);
