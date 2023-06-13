function shiftedDiff(first, second) {
  // ...
  let n = 0;
  if (first !== second) {
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        first =
          first.substring(first.length - 1, first.length) +
          first.substring(0, first.length - 1);
        //console.log(first);
        n++;
      }
    }
    if (first === second) {
      console.log(n);
    } else {
      n = -1;
      console.log(n);
    }
  } else {
    n = 0;
    console.log(n);
  }
}

shiftedDiff('coffee', 'eecoff');
shiftedDiff('eecoff', 'coffee');
shiftedDiff('moose', 'Moose');
shiftedDiff("isn't", "'tisn");
shiftedDiff('Esham', 'Esham');
shiftedDiff('dog', 'god');
