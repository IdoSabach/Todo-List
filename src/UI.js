import {
  addNewProject,
  addNewTask,
  deleteProject,
  deleteTask,
  todoList
} from "./strong";



export default function loadHomePage() {
  activeBtn();
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

// The popup input box after click on add task
function boxOfCreateTasks(displayBox, type) {
  const mainBox = document.createElement("div");
  mainBox.classList.add("mainBoxOfCreateTask");
  const mainOfTasksOnMainPage = document.querySelector(".boxProject");
  const mainOfTasksOnProject = document.querySelector(".mainProject");

  const nameOfMainPage = document.querySelector(".title-of-main");
  const nameCurrProject = nameOfMainPage.textContent;

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
      if(type==="task"){
        createLineOfTask(mainOfTasksOnMainPage, inputText.value, type);
        addNewTask(nameCurrProject, inputText.value);
      }else{
        createLineOfTask(mainOfTasksOnProject, inputText.value, type);
        addNewProject(inputText.value);
      }   
      mainBox.removeChild(mainForBtn);
      mainBox.removeChild(inputText);
      displayBox.style.display = "flex";
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
  const mainTask = document.querySelector(".boxProject");
  const nameCurrProject = nameOfMainPage.textContent;
  const addTaskBtn = document.querySelector(".add-task");
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
      deleteTask(nameCurrProject, text);
    });

    mainTask.appendChild(taskLine);
    console.log(main);
  } else {
    const mainPage = document.querySelector(".main-page");

    const projectLine = document.createElement("div");
    projectLine.classList.add("boxBtn");
    projectLine.setAttribute("data-type", text);

    const nameOfProject = document.createElement("button");
    nameOfProject.classList.add("nameOfProject");
    nameOfProject.textContent = text;
    projectLine.appendChild(nameOfProject);

    const nameProject = projectLine.dataset.type;

    nameOfProject.addEventListener("click", function () {
      const titleOfPage = document.querySelector(".title-of-main");
      titleOfPage.textContent = nameProject;
      mainPage.appendChild(addTaskBtn);
      loadProjectOnPage(titleOfPage.textContent);
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
      deleteProject(nameProject);
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
      loadProjectOnPage(titleOfPage.textContent);
    });
  });
}

function activeBtn() {
  const projectBtn = document.querySelectorAll(".boxBtn");

  projectBtn[0].classList.add("active");

  projectBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      projectBtn.forEach((btn) => btn.classList.remove("active"));

      btn.classList.add("active");
    });
  });
}

function loadProjectOnPage(text) {
  const boxProject = document.querySelector(".boxProject");

  boxProject.innerHTML = "";

  const storedData = localStorage.getItem("myTodoList");
  if (storedData) {
    const storedTodoList = JSON.parse(storedData);
    const project = storedTodoList.project.find((p) => p.name === text);
    console.log(project);
    if (project) {
      if (project.tasks.length > 0) {
        project.tasks.forEach((task) => {
          createLineOfTask(boxProject, task.description, "task")
          // const line = document.createElement("div");
          // line.classList.add("add-task");
          // line.textContent = task.description;
        
          // boxProject.appendChild(line);
          // console.log(` ${index + 1}. ${task.description} - ${task.date}`);
        });
      }
    } else {
      console.log(`Project not found: ${projectName}`);
    }
  } else {
    console.log("No data found in localStorage.");
  }
}
