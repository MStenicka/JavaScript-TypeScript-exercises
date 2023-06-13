// # Shopping list 2

// - Represent the following products with their prices:

//   | Product         | Price  |
//   | :-------------- | :----- |
//   | Milk            | 1.07   |
//   | Rice            | 1.59   |
//   | Eggs            | 3.14   |
//   | Cheese          | 12.60  |
//   | Chicken Breasts | 9.40   |
//   | Apples          | 2.31   |
//   | Tomato          | 2.58   |
//   | Potato          | 1.75   |
//   | Onion           | 1.10   |

// - Represent Bob's shopping list:

//   | Product         | Amount |
//   | --------------- | ------ |
//   | Milk            | 3      |
//   | Rice            | 2      |
//   | Eggs            | 2      |
//   | Cheese          | 1      |
//   | Chicken Breasts | 4      |
//   | Apples          | 1      |
//   | Tomato          | 2      |
//   | Potato          | 1      |

// - Represent Alice's shopping list:

//   | Product         | Amount |
//   | --------------- | ------ |
//   | Rice            | 1      |
//   | Eggs            | 5      |
//   | Chicken Breasts | 2      |
//   | Apples          | 1      |
//   | Tomato          | 10     |

// - Create an application which prints out the answers to the following
//   questions:
//   - How much does Bob pay?
//   - How much does Alice pay?
//   - Who buys more Rice?
//   - Who buys more Potato?
//   - Who buys more Ham?
//   - Who buys more Apples?
//   - Who buys more of different products?
//   - Who buys more items? (more pieces)

// The full output of your `main` method should be the following:
// 72.09
// 64.2
// Bob
// Bob
// no one
// no one
// Bob
// Alice

const productPrices = new Map([
  ['Milk', 1.07],
  ['Rice', 1.59],
  ['Eggs', 3.14],
  ['Cheese', 12.6],
  ['Chicken Breasts', 9.4],
  ['Apples', 2.31],
  ['Tomato', 2.58],
  ['Potato', 1.75],
  ['Onion', 1.1],
]);

const bobList = new Map([
  ['Milk', 3],
  ['Rice', 2],
  ['Eggs', 2],
  ['Cheese', 1],
  ['Chicken Breasts', 4],
  ['Apples', 1],
  ['Tomato', 2],
  ['Potato', 1],
]);

const aliceList = new Map([
  ['Rice', 1],
  ['Eggs', 5],
  ['Chicken Breasts', 2],
  ['Apples', 1],
  ['Tomato', 10],
]);

// total cost of a shopping list
function getTotalCost(shoppingList) {
  let totalCost = 0;
  for (const [product, amount] of shoppingList.entries()) {
    const price = productPrices.get(product) || 0;
    totalCost += price * amount;
  }
  return totalCost;
}

// How much does Bob pay?
console.log(getTotalCost(bobList).toFixed(2));

// How much does Alice pay?
console.log(getTotalCost(aliceList).toFixed(2));

// Who buys more Rice?
const bobRiceAmount = bobList.get('Rice') || 0;
const aliceRiceAmount = aliceList.get('Rice') || 0;
if (bobRiceAmount > aliceRiceAmount) {
  console.log('Bob');
} else if (aliceRiceAmount > bobRiceAmount) {
  console.log('Alice');
} else {
  console.log('no one');
}

// Who buys more Potato?
const bobPotatoAmount = bobList.get('Potato') || 0;
const alicePotatoAmount = aliceList.get('Potato') || 0;
if (bobPotatoAmount > alicePotatoAmount) {
  console.log('Bob');
} else if (alicePotatoAmount > bobPotatoAmount) {
  console.log('Alice');
} else {
  console.log('no one');
}

// Who buys more Ham?
const bobHamAmount = bobList.get('Ham') || 0;
const aliceHamAmount = aliceList.get('Ham') || 0;
if (bobHamAmount > aliceHamAmount) {
  console.log('Bob');
} else if (aliceHamAmount > bobHamAmount) {
  console.log('Alice');
} else {
  console.log('no one');
}

// Who buys more Apples?
const bobApplesAmount = bobList.get('Apples') || 0;
const aliceApplesAmount = aliceList.get('Apples') || 0;
if (bobApplesAmount > aliceApplesAmount) {
  console.log('Bob');
} else if (aliceApplesAmount > bobApplesAmount) {
  console.log('Alice');
} else {
  console.log('no one');
}

// Who buys more of different products?
const bobProductCount = bobList.size;
const aliceProductCount = aliceList.size;
if (bobProductCount > aliceProductCount) {
  console.log('Bob');
} else if (aliceProductCount > bobProductCount) {
  console.log('Alice');
} else {
  console.log('no one');
}

// Who buys more items? (more pieces)

function getTotalAmount(shoppingList) {
  let totalAmount = 0;
  for (const [product, amount] of shoppingList.entries()) {
    const price = productPrices.get(product) || 0;
    totalAmount += amount;
  }
  return totalAmount;
}

const bobTotalAmount = getTotalAmount(bobList);
const aliceTotalAmount = getTotalAmount(aliceList);
if (bobTotalAmount > aliceTotalAmount) {
  console.log('Bob');
} else if (aliceTotalAmount > bobTotalAmount) {
  console.log('Alice');
} else {
  console.log('no one');
}
