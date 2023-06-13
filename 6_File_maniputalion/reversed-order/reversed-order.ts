// Create a method that decrypts reversed-order.txt

import * as fs from 'fs';
import { join } from 'path';

function decryptReversedOrder(reversed: string, fileName2: string) {
  try {
    let content = fs.readFileSync(reversed, 'utf-8');
    fs.writeFileSync(fileName2, content);
    let words: string[] = fs.readFileSync(fileName2, 'utf-8').split(' ');
    let reverseString = words.reverse();
    let joinString = reverseString.join(' ');
    fs.writeFileSync(fileName2, joinString);
  } catch (e: any) {
    console.log(e.message);
  }
}
decryptReversedOrder(
  '/Users/martin/Desktop/GreenFox/Week_08/day03/exercices/reversed-order/reversed-order.txt',
  'decrypt.txt',
);
