export default function onClick() {
  const inboxBtn = document.querySelector(".inbox");
  const toadyBtn = document.querySelector(".today");
  const weekBtn = document.querySelector(".this-week");

  const mainPage = document.querySelector(".main-page");
  const titleOfMain = document.querySelector(".title-of-main");
  const btnOnMain = document.querySelector(".btnOnMain");

  inboxBtn.addEventListener("click", function () {
    btnOnMain.innerHTML = "";
    btnOnMain.appendChild(createBtnAddToMain());
    titleOfMain.textContent = "Inbox";
  });

  toadyBtn.addEventListener("click", function () {
    btnOnMain.innerHTML = "";
    titleOfMain.textContent = "Today";
  });

  weekBtn.addEventListener("click", function () {
    btnOnMain.innerHTML = "";
    titleOfMain.textContent = "This week";
  });
}

function createBtnAddToMain() {
  const spanElement = document.createElement("span");
  spanElement.classList.add("material-symbols-outlined");
  spanElement.textContent = "add";

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("add-task");
  buttonElement.textContent = "Add Task";

  spanElement.appendChild(buttonElement);
  return spanElement;
}
