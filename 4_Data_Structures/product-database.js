// # Product database

// We are going to represent our products in a map where the keys are strings
// representing the product's name and the values are numbers representing the
// product's price.

// - Create a `products` map with the following key-value pairs:

//   | Product name (key) | Price (value) |
//   | :----------------- | :------------ |
//   | Eggs               | 200           |
//   | Milk               | 200           |
//   | Fish               | 400           |
//   | Apples             | 150           |
//   | Bread              | 50            |
//   | Chicken            | 550           |

// Create products map
const products = new Map([
  ['Eggs', 200],
  ['Milk', 200],
  ['Fish', 400],
  ['Apples', 150],
  ['Bread', 50],
  ['Chicken', 550],
]);

// How much is the fish?
console.log(products.get('Fish'));

// What is the most expensive product?
let maxPrice = 0;
let maxProduct = '';
for (const [product, price] of products.entries()) {
  if (price > maxPrice) {
    maxPrice = price;
    maxProduct = product;
  }
}
console.log(maxProduct);

// What is the average price?
let totalPrice = 0;
for (const price of products.values()) {
  totalPrice += price;
}
console.log((totalPrice / products.size).toFixed(5));

// How many products' price is below 300?
let count = 0;
for (const price of products.values()) {
  if (price < 300) {
    count++;
  }
}
console.log(count);

// Is there anything we can buy for exactly 125?
let canBuyProduct = false;
for (const [product, price] of products.entries()) {
  if (price === 125) {
    console.log(product);
    canBuyProduct = true;
    break;
  }
}
if (!canBuyProduct) {
  console.log('no');
}

// What is the cheapest product?
let minPrice = Infinity;
let minProduct = '';
for (const [product, price] of products.entries()) {
  if (price < minPrice) {
    minPrice = price;
    minProduct = product;
  }
}
console.log(minProduct);
