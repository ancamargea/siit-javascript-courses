console.log("Students presence");

let students = [];
let presence = [];

/**
 * Reading values in an array
 */

let studentsNr = prompt("How many students are attending the course?");
studentsNr = Number(studentsNr);

for (let i = 0; i < studentsNr; i++) {
  students[i] = prompt(`Input the name of student ${i + 1}`);
  presence[i] = confirm(`Is student ${students[i]} present?`);
}

// for (let i = 0; i < students.length; i++) {
// let message = `Student ${students[i]} is `;
// if (presence[i]) {
// alert(`${message} PRESENT`)
// } else {
// alert(`${message} NOT PRESENT`)
// }

for (let i = 0; i < students.length; i++) {
  alert(`Student ${students[i]} is ${presence[i] ? "PRESENT" : "NOT PRESENT"}`);
}
