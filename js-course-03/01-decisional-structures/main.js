console.log("The IF Statement");

let userName = prompt("Input your name: ");

alert(`Hello, ${userName}!`);

let choice = confirm("Do you like programming?");

if (choice) {
  // similar to choice == true
  alert("Yay! I'm glad for you.");
} else {
  alert("Well... I'm sorry for you!");
}

alert(`Let's do some programming!`);
