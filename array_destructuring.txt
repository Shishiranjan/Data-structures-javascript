//ARRAY DESTRUCTURING:
//Array destructring is basically an ES6 feature which is basically a way of unpacking values from an array or an object into separate variables. So in other words //destructuring is to break the complex data structure down into a smaller data structure like a variable.

//So for arrays we use destructuring to retrieve the elements fro the array and then to store them into variables in a very easy way.
//So lets actually start with a very simple array. And now if we wanted to retrieve each one into its own variable without destructuring, we would do it like this.

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//But with destructuring we can actually declare all the three variables at the same time.
//So let me show you how.So const and then square brackets.
//Thats what destructuring is. Here x is the first element of the array, y is the second element and z is the third element.
//It actually looks like an array but it is not. This square brackets is what we called destructuring.
//So when the javascript sees the sign of square bracket on the left side of equality operator then it should know that i have to do destructuring.
//Now when you do this, dont actually forget to also declare the variables using const.

const [x,y,z] = arr;
console.log(x, y, z);
//With destructuring we cannot destroy the original array. It remains the same.
 
console.log(arr);

//Now lets just work with the data of restaurant.

const restaurant = {
name: 'Cafe Mocha',
location: 'Pokhara, Kathmandu, Biratnagar, Nepalgunj',
categories: ['Italian', 'Chinese Cuisine', 'Indian', 'Organic'],
starterMenu: ['Chicken Lollipop', 'Salad', 'Bread', 'Manchurian']'
mainMenu:['Pizza', 'Pasta', 'Risotto'],

//So here in our restaurant lets add an method called order and this is function that accepts two parameters.

order: function(startIndex, mainIndex) {

return [this.startMenu[startIndex], this.mainmenu[mainindex];
};

//Now here i have to extract out the two first items from categories array present inside the restaurant object.

const[first, second] = restaurant.categories;
console.log(first, second);

//Again suppose i have to extract first and third elements then i have leave one hole in it lime this.

const[first, , second] = restaurant.categories;
console.log(first, second);
//Right now the first category is italian and the third one is indian but what about making the indian as first one and italian as third one.
//Without destructuring we can do it like this.

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Create a temporary variable and store main to it.
const temp = main;
//Now switch between these two elements.
main = secondary;
//finally assign the secondary to the temp
secondary = temp;
console.log(main, secondary);

//But with destructuring we can do it like this.
 //With destructuring we can actually start by creating a new array with the two variables inverted.

[main, secondary] = [secondary,main];
console.log(main, secondary);

const[starter, MainCourse] = restaurant.order(2, 0));
console.log(starter, MainMenu);

//And another trick with destructuring is that we can have a function which return an array and then we can immediately destruct the result into different variables.
//And so this basically allows us to return multiple values  from a function.
//So lets try that and write a function to order food.

//How to perform destructuring when we have nested array i.e. an array inside an array.

const nested = [2,4,[5,6]];
const [i, , j] = nested;
console.log(i, j);

//But what if we wnat to take all the values. Then we have to do destructuring inside destructuring.
const[i, [j,k] = nested;
console.log(i,j,k);

