/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/projectController/ProjectController.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data/ProjectData.json":
/*!***********************************!*\
  !*** ./src/data/ProjectData.json ***!
  \***********************************/
/*! exports provided: projects, default */
/***/ (function(module) {

eval("module.exports = {\"projects\":[{\"name\":\"pertrinum\",\"status\":\"100\",\"description\":\"PerTrinum incrementa sus clientes por medio de comunicados, promocionando e interactuando de manera efectiva con sus clientes. \",\"startDate\":\"12082016\",\"endDate\":\"12082018\",\"img\":\"http://www.sofka.com.co/wp-content/uploads/sofka-pretrinum-logo-ajax.png\"},{\"name\":\"hibot\",\"status\":\"100\",\"description\":\"HIBOT es el módulo que le faltaba a su Centro de Contactos para convertirlo en una herramienta aún más competitiva.\",\"startDate\":\"01152015\",\"endDate\":\"01152018\",\"img\":\"http://www.sofka.com.co/wp-content/uploads/hibot-1.png\"},{\"name\":\"frow\",\"status\":\"59\",\"description\":\"es una plataforma digital (app móvil + website) para la Industria Fashion y Retail en Colombia.\",\"startDate\":\"08052017\",\"endDate\":\"08152019\",\"img\":\"http://www.sofka.com.co/wp-content/uploads/frow-3.png\"}]};\n\n//# sourceURL=webpack:///./src/data/ProjectData.json?");

/***/ }),

/***/ "./src/model/ProjectClass.js":
/*!***********************************!*\
  !*** ./src/model/ProjectClass.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nclass project {\r\n  constructor() {\r\n  }\r\n  getName() {\r\n    return this.name;\r\n  }\r\n  setName(name) {\r\n    this.name = name;\r\n  }\r\n  getStatus() {\r\n    return this.status;\r\n  }\r\n  setStatus(status) {\r\n    this.status = status;\r\n  }\r\n  getDescription() {\r\n    return this.description;\r\n  }\r\n  setDescription(description) {\r\n    this.description = description;\r\n  }\r\n  getStartDate() {\r\n    return this.startDate;\r\n  }\r\n  setStartDate(startDate) {\r\n    this.startDate = startDate;\r\n  }\r\n  getEndDate() {\r\n    return this.endDate;\r\n  }\r\n  setEndDate(endDate) {\r\n    this.endDate = endDate;\r\n  }\r\n  getImg() {\r\n    return this.image;\r\n  }\r\n  setImg(image) {\r\n    this.image = image;\r\n  }\r\n}\r\n\r\nmodule.exports = project;\n\n//# sourceURL=webpack:///./src/model/ProjectClass.js?");

/***/ }),

/***/ "./src/model/ProjectFunctions.js":
/*!***************************************!*\
  !*** ./src/model/ProjectFunctions.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nfunction findByName(name, projectsArray) {\r\n  console.log(\"Finding by name...\")\r\n  try {\r\n    for (let index = 0; index < projectsArray.length; index++) {\r\n      if (name.toLowerCase() === projectsArray[index].name) {\r\n        console.log(projectsArray[index]);\r\n        console.log(\"Found!\");\r\n        return projectsArray[index];\r\n      } else {\r\n        alert(\"DEJE DE BUSCAR ESTUPIDECES!!!\")\r\n        console.log(\"Project not found!\")\r\n      }\r\n    }\r\n  } catch (error) {\r\n    console.log(\"Error: \" + error);\r\n  }\r\n};\r\n\r\nfunction update(id) { };\r\nfunction erase(id) { };\r\nfunction showAll() { };\r\n\r\nmodule.exports = { findByName, update, erase, showAll };\n\n//# sourceURL=webpack:///./src/model/ProjectFunctions.js?");

/***/ }),

/***/ "./src/projectController/ProjectController.js":
/*!****************************************************!*\
  !*** ./src/projectController/ProjectController.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_ProjectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/ProjectClass */ \"./src/model/ProjectClass.js\");\n/* harmony import */ var _model_ProjectClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_model_ProjectClass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../model/ProjectFunctions */ \"./src/model/ProjectFunctions.js\");\n/* harmony import */ var _model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n\r\nconst fileContents = __webpack_require__(/*! ../data/ProjectData.json */ \"./src/data/ProjectData.json\");\r\nlet projectCards = document.getElementById('projects')\r\nlet projectsArray = [];\r\nlet jsonArrayLength = fileContents.projects.length;\r\nlet projectObject;\r\n\r\ntry {\r\n  createProjectObjects();\r\n} catch (error) {\r\n  console.log(\"Error: \" + error);\r\n}\r\n\r\n(function searchByName() {\r\n  try {\r\n    document.getElementById('search-trigger').addEventListener('click', () => {\r\n      let searchingParameter = document.getElementById('searching-parameter');\r\n      let foundBy = Object(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_1__[\"findByName\"])(searchingParameter.value, projectsArray);\r\n      projectCards.innerText = \" \";\r\n      addDivCard(foundBy.image, foundBy.name, foundBy.description)\r\n    });\r\n\r\n  } catch (error) {\r\n    console.log(\"Error: \" + error);\r\n\r\n  }\r\n}());\r\n\r\nfunction printProjects() {\r\n  for (let index = 0; index < jsonArrayLength; index++) {\r\n    addDivCard(projectsArray[index].getImg(),\r\n      projectsArray[index].getName(),\r\n      projectsArray[index].getDescription());\r\n  }\r\n};\r\n\r\nfunction createProjectObjects() {\r\n  for (let index = 0; index < jsonArrayLength; index++) {\r\n    let object = fileContents.projects[index];\r\n    projectObject = new _model_ProjectClass__WEBPACK_IMPORTED_MODULE_0___default.a();\r\n    projectObject.setImg(object.img);\r\n    projectObject.setName(object.name);\r\n    projectObject.setDescription(object.description);\r\n    projectObject.setStatus(object.status);\r\n    projectObject.setStartDate(object.startDate);\r\n    projectObject.setEndDate(object.endDate);\r\n    projectsArray.push(projectObject);\r\n  }\r\n};\r\n\r\nfunction addDivCard(image, title, description) {\r\n  let div = document.createElement('div');\r\n\r\n  div.className = 'card';\r\n  div.style = 'width: 18rem';\r\n  div.innerHTML = \"<img src=\" + image + \" class='card-img-top'>\"\r\n    + \"<div class='card-body'>\"\r\n    + \"<h5 class='card-title'> \" + title + \" </h5> \"\r\n    + \"<p class='card-text'> \" + description + \" </p>\";\r\n\r\n  projectCards.appendChild(div);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/projectController/ProjectController.js?");

/***/ })

/******/ });