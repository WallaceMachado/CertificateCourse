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

/***/ "./src/functions/verifyCertificate.ts":
/*!********************************************!*\
  !*** ./src/functions/verifyCertificate.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dynamodbClient */ \"./src/utils/dynamodbClient.ts\");\n\r\nconst handle = async (event) => {\r\n    const { id } = event.pathParameters;\r\n    const response = await _utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_0__.document.query({\r\n        TableName: \"users_certificates\",\r\n        KeyConditionExpression: \"id= :id\",\r\n        ExpressionAttributeValues: {\r\n            \":id\": id\r\n        }\r\n    }).promise();\r\n    const user_certificate = response.Items[0];\r\n    if (user_certificate) {\r\n        return {\r\n            statusCode: 200,\r\n            body: JSON.stringify({\r\n                message: \"Certificado válido\",\r\n                name: user_certificate.name,\r\n                url: `https://serverlesscertificatesignitewm.s3.sa-east-1.amazonaws.com/${id}.pdf`\r\n            })\r\n        };\r\n    }\r\n    return {\r\n        statusCode: 400,\r\n        body: JSON.stringify({\r\n            message: \"Certificado invalido\",\r\n        })\r\n    };\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3ZlcmlmeUNlcnRpZmljYXRlLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2VydGlmaWNhdGVjb3Vyc2UvLi9zcmMvZnVuY3Rpb25zL3ZlcmlmeUNlcnRpZmljYXRlLnRzPzZjMWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgIEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgfSBmcm9tIFwiYXdzLWxhbWJkYVwiO1xyXG5pbXBvcnQgeyBkb2N1bWVudCB9IGZyb20gXCIuLi91dGlscy9keW5hbW9kYkNsaWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZTogQVBJR2F0ZXdheVByb3h5SGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gIGNvbnN0IHsgaWQgfSA9IGV2ZW50LnBhdGhQYXJhbWV0ZXJzO1xyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRvY3VtZW50LnF1ZXJ5KHtcclxuICAgIFRhYmxlTmFtZTogXCJ1c2Vyc19jZXJ0aWZpY2F0ZXNcIixcclxuICAgIEtleUNvbmRpdGlvbkV4cHJlc3Npb246IFwiaWQ9IDppZFwiLFxyXG4gICAgRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlczoge1xyXG4gICAgICBcIjppZFwiOiBpZFxyXG4gICAgfVxyXG4gIH0pLnByb21pc2UoKTtcclxuXHJcbiAgY29uc3QgdXNlcl9jZXJ0aWZpY2F0ZSA9IHJlc3BvbnNlLkl0ZW1zWzBdO1xyXG5cclxuICBpZih1c2VyX2NlcnRpZmljYXRlKXtcclxuICAgIHJldHVybntcclxuICAgICAgc3RhdHVzQ29kZTogMjAwLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgbWVzc2FnZTogXCJDZXJ0aWZpY2FkbyB2w6FsaWRvXCIsXHJcbiAgICAgICAgbmFtZTogdXNlcl9jZXJ0aWZpY2F0ZS5uYW1lLFxyXG4gICAgICAgIHVybDogYGh0dHBzOi8vc2VydmVybGVzc2NlcnRpZmljYXRlc2lnbml0ZXdtLnMzLnNhLWVhc3QtMS5hbWF6b25hd3MuY29tLyR7aWR9LnBkZmBcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc3RhdHVzQ29kZTogNDAwLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgbWVzc2FnZTogXCJDZXJ0aWZpY2FkbyBpbnZhbGlkb1wiLFxyXG4gICAgICAgIFxyXG4gICAgICB9KVxyXG4gIH1cclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/functions/verifyCertificate.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/verifyCertificate.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;