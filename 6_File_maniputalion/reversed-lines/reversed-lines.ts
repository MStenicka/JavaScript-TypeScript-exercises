// Create a method that decrypts reversed-lines.txt

import * as fs from 'fs';

function decryptReversed(reversed: string, fileName2: string) {
  try {
    let line: string[] = fs.readFileSync(reversed, 'utf-8').split('\n');
    console.log(line);
    for (let i = 0; i < line.length; i++) {
      let splitLine = line[i].split(''); //[n,o,h,t,y,P, ,f,o, ,n,e,Z, ,e,h,T], [s,r,e,t,e,P, ...]
      console.log('1: ' + splitLine); // show what the loop do
      let reverseLine = splitLine.reverse(); //[T,h,e, ,Z,e,n, ,o,f, ,P,y,t,h,o,n],[b,y, ,T,i, ...]
      console.log('2: ' + reverseLine);
      let joinString = reverseLine.join(''); //[The Zen of Python],[by Tim Peters], ...
      console.log('3: ' + joinString);
      if (i < line.length - 1) {
        fs.appendFileSync(fileName2, joinString + '\n');
      } else {
        fs.appendFileSync(fileName2, joinString);
      }
    }
  } catch (e: any) {
    console.log(e.message);
  }
}
decryptReversed('reversed-lines.txt', 'decrypt.txt');
