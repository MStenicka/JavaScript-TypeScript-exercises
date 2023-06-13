// Shopping list
// We are going to represent a shopping list by a list containing strings.

// Create a list with the following items:
// eggs, milk, fish, apples, bread and chicken
let shoppingList: string[] = [
  'eggs',
  'milk',
  'fish',
  'apples',
  'bread',
  'chicken',
];
// Create an application which prints out the answers to the following questions:
// Do we have milk in the shopping list? (yes/no)
// Do we have bananas in the shopping list? (yes/no)
// The full output of your main method should be the following:
// yes
// no

function isItemOnList(shoppingListItem: string) {
  console.log(shoppingList.includes(shoppingListItem) ? 'yes' : 'no');
}
isItemOnList('milk');
isItemOnList('bananas');
