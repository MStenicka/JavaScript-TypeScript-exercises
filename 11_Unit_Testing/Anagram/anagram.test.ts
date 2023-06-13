import { areAnagrams } from './anagram';

// # Anagram

// - Write a function, that takes two strings and returns a boolean value based on
//   if the two strings are Anagramms or not.
// - Create a test for that.

describe('areAnagrams', () => {
  test('should return true for valid anagrams', () => {
    const str1 = 'listen';
    const str2 = 'silent';
    const expected = true;
    const actual = areAnagrams(str1, str2);
    expect(actual).toEqual(expected);
  });

  test('should return false for non-anagrams', () => {
    const str1 = 'hello';
    const str2 = 'world';
    const expected = false;
    const actual = areAnagrams(str1, str2);
    expect(actual).toEqual(expected);
  });

  test('should ignore case sensitivity', () => {
    const str1 = 'Anagram';
    const str2 = 'Nagaram';
    const expected = true;
    const actual = areAnagrams(str1, str2);
    expect(actual).toEqual(expected);
  });
});
