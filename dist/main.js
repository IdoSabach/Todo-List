/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\n/* harmony import */ var _strong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strong */ \"./src/strong.js\");\n\r\n\r\nfunction loadHomePage() {\r\n  addTaskOnInbox();\r\n  addNewProjectToAside();\r\n  loadMainPage();\r\n}\r\n\r\nfunction addTaskOnInbox() {\r\n  const addTaskBtn = document.querySelector(\".add-task\");\r\n  const mainBoxOfPage = document.querySelector(\".main-page\");\r\n  addTaskBtn.addEventListener(\"click\", function () {\r\n    addTaskBtn.style.display = \"none\";\r\n    mainBoxOfPage.appendChild(boxOfCreateTasks(addTaskBtn, \"task\"));\r\n    addFatherWithChild(mainBoxOfPage, addTaskBtn);\r\n  });\r\n}\r\n\r\nfunction addNewProjectToAside() {\r\n  const addProjectBtn = document.querySelector(\".addBtn\");\r\n  const mainBoxOfProject = document.querySelector(\".mainProject\");\r\n  addProjectBtn.addEventListener(\"click\", function () {\r\n    addProjectBtn.style.display = \"none\";\r\n    mainBoxOfProject.appendChild(boxOfCreateTasks(addProjectBtn, \"project\"));\r\n    addFatherWithChild(mainBoxOfProject, addProjectBtn);\r\n  });\r\n}\r\n\r\n//the popup input box after click on add task\r\nfunction boxOfCreateTasks(displayBox, type) {\r\n  const mainBox = document.createElement(\"div\");\r\n  mainBox.classList.add(\"mainBoxOfCreateTask\");\r\n\r\n  const nameOfMainPage = document.querySelector(\".title-of-main\");\r\n  const nameCurrProject = nameOfMainPage.textContent\r\n\r\n  const inputText = document.createElement(\"input\");\r\n  inputText.classList.add(\"textOfAddTasks\");\r\n  inputText.type = \"text\";\r\n  inputText.placeholder = \"Enter description\";\r\n  mainBox.appendChild(inputText);\r\n\r\n  const mainForBtn = document.createElement(\"div\");\r\n  mainForBtn.classList.add(\"mainForBtn\");\r\n  mainBox.appendChild(mainForBtn);\r\n\r\n  const submitBtn = document.createElement(\"button\");\r\n  submitBtn.type = \"submit\";\r\n  submitBtn.classList.add(\"submitBtn\");\r\n  submitBtn.textContent = \"Submit\";\r\n  mainForBtn.appendChild(submitBtn);\r\n\r\n  submitBtn.addEventListener(\"click\", function () {\r\n    if (inputText.value === \"\") {\r\n      alert(\"Enter your text please\");\r\n    } else {\r\n      createLineOfTask(mainBox, inputText.value, type);\r\n      mainBox.removeChild(mainForBtn);\r\n      mainBox.removeChild(inputText);\r\n      displayBox.style.display = \"flex\";\r\n      if (type === \"task\") {\r\n        (0,_strong__WEBPACK_IMPORTED_MODULE_0__.addNewTask)(nameCurrProject, inputText.value);\r\n      } else {\r\n        (0,_strong__WEBPACK_IMPORTED_MODULE_0__.addNewProject)(inputText.value);\r\n      }\r\n    }\r\n  });\r\n\r\n  const cancelBtn = document.createElement(\"button\");\r\n  cancelBtn.type = \"submit\";\r\n  cancelBtn.classList.add(\"cancelBtn\");\r\n  cancelBtn.textContent = \"Cancel\";\r\n  mainForBtn.appendChild(cancelBtn);\r\n\r\n  cancelBtn.addEventListener(\"click\", function () {\r\n    mainBox.removeChild(mainForBtn);\r\n    mainBox.removeChild(inputText);\r\n    displayBox.style.display = \"flex\";\r\n  });\r\n\r\n  return mainBox;\r\n}\r\n\r\nfunction addFatherWithChild(father, child) {\r\n  father.appendChild(child);\r\n}\r\n\r\nfunction createLineOfTask(main, text, type) {\r\n  const nameOfMainPage = document.querySelector(\".title-of-main\");\r\n  const nameCurrProject = nameOfMainPage.textContent\r\n  if (type === \"task\") {\r\n    const taskLine = document.createElement(\"div\");\r\n    taskLine.classList.add(\"taskLine\");\r\n\r\n    const textTask = document.createElement(\"div\");\r\n    textTask.classList.add(\"textTask\");\r\n    textTask.textContent = text;\r\n    taskLine.appendChild(textTask);\r\n\r\n    const closeIconBtn = document.createElement(\"button\");\r\n    closeIconBtn.classList.add(\"closeIconBtn\");\r\n\r\n    const closeIcon = document.createElement(\"span\");\r\n    closeIcon.classList.add(\"material-symbols-outlined\");\r\n    closeIcon.innerHTML = \"close\";\r\n\r\n    closeIconBtn.appendChild(closeIcon);\r\n    textTask.appendChild(closeIconBtn);\r\n\r\n    closeIconBtn.addEventListener(\"click\", function () {\r\n      main.removeChild(taskLine);\r\n      (0,_strong__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(nameCurrProject,text)\r\n    });\r\n\r\n    main.appendChild(taskLine);\r\n  } else {\r\n    const mainPage = document.querySelector(\".main-page\");\r\n    const addTaskBtn = document.querySelector(\".add-task\");\r\n\r\n    const projectLine = document.createElement(\"div\");\r\n    projectLine.classList.add(\"boxBtn\");\r\n    projectLine.setAttribute(\"data-type\", text);\r\n\r\n    const nameOfProject = document.createElement(\"button\");\r\n    nameOfProject.classList.add(\"nameOfProject\");\r\n    nameOfProject.textContent = text;\r\n    projectLine.appendChild(nameOfProject);\r\n    \r\n    const nameProject = projectLine.dataset.type;\r\n\r\n    nameOfProject.addEventListener(\"click\", function () {\r\n      mainPage.appendChild(addTaskBtn);\r\n      const titleOfPage = document.querySelector(\".title-of-main\");\r\n      titleOfPage.textContent = nameProject;\r\n    });\r\n\r\n    const closeIconBtn = document.createElement(\"button\");\r\n    closeIconBtn.classList.add(\"closeIconBtn\");\r\n\r\n    const closeIcon = document.createElement(\"span\");\r\n    closeIcon.classList.add(\"material-symbols-outlined\");\r\n    closeIcon.innerHTML = \"close\";\r\n\r\n    closeIconBtn.appendChild(closeIcon);\r\n    projectLine.appendChild(closeIconBtn);\r\n\r\n    closeIconBtn.addEventListener(\"click\", function () {\r\n      main.removeChild(projectLine);\r\n      (0,_strong__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(nameProject)\r\n    });\r\n\r\n    main.appendChild(projectLine);\r\n  }\r\n}\r\n\r\nfunction loadMainPage() {\r\n  const projectBtn = document.querySelectorAll(\".boxBtn\");\r\n  const mainPage = document.querySelector(\".main-page\");\r\n  const titleOfPage = document.querySelector(\".title-of-main\");\r\n  const addTaskBtn = document.querySelector(\".add-task\");\r\n  projectBtn.forEach((button) => {\r\n    button.addEventListener(\"click\", function () {\r\n      const type = button.dataset.type;\r\n      mainPage.appendChild(addTaskBtn);\r\n      if (type === \"Today\" || type === \"This Week\") {\r\n        mainPage.removeChild(addTaskBtn);\r\n      }\r\n      titleOfPage.textContent = type;\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/strong.js":
/*!***********************!*\
  !*** ./src/strong.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewProject: () => (/* binding */ addNewProject),\n/* harmony export */   addNewTask: () => (/* binding */ addNewTask),\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   printAndSaveTasks: () => (/* binding */ printAndSaveTasks),\n/* harmony export */   todoList: () => (/* binding */ todoList)\n/* harmony export */ });\nconst todoList = {\r\n  project: [\r\n    {\r\n      name: \"Inbox\",\r\n      tasks: [],\r\n    },\r\n    {\r\n      name: \"thisDay\",\r\n      tasks: [],\r\n    },\r\n    {\r\n      name: \"thisWeek\",\r\n      tasks: [],\r\n    },\r\n  ],\r\n};\r\n\r\nfunction addNewProject(name) {\r\n  todoList.project.push({\r\n    name: name,\r\n    tasks: [],\r\n  });\r\n  saveTodoListToLocalStorage();\r\n}\r\n\r\nfunction addNewTask(nameProject, text) {\r\n  const project = todoList.project.find((p) => p.name === nameProject);\r\n  if (project) {\r\n    project.tasks.push({\r\n      description: text,\r\n      date: \"01/01/2000\",\r\n    });\r\n    saveTodoListToLocalStorage();\r\n  } else {\r\n    console.error(\"Project not found.\");\r\n  }\r\n}\r\n\r\nfunction deleteProject(name) {\r\n  const projectIndex = todoList.project.findIndex((p) => p.name === name);\r\n  if (projectIndex !== -1) {\r\n    todoList.project.splice(projectIndex, 1);\r\n    saveTodoListToLocalStorage();\r\n  } else {\r\n    console.error(\"Project not found.\");\r\n  }\r\n}\r\n\r\nfunction printAndSaveTasks(nameProject) {\r\n  const project = getProjectByName(nameProject);\r\n  if (project) {\r\n    console.log(`Tasks for ${nameProject}:`);\r\n    project.tasks.forEach((task, index) => {\r\n      console.log(`${index + 1}. ${task.description} - ${task.date}`);\r\n    });\r\n  } else {\r\n    console.error(\"Project not found.\");\r\n  }\r\n}\r\n\r\nfunction getProjectByName(name) {\r\n  return todoList.project.find((p) => p.name === name);\r\n}\r\n\r\nfunction deleteTask(nameProject, taskText) {\r\n  const project = getProjectByName(nameProject);\r\n  if (project) {\r\n    const taskIndex = project.tasks.findIndex((task) => task.description === taskText);\r\n    if (taskIndex !== -1) {\r\n      project.tasks.splice(taskIndex, 1);\r\n      saveTodoListToLocalStorage();\r\n    } else {\r\n      console.error(\"Task not found in the specified project.\");\r\n    }\r\n  } else {\r\n    console.error(\"Project not found.\");\r\n  }\r\n}\r\n\r\nfunction saveTodoListToLocalStorage() {\r\n  localStorage.setItem(\"myTodoList\", JSON.stringify(todoList));\r\n}\r\n\r\nlocalStorage.setItem(\"myTodoList\", JSON.stringify(todoList));\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/strong.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;