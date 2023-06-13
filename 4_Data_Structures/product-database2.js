// # Product database 2

// We are going to represent our products in a map where the keys are strings
// representing the product's name and the values are numbers representing the
// product's price.

// - Create a map with the following key-value pairs:

//   | Product name (key) | Price (value) |
//   | :----------------- | :------------ |
//   | Eggs               | 200           |
//   | Milk               | 200           |
//   | Fish               | 400           |
//   | Apples             | 150           |
//   | Bread              | 50            |
//   | Chicken            | 550           |

// - Create an application which prints out the answers to the following
//   questions:
//   - Which products cost less than 201? (just the name)
//   - Which products cost more than 150? (name + price)

// The full output of your `main` method should be the following:
// Apples
// Eggs
// Milk
// Bread
// Fish 400
// Chicken 550
// Eggs 200
// Milk 200

let productList = new Map([
  ['Eggs', 200],
  ['Milk', 200],
  ['Fish', 400],
  ['Apples', 150],
  ['Bread', 50],
  ['Chicken', 550],
]);

function productsCostLessThan(price) {
  const result = [];
  for (const [name, productPrice] of productList) {
    if (productPrice < price) {
      result.push(name);
    }
  }
  return result.join('\n');
}
function productsCostMoreThan(price) {
  const result = [];
  for (const [name, productPrice] of productList) {
    if (productPrice > price) {
      result.push(`${name} ${productPrice}`);
    }
  }
  return result.join('\n');
}

console.log(productsCostLessThan(201));
console.log(productsCostMoreThan(150));
