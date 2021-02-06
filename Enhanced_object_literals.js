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
