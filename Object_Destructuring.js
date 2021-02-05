//The objects can be destructured simply using the curly braces.
const restaurant = {
    name: 'Cafe Mocha',
    location: 'Pokhara, Kathmandu, Biratnagar, Nepalgunj',
    categories: ['Italian', 'Chinese Cuisine', 'Indian', 'Organic'],
    starterMenu: ['Chicken Lollipop', 'Salad', 'Bread', 'Manchurian'],
    mainMenu:['Pizza', 'Pasta', 'Risotto'],
    //Here we have the restaurant objects and inside that object we have another object called as
    //openingHours and under that objet also we have three objects called as Sun, Mon, and Tue hav
    //ing 2 properties which are open and close. This is the perfect example of nested object.

    openingHours:{
        Sun: {
            open:12,
            close:22,

        },
        Mon: {
            open:11,
            close:23,
        },

        Tue: {
            open: 10,
            close: 20,
        },
    },
     
        //Object destructuring but in a simple way.
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

//But if we want to change the name of the variable and then destructure it then we can also be able to
//do that.

const {
    name: restaurantname,
    openingHours: hours,
    categories: tags,
} = restaurant;

console.log(restaurantname, hours, tags);

//Default values

const {menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating Variables
let a  = 111;
let b = 999;
const obj = {a:23, b: 7, c: 14};
({a,b} = obj);
console.log(a,b);
    };

    
      