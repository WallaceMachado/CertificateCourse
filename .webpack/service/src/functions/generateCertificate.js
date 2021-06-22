/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/generateCertificate.ts":
/*!**********************************************!*\
  !*** ./src/functions/generateCertificate.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chrome-aws-lambda */ \"chrome-aws-lambda\");\n/* harmony import */ var chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! handlebars */ \"handlebars\");\n/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(handlebars__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ \"dayjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/dynamodbClient */ \"./src/utils/dynamodbClient.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst compile = async function (data) {\r\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"src\", \"template\", \"certificate.hbs\");\r\n    const html = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, \"utf-8\");\r\n    return handlebars__WEBPACK_IMPORTED_MODULE_3___default().compile(html)(data);\r\n};\r\nconst handle = async (event) => {\r\n    const { id, name, grade } = JSON.parse(event.body);\r\n    await _utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_5__.document.put({\r\n        TableName: \"users_certificates\",\r\n        Item: {\r\n            id,\r\n            name,\r\n            grade,\r\n        }\r\n    }).promise();\r\n    const medalPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"src\", \"template\", \"selo.png\");\r\n    const medal = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(medalPath, \"base64\");\r\n    const data = {\r\n        date: dayjs__WEBPACK_IMPORTED_MODULE_4___default()().format(\"DD/MM/YYY\"),\r\n        grade,\r\n        name,\r\n        id,\r\n        medal,\r\n    };\r\n    const content = await compile(data);\r\n    const browser = await chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default().puppeteer.launch({\r\n        headless: true,\r\n        args: (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default().args),\r\n        defaultViewport: (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default().defaultViewport),\r\n        executablePath: await (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default().executablePath)\r\n    });\r\n    const page = await browser.newPage();\r\n    await page.setContent(content);\r\n    const pdf = await page.pdf({\r\n        format: \"a4\",\r\n        landscape: true,\r\n        path: process.env.IS_OFFLINE ? \"certificate.pdf\" : null,\r\n        printBackground: true,\r\n        preferCSSPageSize: true,\r\n    });\r\n    await browser.close();\r\n    return {\r\n        statusCode: 201,\r\n        body: JSON.stringify({\r\n            message: \"Certificate Created!\",\r\n        }),\r\n        headers: {\r\n            \"Content-type\": \"application/json\"\r\n        },\r\n    };\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2dlbmVyYXRlQ2VydGlmaWNhdGUudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZXJ0aWZpY2F0ZWNvdXJzZS8uL3NyYy9mdW5jdGlvbnMvZ2VuZXJhdGVDZXJ0aWZpY2F0ZS50cz9hNWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaHJvbWl1bSBmcm9tIFwiY2hyb21lLWF3cy1sYW1iZGFcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgaGFuZGxlYmFycyBmcm9tIFwiaGFuZGxlYmFyc1wiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IFMzfSBmcm9tIFwiYXdzLXNka1wiO1xyXG5pbXBvcnQgeyBkb2N1bWVudCB9IGZyb20gXCIuLi91dGlscy9keW5hbW9kYkNsaWVudFwiO1xyXG5cclxuaW50ZXJmYWNlIElDcmVhdGVDZXJ0aWZpY2F0ZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZ3JhZGU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIElUZW1wbGF0ZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZ3JhZGU6IHN0cmluZztcclxuICBkYXRlOiBzdHJpbmc7XHJcbiAgbWVkYWw6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgY29tcGlsZSA9IGFzeW5jIGZ1bmN0aW9uIChkYXRhOiBJVGVtcGxhdGUpIHtcclxuICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcInNyY1wiLCBcInRlbXBsYXRlXCIsIFwiY2VydGlmaWNhdGUuaGJzXCIpO1xyXG5cclxuICBjb25zdCBodG1sID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCBcInV0Zi04XCIpO1xyXG5cclxuICByZXR1cm4gaGFuZGxlYmFycy5jb21waWxlKGh0bWwpKGRhdGEpO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGUgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuXHJcbiAgY29uc3QgeyBpZCwgbmFtZSwgZ3JhZGUgfSA9IEpTT04ucGFyc2UoZXZlbnQuYm9keSkgYXMgSUNyZWF0ZUNlcnRpZmljYXRlO1xyXG5cclxuICBhd2FpdCBkb2N1bWVudC5wdXQoe1xyXG4gICAgVGFibGVOYW1lOiBcInVzZXJzX2NlcnRpZmljYXRlc1wiLFxyXG4gICAgSXRlbToge1xyXG4gICAgICBpZCxcclxuICAgICAgbmFtZSxcclxuICAgICAgZ3JhZGUsXHJcbiAgICB9XHJcbiAgfSkucHJvbWlzZSgpO1xyXG5cclxuICBjb25zdCBtZWRhbFBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJzcmNcIiwgXCJ0ZW1wbGF0ZVwiLCBcInNlbG8ucG5nXCIpO1xyXG5cclxuICBjb25zdCBtZWRhbCA9IGZzLnJlYWRGaWxlU3luYyhtZWRhbFBhdGgsIFwiYmFzZTY0XCIpO1xyXG5cclxuICBjb25zdCBkYXRhOiBJVGVtcGxhdGUgPSB7XHJcbiAgICBkYXRlOiBkYXlqcygpLmZvcm1hdChcIkREL01NL1lZWVwiKSxcclxuICAgIGdyYWRlLFxyXG4gICAgbmFtZSxcclxuICAgIGlkLFxyXG4gICAgbWVkYWwsXHJcbiAgfVxyXG5cclxuICAvL2dlcmFyIGNlcnRpZmljYXRlXHJcblxyXG4gIC8vY29tcGlsYXIgdXNhbmRvIGhhbmRsZWJhcnNcclxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgY29tcGlsZShkYXRhKTtcclxuXHJcbiAgLy90cmFuc2Zvcm1hciBlbSBQREZcclxuXHJcbiAgY29uc3QgYnJvd3NlciA9IGF3YWl0IGNocm9taXVtLnB1cHBldGVlci5sYXVuY2goe1xyXG4gICAgaGVhZGxlc3M6IHRydWUsXHJcbiAgICBhcmdzOiBjaHJvbWl1bS5hcmdzLFxyXG4gICAgZGVmYXVsdFZpZXdwb3J0OiBjaHJvbWl1bS5kZWZhdWx0Vmlld3BvcnQsXHJcbiAgICBleGVjdXRhYmxlUGF0aDogYXdhaXQgY2hyb21pdW0uZXhlY3V0YWJsZVBhdGhcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcGFnZSA9IGF3YWl0IGJyb3dzZXIubmV3UGFnZSgpO1xyXG5cclxuICBhd2FpdCBwYWdlLnNldENvbnRlbnQoY29udGVudCk7XHJcblxyXG4gIGNvbnN0IHBkZiA9IGF3YWl0IHBhZ2UucGRmKHtcclxuICAgIGZvcm1hdDogXCJhNFwiLFxyXG4gICAgbGFuZHNjYXBlOiB0cnVlLFxyXG4gICAgcGF0aDogcHJvY2Vzcy5lbnYuSVNfT0ZGTElORSA/IFwiY2VydGlmaWNhdGUucGRmXCIgOiBudWxsLFxyXG4gICAgcHJpbnRCYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgcHJlZmVyQ1NTUGFnZVNpemU6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIGF3YWl0IGJyb3dzZXIuY2xvc2UoKTtcclxuXHJcblxyXG4gIC8vIHNhbHZhciBubyBzM1xyXG5cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXR1c0NvZGU6IDIwMSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgbWVzc2FnZTogXCJDZXJ0aWZpY2F0ZSBDcmVhdGVkIVwiLFxyXG4gICAgfSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICB9LFxyXG4gIH07XHJcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFnQkE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/generateCertificate.ts\n");

