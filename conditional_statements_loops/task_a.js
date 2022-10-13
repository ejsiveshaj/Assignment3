const ps = require("prompt-sync");
const prompt = ps();

// Getting user input and making sure he enters two valid numbers
let num1, num2;

do {
  num1 = prompt("Please enter a valid first number: ", "no user input");
} while (isNaN(num1) || num1 === "no user input");

do {
  num2 = prompt("Please enter a valid second number:  ", "no user input");
} while (isNaN(num2) || num2 === "no user input");

if (num1 > num2) {
  console.log(`The largest one is ${num1}.`);
} else if (num1 < num2) {
  console.log(`The largest one is ${num2}.`);
} else {
  console.log("Numbers are equal");
}
