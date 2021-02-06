const orderSet = new Set(["Pizza", "Pasta", "Manchurian", "Pasta", "Pizza"]);
console.log(orderSet);
console.log(new Set("Shishiranjan"));

console.log(orderSet.size);

console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Noodles"));

orderSet.add("Noodles");
orderSet.delete("Pizza");
console.log(orderSet);

//We can not be able to retrieve values from a set as its all values are unique and the order of element
//doesnot matter.
// looping over the sets to print all the elemnts of the set. But always remember that sets always prints a
//Unique value.

for (const order of orderSet) {
  console.log(order);
}

//Example
//To print the unique elements from the array but using sets.

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const staffUnique = [new Set(staff)];

//To print all the unique elements in array.

const staffUnique = [...new Set(staff)];

console.log(staffUnique);

//To print the individual element of any string along with its size..

console.log(new Set("ShishiranjanThakur").size);
