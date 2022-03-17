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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/signup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/signup.js":
/*!***********************!*\
  !*** ./src/signup.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar firebaseConfig = {\n  apiKey: \"AIzaSyALdtzO-3BsjNMOFjXLDIZfiK5RWWb7wK8\",\n  authDomain: \"dream-site-407d0.firebaseapp.com\",\n  projectId: \"dream-site-407d0\",\n  storageBucket: \"dream-site-407d0.appspot.com\",\n  messagingSenderId: \"177784877558\",\n  appId: \"1:177784877558:web:1b0ec9101cf7b24f1b57d7\",\n  measurementId: \"G-F97WXMKH0S\"\n};\n// Initialize Firebase\nfirebase.initializeApp(firebaseConfig);\n\nvar signupForm = document.querySelector('.signup-form');\n\nsignupForm.addEventListener('submit', function (e) {\n  e.preventDefault();\n\n  var email = document.querySelector('.signup-email').value;\n  var password = document.querySelector('.signup-password').value;\n\n  firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {\n    // Signed in \n    // ...\n  }).catch(function (error) {\n    var errorCode = error.code;\n    var errorMessage = error.message;\n    // ..\n  });\n});\n\n//# sourceURL=webpack:///./src/signup.js?");

/***/ })

/******/ });