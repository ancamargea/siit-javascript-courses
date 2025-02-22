/*
The user provides a number.
The program displays a message telling if the provided number is positive or negative.
0 is considered positive.
*/

console.log("The IF Statement - example positive or negative");

let userNumber = prompt("Input a number: ");
userNumber = Number(userNumber);

if (userNumber >= 0) {
  alert("The number is positive.");
} else {
  alert("The number is negative.");
}
