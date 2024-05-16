"use strict";

let menu = [
  [
    { item: "Sausage and Egg Biscuit", price: 3.69 },
    { item: "Bacon and Egg Biscuit", price: 3.49 },
    { item: "Ham and Egg Biscuit", price: 3.29 },
  ],
  [
    { item: "Pepperoni Pizza", price: 13.69 },
    { item: "Philly Cheesesteak", price: 14.49 },
    { item: "Cheeseburger in Paradise", price: 12.29 },
    { item: "Korean Fried  Chicken", price: 24.29 },
  ],

  [
    { item: "Orange Chicken", price: 10.69 },
    { item: "Chicken Alfredo", price: 12.49 },
    { item: "Chicken Pot Pie", price: 10.29 },
    { item: "Pasta of some kind", price: 12.29 },
    { item: "All you can eat salad bar", price: 10.29 },
  ],
];

let meal = 0;

switch (meal) {
  case 0:
    console.log("Breakfast Mene");
    console.log("---------------:");
    console.log(...menu[meal].map((item) => item.item + ",\n"));
    break;
  case 1:
    console.log("Lunch Mene");
    console.log("---------------:");
    console.log(...menu[meal].map((item) => item.item + ",\n"));
    break;
  case 2:
    console.log("Dinner Mene");
    console.log("---------------:");
    console.log(...menu[meal].map((item) => item.item + ",\n"));
  default:
    console.log("No Mene");
    break;
}
