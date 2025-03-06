console.log("To do list");

const taskInput = document.querySelector("#new-task");
const taskList = document.querySelector("#to-do-list");
const addTaskBtn = document.querySelector("#add-task");

addTaskBtn.addEventListener("click", function () {
  // CHECK IF NEW TASK HAS ANY CHARACTERS
  if (!taskInput.value.length) {
    alert("Specify a task name!");
    return;
  }

  // ADDS A NEW TASK
  const newLi = document.createElement("li");
  newLi.textContent = taskInput.value;
  taskList.append(newLi);

  // CREATE AN EVENT LISTENER ON THE RECENTLY ADDED ELEMENT
  newLi.addEventListener("click", function (event) {
    console.log("A click event has been triggered!");
    console.log(event.target);

    event.target.classList.toggle("done");
  });

  // CLEARS THE INPUT TEXTBOX
  taskInput.value = "";
});
