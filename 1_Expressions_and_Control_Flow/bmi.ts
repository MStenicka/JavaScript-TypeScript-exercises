'use strict';

// Print the Body mass index (BMI) based on these values
function bmi(): void {
  let massInKg: number = 81.2;
  let heightInM: number = 1.78;

  let bmi: number = massInKg / (heightInM * heightInM);

  console.log('Body mass index (BMI): ' + bmi);
}

bmi();

export { bmi };
