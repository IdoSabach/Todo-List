export const todoList = {
  project: [
    {
      name: "Inbox",
      tasks: [],
    },
    {
      name: "thisDay",
      tasks: [],
    },
    {
      name: "thisWeek",
      tasks: [],
    },
  ],
};

function addNewProject(name) {
  todoList.project.push({
    name: name,
    tasks: [],
  });
  saveTodoListToLocalStorage();
}

function addNewTask(nameProject, text) {
  const project = todoList.project.find((p) => p.name === nameProject);
  if (project) {
    project.tasks.push({
      description: text,
      date: "01/01/2000",
    });
    saveTodoListToLocalStorage();
  } else {
    console.error("Project not found.");
  }
}

function deleteProject(name) {
  const projectIndex = todoList.project.findIndex((p) => p.name === name);
  if (projectIndex !== -1) {
    todoList.project.splice(projectIndex, 1);
    saveTodoListToLocalStorage();
  } else {
    console.error("Project not found.");
  }
}

function printAndSaveTasks(nameProject) {
  const project = getProjectByName(nameProject);
  if (project) {
    console.log(`Tasks for ${nameProject}:`);
    project.tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task.description} - ${task.date}`);
    });
  } else {
    console.error("Project not found.");
  }
}

function getProjectByName(name) {
  return todoList.project.find((p) => p.name === name);
}

function deleteTask(nameProject, taskText) {
  const project = getProjectByName(nameProject);
  if (project) {
    const taskIndex = project.tasks.findIndex((task) => task.description === taskText);
    if (taskIndex !== -1) {
      project.tasks.splice(taskIndex, 1);
      saveTodoListToLocalStorage();
    } else {
      console.error("Task not found in the specified project.");
    }
  } else {
    console.error("Project not found.");
  }
}

function saveTodoListToLocalStorage() {
  localStorage.setItem("myTodoList", JSON.stringify(todoList));
}

localStorage.setItem("myTodoList", JSON.stringify(todoList));

export { addNewProject, addNewTask, deleteProject, deleteTask, printAndSaveTasks};