function noName(str, number) {
  var result = [];
  for (var i = 0; i < str.length - number + 1; i++) {
    result.push(str.slice(i, i + number));
  }
  return result;
}

console.log(noName('pizza', 3));
// ["piz", "izz", "zza"]
console.log(noName('passedExam', 5));
// ["passe","assed","ssedE","sedEx","edExa","dExam"]
