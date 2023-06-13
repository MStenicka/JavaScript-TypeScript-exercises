// # Sum

// - Create a sum method in your class which has a list of integers as parameter
// - It should return the sum of the elements in the list
// - Follow these steps:
//   - Add a new test case
//   - Instantiate your class
//   - create a list of integers
//   - use the `toEqual()` matcher to test the result of the created sum method
// - Run it
// - Create different tests where you test your method with:
//   - an empty list
//   - a list that has one element in it
//   - a list that has multiple elements in it
// - Run them
// - Fix your code if needed
import { Sum } from './sum';

describe('Sum test', () => {
  test('sum should return the sum of elements in a list', () => {
    const sumInstance = new Sum();
    const numbers = [1, 2, 3, 4, 5];
    const expected = 15;
    const actual = sumInstance.sum(numbers);
    expect(actual).toEqual(expected);
  });

  test('sum should return 0 for an empty list', () => {
    const sumInstance = new Sum();
    const numbers: number[] = [];
    const expected = 0;
    const actual = sumInstance.sum(numbers);
    expect(actual).toEqual(expected);
  });

  test('sum should return the single element for a list with one element', () => {
    const sumInstance = new Sum();
    const numbers = [42];
    const expected = 42;
    const actual = sumInstance.sum(numbers);
    expect(actual).toEqual(expected);
  });

  test('sum should return the sum of elements for a list with multiple elements', () => {
    const sumInstance = new Sum();
    const numbers = [10, 20, 30, 40, 50];
    const expected = 150;
    const actual = sumInstance.sum(numbers);
    expect(actual).toEqual(expected);
  });
});
