// Create a method called decryptDoubled() that takes a filename as string as a parameter
// and it can decrypt the duplicated-chars.txt file
// Decryption is the process reversing an encryption, i.e. the process
// which converts encrypted data into its original form.
// If the file can't be opened it should return this message: File not found
// The result should be saved in the output.txt file
import * as fs from 'fs';
import { runInContext } from 'vm';

function decryptLine(encrypted: string) {
  let decrypted: string = '';
  for (let i = 0; i < encrypted.length; i += 2) {
    decrypted += encrypted.slice(i, i + 1);
  }
  return decrypted;
}

function decryptDoubled(duplicatedChars: string, fileName2: string) {
  let contentToDecrypted: string[] = [];
  try {
    contentToDecrypted = fs.readFileSync(duplicatedChars, 'utf-8').split('\n');
  } catch (e: any) {
    console.log('File not found');
  }
  let decryptedContent: string[] = [];
  contentToDecrypted.forEach((item, index, arr) => {
    decryptedContent.push(decryptLine(contentToDecrypted[index]));
    let finalContent: string = decryptedContent.join('\n');
    fs.writeFileSync(fileName2, finalContent);
  });
}
decryptDoubled('duplicated-chars.txt', 'output.txt');
