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

/***/ "./src/click.js":
/*!**********************!*\
  !*** ./src/click.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ onClick)\n/* harmony export */ });\nfunction onClick() {\r\n  const inboxBtn = document.querySelector(\".inbox\");\r\n  const toadyBtn = document.querySelector(\".today\");\r\n  const weekBtn = document.querySelector(\".this-week\");\r\n\r\n  const mainPage = document.querySelector(\".main-page\");\r\n  const titleOfMain = document.querySelector(\".title-of-main\");\r\n  const btnOnMain = document.querySelector(\".btnOnMain\");\r\n\r\n  inboxBtn.addEventListener(\"click\", function () {\r\n    btnOnMain.innerHTML = \"\";\r\n    btnOnMain.appendChild(createBtnAddToMain());\r\n    titleOfMain.textContent = \"Inbox\";\r\n  });\r\n\r\n  toadyBtn.addEventListener(\"click\", function () {\r\n    btnOnMain.innerHTML = \"\";\r\n    titleOfMain.textContent = \"Today\";\r\n  });\r\n\r\n  weekBtn.addEventListener(\"click\", function () {\r\n    btnOnMain.innerHTML = \"\";\r\n    titleOfMain.textContent = \"This week\";\r\n  });\r\n}\r\n\r\nfunction createBtnAddToMain() {\r\n  const spanElement = document.createElement(\"span\");\r\n  spanElement.classList.add(\"material-symbols-outlined\");\r\n  spanElement.textContent = \"add\";\r\n\r\n  const buttonElement = document.createElement(\"button\");\r\n  buttonElement.classList.add(\"add-task\");\r\n  buttonElement.textContent = \"Add Task\";\r\n\r\n  spanElement.appendChild(buttonElement);\r\n  return spanElement;\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/click.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _click__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./click */ \"./src/click.js\");\n\r\n\r\n\r\n(0,_click__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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