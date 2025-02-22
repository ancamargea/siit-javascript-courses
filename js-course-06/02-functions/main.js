console.log("Talk about functions in JS!");

// debugger;

// function declaration
/*function demoTest1() {
  console.log("function was called!");
  console.log("before exit...");
}

function demoTest2() {
  console.log("function was called!");
  console.log("before exit...");
}

demoTest2();
demoTest1();

console.log("main.js finished!");
*/

//...........

/* function readNumber() {
  let nr = prompt("Input a number: ");
  nr = Number(nr);

  return nr;
}

let nr1 = readNumber();
let nr2 = readNumber();
*/

function readNumber() {
  let nr;
  let invalidNumber = true;

  while (invalidNumber) {
    nr = prompt("Input a number");

    if (isNaN(nr)) {
      alert("Your input is invalid! Try again.");
    } else {
      invalidNumber = false;
      nr = Number(nr);
    }
  }
  return nr;
}

let nr1 = readNumber();
// let nr2 = readNumber();
// let nr3 = readNumber();
// let nr4 = readNumber();
// let nr5 = readNumber();
// ..... etc.

console.log("main.js finished!");
