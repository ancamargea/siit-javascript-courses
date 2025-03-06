console.log("Creating DOM elements");

const display = document.querySelector("#display");
const btn = document.querySelector("#btn-1");

let newDiv;

const outputMsg = [
  `I have no idea what I'm doing`,
  `Why did I choose to do this?`,
  `I need my pills`,
  `I might be on to something...`,
  `I am a God!`,
];

let index = 0;

btn.addEventListener("click", function () {
  console.log(display);
  // display.textContent = "<div><p>I love DOM!</p></div>";
  // display.textContent = "I love DOM!";

  // ASA DA!
  // display.innerHTML = "<div>" + "I love DOM!" + "</div>";

  /* ASA NU!
  display.innerHTML = "<div>";
  display.innerHTML += "I love DOM!";
  display.innerHTML += "</div>";
  */

  display.innerHTML = "";

  const newDiv = document.createElement("div");
  newDiv.innerText = "I love DOM!";
  display.append(newDiv);

  if (newDiv === undefined) {
    newDiv = document.createElement("div");
    display.append(newDiv);
  }

  // DISPLAYS THE MESSAGE AND INCREMENT THE INDEX
  newDiv.innerText = `${index}. ${outputMsg[index]}`;

  // CAND AJUNGE LA SFARSIT, O IA DE LA CAPAT CU "I have no idea what I'm doing"
  index = (index + 1) % outputMsg.length;
});
