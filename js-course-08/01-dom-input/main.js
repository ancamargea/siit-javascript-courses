console.log("DOM loaded...");

let textBox = document.querySelector("#user-name");
let formBtn = document.querySelector("button");

// EVENIMENTUL DE CLICK
formBtn.addEventListener("click", handleClick);

function handleClick() {
  console.log("here");
  console.log(textBox.value);
  console.log("and here");
}

/*
function clickHandler() {
    console.log("here");
    console.log(textBox.value);
    console.log("and here");
}
*/

// EVENIMENTUL DE MOUSE OVER
formBtn.addEventListener("mouseover", function () {
  console.log("the mouse is over!");
  console.log(textBox.value);
  console.log("out");
});

// EVENIMENTUL DE A STERGE VALOARE DACA MAI DAI CLICK ODATA PE TEXTBOX
textBox.addEventListener("click", function () {
  textBox.value = "";
});

textBox.addEventListener("change", function () {
  console.log("The change event has been triggered.");
  console.log(textBox.value);
});
