import { addNewProject, addNewTask, deleteProject, deleteTask, printAndSaveTasks } from "./strong";

export default function loadHomePage() {
  addTaskOnInbox();
  addNewProjectToAside();
  loadMainPage();
}

function addTaskOnInbox() {
  const addTaskBtn = document.querySelector(".add-task");
  const mainBoxOfPage = document.querySelector(".main-page");
  addTaskBtn.addEventListener("click", function () {
    addTaskBtn.style.display = "none";
    mainBoxOfPage.appendChild(boxOfCreateTasks(addTaskBtn, "task"));
    addFatherWithChild(mainBoxOfPage, addTaskBtn);
  });
}

function addNewProjectToAside() {
  const addProjectBtn = document.querySelector(".addBtn");
  const mainBoxOfProject = document.querySelector(".mainProject");
  addProjectBtn.addEventListener("click", function () {
    addProjectBtn.style.display = "none";
    mainBoxOfProject.appendChild(boxOfCreateTasks(addProjectBtn, "project"));
    addFatherWithChild(mainBoxOfProject, addProjectBtn);
  });
}

//the popup input box after click on add task
function boxOfCreateTasks(displayBox, type) {
  const mainBox = document.createElement("div");
  mainBox.classList.add("mainBoxOfCreateTask");

  const nameOfMainPage = document.querySelector(".title-of-main");
  const nameCurrProject = nameOfMainPage.textContent

  const inputText = document.createElement("input");
  inputText.classList.add("textOfAddTasks");
  inputText.type = "text";
  inputText.placeholder = "Enter description";
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
      createLineOfTask(mainBox, inputText.value, type);
      mainBox.removeChild(mainForBtn);
      mainBox.removeChild(inputText);
      displayBox.style.display = "flex";
      if (type === "task") {
        addNewTask(nameCurrProject, inputText.value);
      } else {
        addNewProject(inputText.value);
      }
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

function addFatherWithChild(father, child) {
  father.appendChild(child);
}

function createLineOfTask(main, text, type) {
  const nameOfMainPage = document.querySelector(".title-of-main");
  const nameCurrProject = nameOfMainPage.textContent
  if (type === "task") {
    const taskLine = document.createElement("div");
    taskLine.classList.add("taskLine");

    const textTask = document.createElement("div");
    textTask.classList.add("textTask");
    textTask.textContent = text;
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
      deleteTask(nameCurrProject,text)
    });

    main.appendChild(taskLine);
  } else {
    const mainPage = document.querySelector(".main-page");
    const addTaskBtn = document.querySelector(".add-task");

    const projectLine = document.createElement("div");
    projectLine.classList.add("boxBtn");
    projectLine.setAttribute("data-type", text);

    const nameOfProject = document.createElement("button");
    nameOfProject.classList.add("nameOfProject");
    nameOfProject.textContent = text;
    projectLine.appendChild(nameOfProject);
    
    const nameProject = projectLine.dataset.type;

    nameOfProject.addEventListener("click", function () {
      mainPage.appendChild(addTaskBtn);
      const titleOfPage = document.querySelector(".title-of-main");
      titleOfPage.textContent = nameProject;
    });

    const closeIconBtn = document.createElement("button");
    closeIconBtn.classList.add("closeIconBtn");

    const closeIcon = document.createElement("span");
    closeIcon.classList.add("material-symbols-outlined");
    closeIcon.innerHTML = "close";

    closeIconBtn.appendChild(closeIcon);
    projectLine.appendChild(closeIconBtn);

    closeIconBtn.addEventListener("click", function () {
      main.removeChild(projectLine);
      deleteProject(nameProject)
    });

    main.appendChild(projectLine);
  }
}

function loadMainPage() {
  const projectBtn = document.querySelectorAll(".boxBtn");
  const mainPage = document.querySelector(".main-page");
  const titleOfPage = document.querySelector(".title-of-main");
  const addTaskBtn = document.querySelector(".add-task");
  projectBtn.forEach((button) => {
    button.addEventListener("click", function () {
      const type = button.dataset.type;
      mainPage.appendChild(addTaskBtn);
      if (type === "Today" || type === "This Week") {
        mainPage.removeChild(addTaskBtn);
      }
      titleOfPage.textContent = type;
    });
  });
}
