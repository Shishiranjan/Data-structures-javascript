//And  the third enhancement is that  we can actually now compute property names instead of
//having write them out manually. Here compute means simply to calculate.
//Let's create an array called as weekdays and then after that we referenced then index of that
//array to display the different days of the week.

const weekDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },

  [weekDays[5]]: {
    open: 10,
    close: 20,
  },
};

const restaurant = {
  name: "Cafe Mocha",
  location: "Pokhara, Kathmandu, Biratnagar, Nepalgunj",
  categories: ["Italian", "Chinese Cuisine", "Indian", "Organic"],
  starterMenu: ["Chicken Lollipop", "Salad", "Bread", "Manchurian"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,

  //The second enhancement about object literals is writing methods.
  //So in ES6 we no longer have to create a property and then set it to a function expression.
  //But now due to enhanced object literals we no longer need that.We can write it in easier way which is
  //to get rid of the function.
  //Here it is the old way of writing the methods.
  //order: function  (starterIndex, mainIndex) {
  //return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  //},

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
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

  //Old way of writing the methods.
  //orderPasta: function (ing1, ing2, ing3) {
  //console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    //So now lets call this function.
    //Now what i want to do here is to actually get these ingredients from a prompt window.
  },
};

//Now without further addo we gonna talk about optional chaining here.
//Optional chaining simply checks that if a certain property of any object exists then it will do
//something otherwise it will log undefined to the console.
//In traditional version of JS we see that if a certain property doesnot exist then it will show us
//an error. But in ES2020 it will prevent this bug.
//Optional chaining is simply denoted by question mark followed by dot symbol. And it is basically used
//along with nullish coalescing operator.

//Old way to check property withot optional chaining.

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// New way to check the property of an object with optional chaining.
//If the property mon exists inside the object opening hours then it will tell us the opening time
//of the restaurant otherwise it will log undefined to the console.
console.log(restaurant.openingHours.mon?.open);
//You can also be able to use multiple optional chaining in single time.
console.log(restaurant.openingHours?.mon?.open);

//Example:
//First of all here we create a new array.
const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

//And then we do looping to check the time of opening for a specific day.
for (const day of days) {
  //If under the object openingHours if any days fall then it will tell us the opening time otherwise
  //undefined is returned.
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}
//Optional chaining can also work on methods.
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");

console.log(restaurant.orderCuisine?.(0, 1) ?? "Method does not exist");

//Optionalchaining can also work on arrays.

const users = [{ name: "Jonas", email: "Shishiranjan.thakur@gmail.com" }];

console.log(users[0]?.name ?? "User array empty");
