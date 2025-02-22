console.log("Alea iacta est..");

/*
let i = 0;
while (i < 5) {
  console.log(`I like programmming (${i})!`);
  i++; // i = i + 1
}

console.log(`And that's how much I like programming!`);
*/

// ..........

/* let i = 0;
while (i < 5) {
  let diceRoll = Math.floor(Math.random() * 6) + 1;
  console.log(`Dice ${i} roll: ${diceRoll}`);

  i++;
}
*/

for (let i = 0; i < 5; i++) {
  let diceRoll = Math.floor(Math.random() * 6) + 1;
  console.log(`Dice ${i + 1} roll: ${diceRoll}`);
}
