let cart = [
  { item: "Bread", price: 3.29, quantity: 2 },
  { item: "Milk", price: 4.09, quantity: 1 },
  { item: "T-Bone Steak", price: 12.99, quantity: 2 },
  { item: "Baking Potato", price: 1.89, quantity: 6 },
  { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
  { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
  { item: "Apples", price: 0.66, quantity: 6 },
];

const itemNames = cart.map((cartItem) => cartItem.item);
// sorted
itemNames.sort().forEach((cartItem) => {
  console.log("items in the cart=>>>", cartItem);
});
// reduce
const totalItems = cart.reduce(
  (acc, item) => (acc += item.quantity * item.price),
  0
);

console.log("your total===>", totalItems);
