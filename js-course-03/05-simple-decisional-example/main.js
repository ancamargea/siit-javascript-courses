/* 
Displays the absolute value of a number.
*/

console.log("The absolute value of a given number");

let userNumber = prompt("Input a number: ");
userNumber = Number(userNumber);

if (userNumber < 0) {
  userNumber = -userNumber;
}

alert(`The absolute value is ${userNumber}.`);
