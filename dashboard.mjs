// Firebase Initialization

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";

import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

import { getFirestore, collection, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyB1q4HunZmvTw7Zy_uLix4I721rdmysQ08",
    authDomain: "saylani-tes.firebaseapp.com",
    projectId: "saylani-tes",
    storageBucket: "saylani-tes.appspot.com",
    messagingSenderId: "1047819898222",
    appId: "1:1047819898222:web:c455f60fcbf86431ddc57f" 

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

// Navbar Hide / Show 

let list = document.getElementById('list');

let btnnn = document.getElementById('btnnn');

btnnn.addEventListener('click', function () {

    if (list.style.display == 'none') {

        list.style.display = 'block';

    } else {

        list.style.display = 'none';

    }
});

// GetData From Firebase

var show = document.getElementById('postBlock');

const querySnapshot = await getDocs(collection(db, "PostData"));

querySnapshot.forEach((doc) => {

    let today = new Date();

    var datee = today.getDate();

    var moth = today.getMonth() + 1; 

    let yeR = today.getFullYear();

    var MineData = doc.data();

    show.innerHTML += `

        <div id='div-Doc' data-id="${doc.id}">

            <h1>${MineData.titlePost}</h1>

            <p id="datttt">Posted on ${datee + '/' + moth + '/' + yeR}</p>

            <p class="content" data-full-content="${MineData.contentPost}">${MineData.contentPost.substring(0, 100)}... <button class="read-more-btn">Read More</button></p>

            <button class="delete-btn">🗑️</button>

        </div>`;
});



show.addEventListener('click', function(e) {

    if (e.target.classList.contains('read-more-btn')) {

        const postDiv = e.target.closest('#div-Doc');

        const contentParagraph = postDiv.querySelector('.content');

        const fullContent = contentParagraph.getAttribute('data-full-content');

        if (e.target.textContent === "Read More") {

            contentParagraph.innerHTML = `${fullContent} <button class="read-more-btn">Read Less</button>`; 
            
        } else {

            contentParagraph.innerHTML = `${fullContent.substring(0, 100)}... <button class="read-more-btn">Read More</button>`; 
        }
    }
});




// Delete Post Firebase


async function deletePost(event) {

    const button = event.target;

    if (button.classList.contains('delete-btn')) {

        const postDiv = button.closest('#div-Doc');

        const postId = postDiv.getAttribute('data-id');

        try {
            
            const postRef = doc(db, "PostData", postId);

            await deleteDoc(postRef);

            postDiv.remove();

        } catch (error) {

            console.error("Error removing document: ", error);

            alert('Failed to delete post');

        }
    }
}

show.addEventListener('click', deletePost);

// Log Out Firebase

let logOut = document.getElementById('logOut');

logOut.addEventListener('click', function () {

    signOut(auth).then(() => {

        location.replace('login.html');

    }).catch((error) => {

        alert('Failed Sign Out');

    });
});

// Search Bar Hide / Show

let soll = document.getElementById('soll');

let finBtn = document.getElementById('finBtn');

finBtn.addEventListener('click', function () {

    if (soll.style.display == 'none') {

        soll.style.display = 'block';

    } else {

        soll.style.display = 'none';
    }
});

// Post Search

let ghj = document.querySelectorAll('#div-Doc');

let findd = document.getElementById('findd');

findd.addEventListener('input', function () {

    for (let i = 0; i < ghj.length; i++) {

        if (ghj[i].textContent.toLowerCase().includes(findd.value.toLowerCase())) {

            ghj[i].style.display = 'block';

        } else {

            ghj[i].style.display = 'none';
        }
    }
});
