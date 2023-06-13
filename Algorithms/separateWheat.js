function wheatFromChaff(values) {
  // Your Code is Here .. Enjoy !!
  const stack = [...values];
  for (let i = 0; i < values.length; i++) {
    for (let j = values.length - 1; j >= 0; j--) {
      if (values[i] > 0 && values[j] < 0 && i < j) {
        values[i] = stack[j];
        values[j] = stack[i];
        break;
      }
    }
  }
  console.log(values);
}

wheatFromChaff([8, 10, -6, -7, 9]);
wheatFromChaff([2, -4, 6, -6]); // [-6,-4,6,2])
wheatFromChaff([7, -3, -10]); // [-10,-3,7])
wheatFromChaff([7, -8, 1, -2]); // [-2,-8,1,7])
wheatFromChaff([8, 10, -6, -7, 9]); // [-7,-6,10,8,9])
wheatFromChaff([-3, 4, -10, 2, -6]); // [-3,-6,-10,2,4])
wheatFromChaff([2, -6, -4, 1, -8, -2]); // [-2,-6,-4,-8,1,2])
