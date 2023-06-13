'use strict';

const bookstore = new Map([
  ['978-1-60309-452-8', 'A Letter to Jo'],
  ['978-1-60309-459-7', 'Lupus'],
  ['978-1-60309-444-3', 'Red Panda and Moon Bear'],
  ['978-1-60309-461-0', 'The Lab'],
]);

for (const [key, value] of bookstore) {
  console.log(`${value} (ISBN: ${key})`);
}

bookstore.delete('978-1-60309-444-3');
bookstore.forEach((value, key) => {
  if (value === 'The Lab') {
    bookstore.delete(key);
  }
});

bookstore.set('978-1-60309-450-4', 'They Called Us Enemy');
bookstore.set('978-1-60309-453-5', 'Why Did We Trust Him?');

console.log(bookstore.has('478-0-61159-424-8'));
console.log(bookstore.get('978-1-60309-453-5'));
console.log(bookstore);
