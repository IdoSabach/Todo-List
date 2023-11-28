export default class Task {
  constructor(description, date) {
    this.description = description;
    this.date = date;
  }

  getDescription(){
    return this.description
  }

  getDate(){
    return this.date
  }

  setDate(date){
    this.date = date
  }

  setDescription(description){
    this.description = description
  }
}


