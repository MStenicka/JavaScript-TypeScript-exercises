// Strings again and again
// Given a string, write a recursive (no loops) method which returns a new string with all adjacent chars separated by an *. Please note that there should be no trailing * at the end of the returned string. For example, the string word should be changed to w*o*r*d.
// Function to insert * at desired position
let input: string[] = new Array();
function starSeparator(str: string, i: number = 0): string {
  if (i == str.length) {
    return input.join('*');
  }
  input.push(str[i]);
  return starSeparator(str, i + 1);
}
console.log(starSeparator('word'));
