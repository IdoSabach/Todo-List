export const todoList = {
  project: [
    {
      name: "inbox",
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
  localStorage.setItem("myTodoList", JSON.stringify(todoList));
}

function addNewTask(nameProject, text) {
  const project = todoList.project.find((p) => p.name === nameProject);
  if (project) {
    project.tasks.push({
      description: text,
      date: "01/01/2000",
    });
    localStorage.setItem("myTodoList", JSON.stringify(todoList));
  } else {
    console.error("Project not found.");
  }
}

localStorage.setItem("myTodoList", JSON.stringify(todoList));
// const data = JSON.parse(localStorage.getItem("myTodoList"));

export { addNewProject, addNewTask };
