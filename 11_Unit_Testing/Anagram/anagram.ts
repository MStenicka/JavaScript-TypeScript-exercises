'use strict';
export function areAnagrams(str1: string, str2: string): boolean {
  const sortedStr1 = str1.toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().split('').sort().join('');

  return sortedStr1 === sortedStr2;
}
