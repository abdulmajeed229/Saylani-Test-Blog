
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
 
  import { getFirestore , collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
 

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB1q4HunZmvTw7Zy_uLix4I721rdmysQ08",
    authDomain: "saylani-tes.firebaseapp.com",
    projectId: "saylani-tes",
    storageBucket: "saylani-tes.appspot.com",
    messagingSenderId: "1047819898222",
    appId: "1:1047819898222:web:c455f60fcbf86431ddc57f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
















  

let uniqueButtonId = document.getElementById('uniqueButtonId');


uniqueButtonId.addEventListener('click' , async function(){

    let title = document.getElementById('title').value;

let content = document.getElementById('content').value;


    try {
        const docRef = await addDoc(collection(db, "PostData"), {
           
            titlePost : title ,
            
            contentPost : content
        });

        
        alert('Successful')

        location.replace('dashboard.html')

        
    } catch (e) {
       
        alert('Failed')
    }
    
})