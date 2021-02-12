//Now we gonna work on different methods of the strings.

const Airplane = "Nepal Airlines";
//We have the method on strings to convert the whole string into either uppercase or lowercase.
console.log(Airplane.toLowerCase());
console.log(Airplane.toUpperCase());

//Now i have to fix the capitalization of my name. that means initially my name is written as ShIshiRAnjAn
//thAkUr. But i have to change this name to Shishiranjan Thakur.

const name = "shIshiRAnjAn";

const nameUpper = name.toLowerCase();
console.log(nameUpper);

const nameCorrect = nameUpper[0].toUpperCase && nameUpper.slice(1);
console.log(nameCorrect);

// Comparing emails
// In string we have a method called as trim which basically returns the original string from an altered
//string.

const oldEmail = "Shishiranjan.thakur@gmail.com";
const newEmail = "ShIshIRanJan.THakUr@gmail.com";

const optimizedEmail = newEmail.toLowerCase();
console.log(optimizedEmail);
const trimmedEmail = newEmail.trim();
console.log(trimmedEmail);

// We can even do all of this in a single line.

const normalizedEmail = newEmail.toLowerCase().trim();
console.log(normalizedEmail);

// We can also be able to replace one character with some another character in any string.
//But for that we just need to use replce keyword.
const priceNepal = "288,97R ";
const priceUS = priceNepal.replace("R", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All pasengers come to boarding door 51, Boarding door 51!";
const newAnnouncement = announcement.replace("door", "gate");
console.log(newAnnouncement);

// We can also be able to return boolean values from strings.

const plane = "Airbus A32neo";
console.log(plane.includes("A320"));
console.log(plane.startsWith("Air"));
console.log(plane.endsWith("neo"));

if (plane.startsWith("Air") && plane.endsWith("neo")) {
  console.log("Welcome aboard! You are part of our airbus family");
}

// We can also be able to do some operations on functions that involvess strings.

const checkbaggage = function (item) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed to take these");
  } else {
    console.log("Welcome to our flight! Enjoy your journey");
  }
};

checkbaggage("I have a laptop,some food and knife");
checkbaggage("Socks and Gopro");
checkbaggage("Got some snacks and gun for protection");

//In string we have another method called as split whose main work is to split the strings into the
//multiple parts based on a divider string and then put it into an array.

console.log("What+is+your+name").split("+");
console.log("Shishiranjan Thakur").split(" ");

const [firstName, lastName] = "Shishiranjan Thakur".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");

console.log(newName);

//What if we have to capitalize an entire string containing multiple words.
//So at first let's create a function for capitalizing the name.

const capitalizeName = function (name) {
  const names = name.split(" ");
  const nameArranged = [];

  for (const n of names) {
    nameArranged.push(n[0].toUpperCase() + n.slice(1));
    console.log(nameArranged.join());
  }
};

capitalizeName("randhir shah subash thakur");
capitalizeName("chris evans chris hemsworth");

//You can also be able to dopadding inside the string.
//With the help of padding we actually add any character in either front of the string or in the end of the
//string to basically increse the length of the string.

const Bhitamode = "Go at first take a ticket";
console.log(Bhitamode.padStart(20, "+").padEnd(30, "+"));
//Or you can alsobe able todefine the string inside the print statement directly.

console.log("Shishiranjan Thakur".padStart(20, "+").padEnd(30, "+"));

//There are numerous use-case of this padding.
// First one is the credit card number we always see only last four digits of our credit card number
// followed by star symbol from the beginning.
//Confidential information like passwords code generated for transaction.
//Digital address used in crypto currency.

//Now let'suse the first use-case of string padding which is our credit card number.

const creditCardMasked = function (number) {
  const str = number + "";
  const lastFourDigit = str.slice(-4);
  console.log(lastFourDigit.padStart(str.length, "*"));
};

creditCardMasked(20373806039);
creditCardMasked(1775041876325);
creditCardMasked(5471235497201);
creditCardMasked(417802198753);

//We can also be able to repeat any string multiple times.
//For ex: in railway station we already see that if any problem exists then same message is displyed many
//many times saying that inconvenience is deeply regreted.

const railwayMessage =
  "Bad weather, inconvenience occured to you is deeply regreted";
console.log(railwayMessage.repeat(8));
