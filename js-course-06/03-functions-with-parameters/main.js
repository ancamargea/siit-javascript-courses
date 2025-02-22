console.log("Functions with params");

// FUNCTION DECLARATION

/*
function demo(param1, param2) {
  console.log(param1);
  console.log(param2);
}

demo("p1", 89);
demo("p1-bis", 101);
*/

/// .......

/*
function greet(name, wish) {
  console.log(`Hello ${name}`);
  console.log(`Wishing you ${wish}!`);
}

greet("Uncle Pecos", "health");
greet("Liviu", "lots of money");
*/

function readNumber(promptMessage) {
  let nr = prompt(promptMessage);
  nr = Number(nr);

  return nr;
}

let nr1 = readNumber("Input the first number: ");
let nr2 = readNumber("Input the second number: ");
