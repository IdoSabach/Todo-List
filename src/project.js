export default class Project{
  constructor(nameProject){
    this.nameProject = nameProject
  }

  getName(){
    return this.nameProject
  }

  setName(nameProject){
    this.nameProject = nameProject
  }
}