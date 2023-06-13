// Write a function that copies the contents of a file into another file
// It should take two filenames as parameters
// It should return a boolean that shows if the copy was successful

import * as fs from 'fs';

function copyContent(fileName1: string, fileName2: string) {
  try {
    let content = fs.copyFileSync(fileName1, fileName2);
  } catch (e: any) {
    console.log(e.message);
  }
}
copyContent('file1.txt', 'file2.txt');
