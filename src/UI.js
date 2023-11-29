import Task from "./task";
import Project from "./project";
// import onClick from "./click";

export default function loadHomePage(){
  // onClick()
  console.log("ido")
  addTaskOnInbox()
}


function addTaskOnInbox(){
  const addTaskBtn = document.querySelector('.btnOnMain')
  const mainBoxOfPage = document.querySelector('.main-page')
  addTaskBtn.addEventListener('click',function(){
    mainBoxOfPage.removeChild(addTaskBtn)
    mainBoxOfPage.appendChild(boxOfCreateTasks())
    returnToAddTask(mainBoxOfPage,addTaskBtn)
  })
}

function boxOfCreateTasks(){
  const mainBox = document.createElement('div')
  mainBox.classList.add("mainBoxOfCreateTask")

  const inputText = document.createElement("input")
  inputText.classList.add("textOfAddTasks")
  inputText.type = "text"
  mainBox.appendChild(inputText)

  const mainForBtn = document.createElement('div')
  mainForBtn.classList.add("mainForBtn")
  mainBox.appendChild(mainForBtn)

  const submitBtn = document.createElement('button')
  submitBtn.type = "submit"
  submitBtn.classList.add("submitBtn")
  submitBtn.textContent = "Submit"
  mainForBtn.appendChild(submitBtn)

  const cancelBtn = document.createElement('button')
  cancelBtn.type = "submit"
  cancelBtn.classList.add("cancelBtn")
  cancelBtn.textContent = "Cancel"
  mainForBtn.appendChild(cancelBtn)

  return mainBox
}

function returnToAddTask(father,child){
  father.appendChild(child);
}
