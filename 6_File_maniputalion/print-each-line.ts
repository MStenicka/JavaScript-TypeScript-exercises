// Write a program that opens a file called "my-file.txt" and prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// it should print the following error message: "Unable to read file: my-file.txt"

import * as fs from 'fs';
let fileContent: string = '';
let fileName: string = 'my-file.txt';

try {
  fileContent = fs.readFileSync(fileName, { encoding: 'utf-8' });
} catch (e: any) {
  console.log(`Unable to read file: ${fileName}`);
} finally {
  console.log('Finally');
}
console.log(fileContent);
