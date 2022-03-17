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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar backdrop = document.querySelector('.backdrop');\nvar toggleButton = document.querySelector('.toggle-button__container');\nvar nav = document.querySelector('.mobile-nav');\nvar closeNav = document.querySelector('.close-nav');\nvar displayContent = document.querySelectorAll('.about-content');\nvar body = document.body;\nvar parentNav = document.querySelector('.mobile-nav__items');\nvar header = document.querySelector('.main-header');\nvar feedback = document.querySelector('.feedback');\nvar feedbackForm = document.querySelector('.feedback-form');\nvar closeAll = document.querySelector('.close-button');\nvar login = document.querySelector('.login');\nvar loginForm = document.querySelector('.login-form');\nvar signup = document.querySelector('.signup');\nvar signupForm = document.querySelector('.signup-form');\nvar signupBtn = document.querySelector('.sign-up__button');\n\nvar closeBlock = function closeBlock() {\n  closeAll.style.display = 'none';\n  backdrop.style.display = 'none';\n  signupForm.style.display = 'none';\n  loginForm.style.display = 'none';\n};\n\nvar lastScroll = 0;\nwindow.addEventListener('scroll', function () {\n  var currentScroll = window.scrollY;\n\n  header.style.transition = 'transform 0.4s';\n\n  if (window.scrollY > 100) {\n    if (currentScroll < lastScroll) {\n      header.style.transform = 'translateY(0)';\n    } else {\n      header.style.transform = 'translateY(-100%)';\n    }\n\n    lastScroll = currentScroll;\n  }\n});\n\n// toggle button\ntoggleButton.addEventListener('click', function () {\n  setTimeout(function () {\n    backdrop.style.display = 'block';\n    nav.style.display = 'flex';\n    nav.style.animation = 'slideIn 0.5s linear';\n    toggleButton.style.opacity = '0';\n  }, 200);\n});\n\n// back drop\nbackdrop.addEventListener('click', function () {\n  setTimeout(function () {\n    closeBlock();\n    if (body.offsetWidth > 720 && feedbackForm.style.animation === '') {\n      feedbackForm.style.display = 'none';\n    } else {\n      feedbackForm.style.animation = 'feedbackSlideOut 0.2s linear';\n      setTimeout(function () {\n        feedbackForm.style.display = 'none';\n      }, 190);\n    }\n    setTimeout(function () {\n      feedbackForm.style.display = 'none';\n    }, 190);\n    nav.style.animation = 'slideOut 0.3s linear';\n    setTimeout(function () {\n      nav.style.display = 'none';\n    }, 290);\n    toggleButton.style.opacity = '1';\n  }, 200);\n});\n\n//  navigation close button\ncloseNav.addEventListener('click', function () {\n  setTimeout(function () {\n    backdrop.style.display = 'none';\n    nav.style.animation = 'slideOut 0.3s linear';\n    setTimeout(function () {\n      nav.style.display = 'none';\n    }, 290);\n    toggleButton.style.opacity = '1';\n  }, 200);\n});\n\n// navigation child\nArray.from(parentNav.children).forEach(function (cur) {\n  cur.addEventListener('click', function () {\n    setTimeout(function () {\n      backdrop.style.display = 'none';\n      nav.style.animation = 'slideOut 0.3s linear';\n      setTimeout(function () {\n        nav.style.display = 'none';\n      }, 290);\n      toggleButton.style.opacity = '1';\n    }, 100);\n  });\n});\n\n// Display more content in about\nArray.from(displayContent).forEach(function (cur) {\n  if (window.innerWidth < 1024.1) {\n    cur.addEventListener('click', function () {\n      if (cur.nextElementSibling.style.display === 'block' && cur.lastElementChild.style.transform === 'rotateZ(270deg)') {\n        cur.nextElementSibling.style.display = 'none';\n        cur.lastElementChild.style.transform = 'rotateZ(0deg)';\n      } else {\n        cur.nextElementSibling.style.display = 'block';\n        cur.lastElementChild.style.transform = 'rotateZ(270deg)';\n      }\n    });\n  }\n});\n\n// feedback form control\nfeedback.addEventListener('click', function () {\n  backdrop.style.display = 'block';\n  closeAll.style.display = 'block';\n  feedbackForm.style.display = 'flex';\n  if (body.offsetWidth <= 720) {\n    feedbackForm.style.animation = 'feedbackSlideIn 0.5s linear';\n  }\n});\n\n// backdrop close button\ncloseAll.addEventListener('click', function () {\n  closeBlock();\n  if (body.offsetWidth > 720 && feedbackForm.style.animation === '') {\n    feedbackForm.style.display = 'none';\n  } else {\n    feedbackForm.style.animation = 'feedbackSlideOut 0.2s linear';\n    setTimeout(function () {\n      feedbackForm.style.display = 'none';\n    }, 190);\n  }\n});\n\n// login form control\nlogin.addEventListener('click', function () {\n  backdrop.style.display = 'block';\n  closeAll.style.display = 'block';\n  loginForm.style.display = 'flex';\n});\n\n// Sign form control\nif (window.innerWidth > 720) {\n  [signup, signupBtn].forEach(function (cur) {\n    cur.addEventListener('click', function (e) {\n      e.preventDefault();\n\n      backdrop.style.display = 'block';\n      closeAll.style.display = 'block';\n      signupForm.style.display = 'flex';\n    });\n  });\n}\n\nvar minWidth = function minWidth() {\n  var swiper = document.querySelector('#packages');\n\n  if (window.innerWidth > 720 && swiper.classList.contains('swiper-container')) {\n    swiper.classList.remove('swiper-container');\n  } else {\n    swiper.classList.add('swiper-container');\n  }\n};\n\nminWidth();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });