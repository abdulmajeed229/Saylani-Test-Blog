
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth , createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import { getFirestore , collection, addDoc  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

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
  const db = getFirestore(app);


let userName = document.getElementById('userName');
let userEmail = document.getElementById('userEmail');
let userPassword = document.getElementById('userPassword');
let createBtn = document.getElementById('create');



createBtn.addEventListener('click' , async function(){


    if( userEmail.value === "" || userPassword.value === "" || userName.value === ""){

        Swal.fire("Please Enter Your Data !");

    }else{

      let data = localStorage.setItem( 'nameee' , userName.value)


 
        createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value )
        
        .then((userCredential) => {
            
        const user = userCredential.user;
        
        Swal.fire("Account Created successfully! Thank you.");
        
        location.replace('login.html')
        
    })
    .catch((error) => {
        
        const errorCode = error.code;
        const errorMessage = error.message;
        
        Swal.fire("Account Created failed. Please try again.");
    });
}

})


