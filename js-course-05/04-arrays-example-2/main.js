console.log("Students presence v2 - the students are already defined");

let students = ["Andreea", "Ionut", "Eduard", "Anca", "Elena", "Ana", "Marius"];

/**
 * Reading the status of the students
 */

let presence = [];
for (let i = 0; i < students.length; i++) {
  presence[i] = confirm(`Is student ${students[i]} present?`);
}

for (let i = 0; i < students.length; i++) {
  alert(`Student ${students[i]} is ${presence[i] ? "PRESENT" : "NOT PRESENT"}`);
}
