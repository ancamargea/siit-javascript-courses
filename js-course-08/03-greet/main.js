console.log("Greet the user!");

const nameTextBox = document.querySelector("#user-name");
const greetDisplay = document.querySelector("#greet-display");
const nameBtn = document.querySelector("#name-button");
const errorMsg = document.querySelector("#name-error");

nameBtn.addEventListener("click", function () {
  // CLEAR THE PREVIOUS GREET MESSAGE
  greetDisplay.textContent = "";

  // CLEAR THE GREET MESSAGE IF NO TEXT IS INPUTED
  if (nameTextBox.value.length == 0) {
    errorMsg.style.display = `block`;
    return;
  }

  // HIDE THE ERROR MESSAGE
  errorMsg.style.display = `none`;

  // DISPLAY THE GREET MESSAGE
  greetDisplay.textContent = `Hello, ${nameTextBox.value}!`;

  // CLEAR THE TEXTBOX VALUE
  nameTextBox.value = "";
});
