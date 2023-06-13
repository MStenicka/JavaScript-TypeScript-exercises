// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the value of the fourth element (8) to 4 with the `.map` method
// -  Print the fourth element as a test

function changeElement(): void {
  let numbers: number[] = [1, 2, 3, 8, 5, 6];
  numbers = numbers.map((number, index) => {
    if (index === 3) {
      return 4;
    }
    return number;
  });

  console.log(numbers[3]);
}
changeElement();

export { changeElement };
