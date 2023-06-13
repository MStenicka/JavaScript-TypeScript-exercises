'use strict';
// While saving this quote, a disk error has occured. Please fix it!
// Insert the words "always takes longer than" between the words "It" and "you"!

export function takesLonger() {
  let quote = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
  let index = quote.indexOf('you');
  let fixedQuote =
    quote.slice(0, index) + 'always takes longer than ' + quote.slice(index);

  console.log(fixedQuote);
}
