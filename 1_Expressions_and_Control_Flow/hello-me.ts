'use strict';

// Modify this program to greet you instead of the World!
// function helloMe(): void {
//   console.log('Hello, World!');
// }

// helloMe();

function helloMe(name: string): void {
  console.log(`Hello, ${name}!`);
}

helloMe('Martin');

export { helloMe };
