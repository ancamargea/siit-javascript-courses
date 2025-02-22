console.log("Arrays DEMO");

/**
 * Reading values in an array
 */

let studentsNr = prompt("How many students are attending the course?");
studentsNr = Number(studentsNr);

let students = [];
for (let i = 0; i < studentsNr; i++) {
  students[i] = prompt(`Input the name of student ${i + 1}`);
}

for (let i = 0; i < students.length; i++) {
  alert(students[i]);
}
