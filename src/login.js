
var firebaseConfig = {
    apiKey: "AIzaSyALdtzO-3BsjNMOFjXLDIZfiK5RWWb7wK8",
    authDomain: "dream-site-407d0.firebaseapp.com",
    projectId: "dream-site-407d0",
    storageBucket: "dream-site-407d0.appspot.com",
    messagingSenderId: "177784877558",
    appId: "1:177784877558:web:1b0ec9101cf7b24f1b57d7",
    measurementId: "G-F97WXMKH0S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  


const loginFrom = document.querySelector('.login-form');


  loginFrom.addEventListener('submit', e => {
    e.preventDefault();

    const email = document.querySelector('.login-email').value
    const password = document.querySelector('.login-password').value

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in 
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  })