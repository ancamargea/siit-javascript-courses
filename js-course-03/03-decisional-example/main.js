/*
The user provides a number.
The program displays a message telling if the provided number is positive, negative or neutral.
0 is considered positive.
*/

console.log("The IF Statement - example positive, negative or neutral");

let userNumber = prompt("Input a number: ");
userNumber = Number(userNumber);

if (userNumber >= 0) {
  if (userNumber == 0) {
    alert("The number is neutral.");
  } else {
    alert("The number is positive.");
  }
} else {
  alert("The number is negative.");
}
