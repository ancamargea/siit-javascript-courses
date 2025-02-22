console.log("Students presence v2 - the students are already defined");

let students = ["Andreea", "Ionut", "Eduard", "Anca", "Elena", "Ana", "Marius"];

let pick = true;
while (pick) {
  let randomIndex = Math.floor(Math.random() * students.length);
  alert(`The happy winner is ${students[randomIndex]}`);

  if (!confirm("Continue?")) {
    pick = false;
  }
}
