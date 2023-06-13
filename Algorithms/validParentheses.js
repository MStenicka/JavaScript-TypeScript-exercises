function validParentheses(parens) {
  // your code here ..
  const left = '(';
  const right = ')';
  let count = 0;
  for (let paren of parens) {
    if (paren == left) {
      count++;
    }
    if (paren == right) {
      count--;
    }
    if (count < 0) {
      return false;
    }
  }
  if (count == 0) {
    return true;
  } else {
    return false;
  }
}

validParentheses('');
validParentheses('()');
validParentheses('())');
