console.log("main.js is loaded");

let sum = 0;
let userInput;

while (true) {
  userInput = prompt(
    "Enter a number to add to the sum. \nPress cancel to display the sum."
  );

  if (userInput == null) {
    break;
  }

  let number = parseFloat(userInput);

  if (!isNaN(number)) {
    sum += number;
  }
}

alert("The total sum is: " + sum);