/***/ }),

/***/ "./src/utils/dynamodbClient.ts":
/*!*************************************!*\
  !*** ./src/utils/dynamodbClient.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"document\": () => (/* binding */ document)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst options = {\r\n    region: \"localhost\",\r\n    endpoint: \"http://localhost:8000\",\r\n};\r\nconst isOffline = () => {\r\n    return process.env.IS_OFFLINE;\r\n};\r\nconst document = isOffline() ?\r\n    new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient(options) :\r\n    new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZHluYW1vZGJDbGllbnQudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZXJ0aWZpY2F0ZWNvdXJzZS8uL3NyYy91dGlscy9keW5hbW9kYkNsaWVudC50cz80NTEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtb0RCIH0gZnJvbSBcImF3cy1zZGtcIjtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgcmVnaW9uOiBcImxvY2FsaG9zdFwiLFxyXG4gIGVuZHBvaW50OiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMFwiLFxyXG59O1xyXG5cclxuY29uc3QgaXNPZmZsaW5lID0gKCkgPT4ge1xyXG4gIHJldHVybiBwcm9jZXNzLmVudi5JU19PRkZMSU5FO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRvY3VtZW50ID0gaXNPZmZsaW5lKCkgPyBcclxubmV3IER5bmFtb0RCLkRvY3VtZW50Q2xpZW50KG9wdGlvbnMpIDogXHJcbm5ldyBEeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/dynamodbClient.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");;

/***/ }),

/***/ "chrome-aws-lambda":
/*!************************************!*\
  !*** external "chrome-aws-lambda" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("chrome-aws-lambda");;

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

module.exports = require("dayjs");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ "handlebars":
/*!*****************************!*\
  !*** external "handlebars" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("handlebars");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/generateCertificate.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;