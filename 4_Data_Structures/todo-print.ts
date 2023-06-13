'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText applying indention

// Expected output:

// My todos:
//  - Buy milk
//  - Download games
//      - Diablo

export function todoPrint() {
  let todoText = 'My todos:\n';
  todoText += ' - Buy milk\n';
  todoText += ' - Download games\n';
  todoText += '    - Diablo\n';

  console.log(todoText);
}

todoPrint();
