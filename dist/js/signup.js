!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([,function(e,t,r){"use strict";firebase.initializeApp({apiKey:"AIzaSyALdtzO-3BsjNMOFjXLDIZfiK5RWWb7wK8",authDomain:"dream-site-407d0.firebaseapp.com",projectId:"dream-site-407d0",storageBucket:"dream-site-407d0.appspot.com",messagingSenderId:"177784877558",appId:"1:177784877558:web:1b0ec9101cf7b24f1b57d7",measurementId:"G-F97WXMKH0S"}),document.querySelector(".signup-form").addEventListener("submit",function(e){e.preventDefault();var t=document.querySelector(".signup-email").value,r=document.querySelector(".signup-password").value;firebase.auth().createUserWithEmailAndPassword(t,r).then(function(e){}).catch(function(e){e.code,e.message})})}]);