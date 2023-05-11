// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHKHN-UDV5D-QM0we6IUiwIrvIO2JpmHA",
  authDomain: "recipe-master-cacfb.firebaseapp.com",
  projectId: "recipe-master-cacfb",
  storageBucket: "recipe-master-cacfb.appspot.com",
  messagingSenderId: "10177189472",
  appId: "1:10177189472:web:a59fa725b5cb90bc24d505"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;