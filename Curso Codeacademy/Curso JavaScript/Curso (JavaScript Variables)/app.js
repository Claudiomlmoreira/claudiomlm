// This line of code sets the variable location to the string New York City
const location = 'New York City';

// This line of code sets the variable latitude to the number 40.7
let latitude = 40.7;

// This line of code sets the variable inNorthernHemisphere to true
let inNorthernHemisphere = true;

console.log(location);
console.log(latitude);
console.log(inNorthernHemisphere);

const entree = 'Enchiladas';
const price = 12;
console.log(entree);
console.log(price);
entree = 'Tacos';

//In general, only use const if the value saved to a variable does not change in your program.
let changeMe = true;
changeMe = false;
console.log(changeMe);

//Undefined variables
let notDefined;
console.log(notDefined);
let valueless;
console.log(valueless);

//incrementos e outros
let molecule = 16;
let particle = 18;
let assay = 3;

// Add and assign to molecule below
molecule += 16;

// Multiply and assign to particle below
particle *= 6.02;

// Increment assay by 1
assay++;

let favoriteAnimal = "Duck";
console.log("My favorite animal: " + favoriteAnimal);

//Contatenação sem '+'s

let myName = "Culaudio";
let myCity = "New York";
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);