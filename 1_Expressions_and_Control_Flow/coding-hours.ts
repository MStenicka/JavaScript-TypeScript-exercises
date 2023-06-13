'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

function codingHours(): void {
  const dailyCodingHours: number = 6;
  const semesterWeeks: number = 17;
  const workdaysPerWeek: number = 5;
  const weeklyWorkHours: number = 52;

  const codingHoursInSemester: number =
    dailyCodingHours * workdaysPerWeek * semesterWeeks;
  const totalWorkHoursInSemester: number = weeklyWorkHours * semesterWeeks;
  const codingHoursPercentage: number =
    (codingHoursInSemester / totalWorkHoursInSemester) * 100;

  console.log(
    codingHoursPercentage + ' % of the coding hours in the semester.',
  );
}

codingHours();

export { codingHours };
