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

//Let's now talk about the new way of looping over the arrays.
//And that is the for-of loop.
//And let's say we wanted to loop over our entire menu here which includes both the starterMenu and mainMenu.
//Here we basically at first merge both the arrays which is starterMenu and mainMenu into a new array
//called as menu.

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//After merging both the arrays into menu we create one variable called item inside the for loop.
//Here the item indicates all the individual element of both the arrays.
//Then we select all the item of both the arrays at once by writing const item of menu.
for (const item of menu) console.log(item);
//But if we want the index along with the element of both the arrays then we can also do that.
//But for that we have to use entries methodlike this.

for (const item of menu.entries()) {
  console.log(item);
}

console.log([...menu.entries()]);
