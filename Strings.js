// Let's just learn a little bit more about strings.
//Just like arrays we would be able to find out the the index of any character present inside string.

const Airplane = "Nepal Airlines";
const Plane = "A435";

console.log(Airplane[3]);
console.log(Airplane[0]);
console.log(Airplane[1]);

console.log(Airplane.indexOf("A"));
//To find out the last index of any letter.
console.log(Airline.lastIndexOf("l"));
//OR we can also specify the index of any string inside the print statement directly.

console.log(Airline.indexOf("Airlines"));

//To find out the length of the string.

console.log(Plane.length);
console.log(Airplane.length);

//OR we can directly specify the length of the string inside console.log statement.

console.log("Pankaj".length);

//What slice method is that it basically extracts the part of the string based on beginning and end value.

console.log(Airplane.slice(4));
//Here it basically prints the part of the string starting from index 5 and ending in index 11 i.e before 12.

console.log(Airplane.slice(5, 12));

//Here it basically start printing the string from last side starting with index 2. That is what -2 means.

console.log(Airplane.slice(-2));
console.log(Airplane.slice(1, -1));

//We can also be able to write a function based on the strings.
//Here we write a function to check a middle seat based on some conditions.

const checkMiddleseat = function (seats) {
  //Here we check the string from last character. Here the string is those arguments specified by seat arguments.

  const s = seats.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got a middle set");
  } else {
    console.log("Better luck for next time");
  }
};

//Now just call the function.
checkMiddleseat("23C");
checkMiddleseat("32E");
checkMiddleseat("19B");
checkMiddleseat("29E");
