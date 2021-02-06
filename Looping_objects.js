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
    address = "Jaleshwar TownPlanning",
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

// We can also be able to loop over objects which are not iterable, but in an indirect way.
//Now we have different options depending on what exactly we want to loop over.
//Do we want to loop over the objects or property names or both together.
//And let's start by simply looping over property names.
//Now ultimately we will still have to use the for-of loop to loop over the array but again we're going to
//do it in indirect way.So we're not actually looping over the object itself.
//Instead we are going to loop over the array.

//Here keys actually denote the properties of an object which in this case is openingHours.
const properties = Object.keys(openingHours);
console.log(properties);

//console.log(`We are open on ${properties.length} days:`);
//OR

let openStr = `We are open on ${properties.length} days: `;
//Old way to loop over the properties of an object.
for (const day of Object.keys(openingHours)) {
  console.log(day);
}
//New way toloop over the properties of an object.
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);
//These all codes are to extract the property names.

//But we also can be able to extract the property values using looping.
const values = Object.values(openingHours);
console.log(values);

//To loop over an entire objectwe must have to use entry keyword.
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
