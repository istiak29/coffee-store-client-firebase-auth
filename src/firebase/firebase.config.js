// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqI_0nUWRp2o8jIoxA02tYQ28VBnNlixU",
    authDomain: "coffee-store-b7695.firebaseapp.com",
    projectId: "coffee-store-b7695",
    storageBucket: "coffee-store-b7695.appspot.com",
    messagingSenderId: "804124629595",
    appId: "1:804124629595:web:e96f699a9470770f3b7d7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;