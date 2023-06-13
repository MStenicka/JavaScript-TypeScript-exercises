export function compareTriplets(a, b) {
  let alicePoints = 0;
  let bobPoints = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alicePoints++;
    } else if (a[i] < b[i]) {
      bobPoints++;
    }
  }
  let score = [alicePoints, bobPoints];
  return score;
}

compareTriplets([5, 6, 7], [3, 6, 10]);
