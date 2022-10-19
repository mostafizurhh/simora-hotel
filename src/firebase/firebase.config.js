// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCD-eP-AleZf7u8jIxksVT9jnR7UFyLPmE",
    authDomain: "simora-hotel.firebaseapp.com",
    projectId: "simora-hotel",
    storageBucket: "simora-hotel.appspot.com",
    messagingSenderId: "952688894556",
    appId: "1:952688894556:web:aa2451d61b67400b4f3c99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;