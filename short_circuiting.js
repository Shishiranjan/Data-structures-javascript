const restaurant = {
  name: "Cafe Mocha",
  location: "Pokhara, Kathmandu, Biratnagar, Nepalgunj",
  categories: ["Italian", "Chinese Cuisine", "Indian", "Organic"],
  starterMenu: ["Chicken Lollipop", "Salad", "Bread", "Manchurian"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    Sun: {
      open: 12,
      close: 22,
    },
    Mon: {
      open: 11,
      close: 23,
    },

    Tue: {
      open: 10,
      close: 20,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20.00",
    address,
  }) {
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
        will be delivered to ${address} at ${time}`);
  },

  //So lets add here another method now. And lets say we want a method to order just pasta. And the
  //pasta always needs to have exactly three ingredients.

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    //So now lets call this function.
    //Now what i want to do here is to actually get these ingredients from a prompt window.
  },
};

//Expamding an array using brute force approach.

const arr = [7, 8, 9];
const NewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(NewArr);

//Expanding an array using spread operator.
const OptimizedArr = [1, 2, ...arr];
//Here it prints the whole array.
console.log(OptimizedArr);
//but by using spread operator it actually prints all the individual elements of the new array.
console.log(...OptimizedArr);
//Whenever we need the elements of an array individually then only we use spread operator. Using the spread
//operator you can actually create a whole new array.

//There are two important use-cases of spread operator.
//1: To create the shallow copies of arrays.
//Here we actually copy the whole array of mainMenu into the newly created array called as mainmenuCopy.
const mainMenuCopy = [...restaurant.mainMenu];

//To merge the two arrays together.
const Menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(Menu);
// Spread operator doesnot only work for arrays but it also works for all iterables.
//Here iterables simply means all arrays, strings, maps, sets etc but not objects.
//Lets now understand spread operator along with strings. Our task here is to print the individual
//letters of this string.

const str = "Shishiranjan";
//With this line of code below we actually print all the separate elements of the array.
const letters = [...str, " ", "S."];
console.log(letters);

//Lets now actually write our own function that accepts multiple arguments and then use the spread operator to
//actually pass those arguments.
//Each element will be defined here by a prompt window. Prompt window has nothing to do with the spread
//operator.It is just a way so that we can actually input the data ourselves.
//Real world example.
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?)"),
  prompt("ingredient 2?"),
  prompt("Ingredient 3"),
];

console.log(ingredients);

//Now how should we actually call the order pasta function.
restaurant.orderPasta(...ingredients);

//In ES version of 2018 the spread operator also works on objects even though objects are not iterables.

//Here the first value is number and it is true so it then
//log the number to the console.
console.log(3 || "Shishiranjan");
//Here the first value is empty string and it is false so it looks after the second value and then
//log it to the console.

console.log(" " || "Shishiranjan");
console.log(true || 0);
console.log(undefined || null);

//Here the first three value is falsy so the first truthy value is the string hello so it logs hello
//to the console.

console.log(undefined || 0 || " " || "Hello" || 23 || null);

//Here the numguests is not defined in the restaurant object so it logs 10 to the console.

const guest1 = restaurant.numGuests || 10;
console.log(guest1);

//AND operator basically works in opposite way than that of OR operator.
//It can  do short circuiting  if the first value is falsy otherwise  the javascript dont even look at the second value.
//Here the value 0 is falsy so it logs 0 to the console.

console.log(0 && "Shishiranjan");
console.log(6 && "Shishiranjan");

console.log(undefined && 0 && " " && "Hello" && 23 && null);

//One most important use case of AND operator is it basically avoids the if condition of if statement.
//It means that if condition can be replaced with AND operator.
//For example if the orderPizza method exists in the restaurant object then it basically logs the
//ingredients for pizza otherwise it returns nothing.

restaurant.orderPizza && restaurant.orderPizza("mushroom", "capsicum");
//Nullish coalescing operator basically deals with null values.
