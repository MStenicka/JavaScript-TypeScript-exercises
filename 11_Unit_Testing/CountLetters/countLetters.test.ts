import { countLetters } from './countLetters';
// # Count Letters

// - Write a function, that takes a string as an argument and returns a dictionary
//   with all letters in the string as keys, and numbers as values that shows how
//   many occurrences there are.
// - Create a test for that.

describe('countLetters', () => {
  it('returns an empty object for an empty string', () => {
    expect(countLetters('')).toEqual({});
  });

  it('returns the correct letter count for a string with one letter', () => {
    expect(countLetters('a')).toEqual({ a: 1 });
  });

  it('returns the correct letter count for a string with multiple letters', () => {
    expect(countLetters('hello')).toEqual({ h: 1, e: 1, l: 2, o: 1 });
  });

  it('ignores non-alphabetic characters', () => {
    expect(countLetters('a1b2c3')).toEqual({ a: 1, b: 1, c: 1 });
  });

  it('handles uppercase and lowercase letters', () => {
    expect(countLetters('AbBcC')).toEqual({ a: 1, b: 2, c: 2 });
  });
});
