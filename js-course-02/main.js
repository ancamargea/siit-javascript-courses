// this message is just for testing that the .js file is loaded
// this instruction does not affect the logic of the program

//   prompt("Input a number");
//   alert(8);
console.log("main.js is loaded");
console.log("this is a message");
console.log("this is another message");
console.log("bye");

alert("Provide a number and I will disply the following number.");

// get the input data - the user number
let userNumber = prompt("Input your number.");
userNumber = Number(userNumber);

alert("The next number is: " + (userNumber + 1));

/* e mai poate scrie si pe scurt:
let userNumber = alert(Number(prompt('Input your number'))+1);
dar preferam sa facem etapa cu etapa ca sa gandim logic
*/
