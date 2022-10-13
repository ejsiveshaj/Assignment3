const ps = require("prompt-sync");
const prompt = ps();

// Getting user input and making sure he enters two valid numbers
let num1;

do {
  num1 = prompt("Please enter a valid first number: ", "no user input");
} while (isNaN(num1) || num1 === "no user input");

if(num1 % 2 === 0){
    console.log("The number you entered is even.");
}else{
    console.log("The number you entered is odd.");
}