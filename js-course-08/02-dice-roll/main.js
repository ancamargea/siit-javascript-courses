console.log("Dice roll, but better!");

const rollBtn = document.querySelector("#dice-roll-button");
rollBtn.addEventListener("click", function () {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  const displayElem = document.querySelector("#dice-display");
  displayElem.textContent = diceRoll;
});
