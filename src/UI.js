import Task from "./task";
import Project from "./project";
import { pubsub } from "./pubsub";
// import saveTasksToStorage from "./strong";
// import loadTasksFromStorage from "./strong"
// import removeFromStorage from "./strong"
// import onClick from "./click";

export default function loadHomePage() {
  loadTasksFromStorage(); 
  addTaskOnInbox();
}

function addTaskOnInbox() {
  const addTaskBtn = document.querySelector(".add-task");
  const mainBoxOfPage = document.querySelector(".main-page");
  addTaskBtn.addEventListener("click", function () {
    addTaskBtn.style.display = "none";
    mainBoxOfPage.appendChild(boxOfCreateTasks(addTaskBtn));
    returnToAddTask(mainBoxOfPage, addTaskBtn);
  });
}

function boxOfCreateTasks(displayBox) {
  const mainBox = document.createElement("div");
  mainBox.classList.add("mainBoxOfCreateTask");

  const inputText = document.createElement("input");
  inputText.classList.add("textOfAddTasks");
  inputText.type = "text";
  inputText.placeholder = "Enter the task description"
  mainBox.appendChild(inputText);

  const mainForBtn = document.createElement("div");
  mainForBtn.classList.add("mainForBtn");
  mainBox.appendChild(mainForBtn);

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.classList.add("submitBtn");
  submitBtn.textContent = "Submit";
  mainForBtn.appendChild(submitBtn);

  submitBtn.addEventListener("click", function () {
    if (inputText.value === "") {
      alert("Enter your text please");
    } else {
      createLineOfTask(mainBox, inputText.value);
      mainBox.removeChild(mainForBtn);
      mainBox.removeChild(inputText);
      displayBox.style.display = "flex";

      saveTasksToStorage();
    }
  });

  const cancelBtn = document.createElement("button");
  cancelBtn.type = "submit";
  cancelBtn.classList.add("cancelBtn");
  cancelBtn.textContent = "Cancel";
  mainForBtn.appendChild(cancelBtn);

  cancelBtn.addEventListener("click", function () {
    mainBox.removeChild(mainForBtn);
    mainBox.removeChild(inputText);
    displayBox.style.display = "flex";
  });

  return mainBox;
}

function returnToAddTask(father, child) {
  father.appendChild(child);
}

function createLineOfTask(main, text) {
  
  const taskLine = document.createElement("div");
  taskLine.classList.add("taskLine");

  const task = new Task(text)
  const textTask = document.createElement("div");
  textTask.classList.add("textTask");
  textTask.textContent = task.getDescription();
  taskLine.appendChild(textTask);

  const closeIconBtn = document.createElement("button");
  closeIconBtn.classList.add("closeIconBtn");

  const closeIcon = document.createElement("span");
  closeIcon.classList.add("material-symbols-outlined");
  closeIcon.innerHTML = "close";

  closeIconBtn.appendChild(closeIcon);
  textTask.appendChild(closeIconBtn);

  closeIconBtn.addEventListener("click", function () {
    main.removeChild(taskLine);

    removeFromStorage(text);
  });

  main.appendChild(taskLine);
}



function saveTasksToStorage() {
  const taskLines = document.querySelectorAll(".taskLine .textTask");
  const tasks = Array.from(taskLines).map((taskLine) => taskLine.textContent);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromStorage() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    const tasks = JSON.parse(storedTasks);
    tasks.forEach((task) => createLineOfTask(document.querySelector(".main-page"), task));
  }
}

function removeFromStorage(taskDescription) {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    const tasks = JSON.parse(storedTasks);
    const updatedTasks = tasks.filter((task) => task !== taskDescription);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }
}
