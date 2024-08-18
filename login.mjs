
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBh3ARYckfzGOjs0xTWXQxjja-2i3hHn6g",
    authDomain: "blog-login-9dff8.firebaseapp.com",
    projectId: "blog-login-9dff8",
    storageBucket: "blog-login-9dff8.appspot.com",
    messagingSenderId: "436586166875",
    appId: "1:436586166875:web:4be67ac97dee09021edd7e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);



let userEmailLogin = document.getElementById('userEmailLogin');
let userPasswordLogin = document.getElementById('userPasswordLogin');
let login = document.getElementById('login');


login.addEventListener('click' , function(){

  if(userEmailLogin.value === "" || userPasswordLogin.value ===""){

    Swal.fire("Please Enter Your Data !");

  }else{

    signInWithEmailAndPassword(auth, userEmailLogin.value, userPasswordLogin.value)

    .then((userCredential) => {

      const user = userCredential.user;

      Swal.fire("Sign in Successfully ! Welcome");

    
      location.replace('dashboard.html')

    
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      
      Swal.fire("Sign in Failed Please Enter Correct Data !");
    });
  }
    
})
  