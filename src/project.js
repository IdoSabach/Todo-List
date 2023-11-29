export default class Project{
  constructor(nameProject){
    this.nameProject = nameProject
    this.tasksArr = []
  }

  getName(){
    return this.nameProject
  }

  getTasksArr(){
    return this.tasksArr
  }

  setName(nameProject){
    this.nameProject = nameProject
  }

  setTaskArr(tasksArr){
    this.tasksArr = tasksArr
  }
}