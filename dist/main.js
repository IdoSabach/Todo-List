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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n\r\n\r\n\r\n// import onClick from \"./click\";\r\n\r\nfunction loadHomePage() {\r\n  // onClick()\r\n  console.log(\"ido\");\r\n  addTaskOnInbox();\r\n}\r\n\r\nfunction addTaskOnInbox() {\r\n  const addTaskBtn = document.querySelector(\".add-task\");\r\n  const mainBoxOfPage = document.querySelector(\".main-page\");\r\n  addTaskBtn.addEventListener(\"click\", function () {\r\n    addTaskBtn.style.display = \"none\";\r\n    mainBoxOfPage.appendChild(boxOfCreateTasks(addTaskBtn));\r\n    returnToAddTask(mainBoxOfPage, addTaskBtn);\r\n  });\r\n}\r\n\r\nfunction boxOfCreateTasks(displayBox) {\r\n  const mainBox = document.createElement(\"div\");\r\n  mainBox.classList.add(\"mainBoxOfCreateTask\");\r\n\r\n  const inputText = document.createElement(\"input\");\r\n  inputText.classList.add(\"textOfAddTasks\");\r\n  inputText.type = \"text\";\r\n  inputText.placeholder = \"Enter the task description\"\r\n  mainBox.appendChild(inputText);\r\n\r\n  const mainForBtn = document.createElement(\"div\");\r\n  mainForBtn.classList.add(\"mainForBtn\");\r\n  mainBox.appendChild(mainForBtn);\r\n\r\n  const submitBtn = document.createElement(\"button\");\r\n  submitBtn.type = \"submit\";\r\n  submitBtn.classList.add(\"submitBtn\");\r\n  submitBtn.textContent = \"Submit\";\r\n  mainForBtn.appendChild(submitBtn);\r\n\r\n  submitBtn.addEventListener(\"click\", function () {\r\n    if (inputText.value === \"\") {\r\n      alert(\"Enter your text please\");\r\n    } else {\r\n      createLineOfTask(mainBox, inputText.value);\r\n      mainBox.removeChild(mainForBtn);\r\n      mainBox.removeChild(inputText);\r\n      displayBox.style.display = \"flex\";\r\n    }\r\n  });\r\n\r\n  const cancelBtn = document.createElement(\"button\");\r\n  cancelBtn.type = \"submit\";\r\n  cancelBtn.classList.add(\"cancelBtn\");\r\n  cancelBtn.textContent = \"Cancel\";\r\n  mainForBtn.appendChild(cancelBtn);\r\n\r\n  cancelBtn.addEventListener(\"click\", function () {\r\n    mainBox.removeChild(mainForBtn);\r\n    mainBox.removeChild(inputText);\r\n    displayBox.style.display = \"flex\";\r\n  });\r\n\r\n  return mainBox;\r\n}\r\n\r\nfunction returnToAddTask(father, child) {\r\n  father.appendChild(child);\r\n}\r\n\r\nfunction createLineOfTask(main, text) {\r\n  \r\n  const taskLine = document.createElement(\"div\");\r\n  taskLine.classList.add(\"taskLine\");\r\n\r\n  // localStorage.setItem(\"myTask\",JSON.stringify(taskLine))\r\n  // const data = JSON.parse(localStorage.getItem(\"myTask\"))\r\n  // console.log(data)\r\n\r\n  const task = new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](text)\r\n  const textTask = document.createElement(\"div\");\r\n  textTask.classList.add(\"textTask\");\r\n  textTask.textContent = task.getDescription();\r\n  taskLine.appendChild(textTask);\r\n\r\n  const closeIconBtn = document.createElement(\"button\");\r\n  closeIconBtn.classList.add(\"closeIconBtn\");\r\n\r\n  const closeIcon = document.createElement(\"span\");\r\n  closeIcon.classList.add(\"material-symbols-outlined\");\r\n  closeIcon.textContent = \"close\";\r\n\r\n  closeIconBtn.appendChild(closeIcon);\r\n  textTask.appendChild(closeIconBtn);\r\n\r\n  closeIconBtn.addEventListener(\"click\", function () {\r\n    main.removeChild(taskLine);\r\n  });\r\n\r\n  main.appendChild(taskLine);\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded',_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project{\r\n  constructor(nameProject){\r\n    this.nameProject = nameProject\r\n    this.tasksArr = []\r\n  }\r\n\r\n  getName(){\r\n    return this.nameProject\r\n  }\r\n\r\n  getTasksArr(){\r\n    return this.tasksArr\r\n  }\r\n\r\n  setName(nameProject){\r\n    this.nameProject = nameProject\r\n  }\r\n\r\n  setTaskArr(tasksArr){\r\n    this.tasksArr = tasksArr\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pubsub: () => (/* binding */ pubsub)\n/* harmony export */ });\nconst pubsub = {\r\n  events: {},\r\n  subscribe(evName, fn) {\r\n    this.events[evName] = this.events[evName] || [];\r\n    this.events[evName].push(fn);\r\n  },\r\n  unsubscribe(evName, fn) {\r\n    if (this.events[evName]) {\r\n      this.events[evName] = this.events[evName].filter((f) => f !== fn);\r\n    }\r\n  },\r\n  publish(evName, data) {\r\n    if (this.events[evName]) {\r\n      this.events[evName].forEach((f) => {\r\n        f(data);\r\n      });\r\n    }\r\n  },\r\n};\n\n//# sourceURL=webpack://todo-list/./src/pubsub.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n  constructor(description, date = \"not\") {\r\n    this.description = description;\r\n    this.date = date;\r\n  }\r\n\r\n  getDescription(){\r\n    return this.description\r\n  }\r\n\r\n  getDate(){\r\n    return this.date\r\n  }\r\n\r\n  setDate(date){\r\n    this.date = date\r\n  }\r\n\r\n  setDescription(description){\r\n    this.description = description\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

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