import firebase from "firebase";

import 'firebase/auth'
import 'firebase/'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyB_ZbrYumybMYei3wXiGwlKj3bVU0CZTOU",
    authDomain: "used-traders.firebaseapp.com",
    projectId: "used-traders",
    storageBucket: "used-traders.appspot.com",
    messagingSenderId: "133730804258",
    appId: "1:133730804258:web:97fa5d399603131101207b",
    measurementId: "G-KWSFLENYNY"
  };




  export default firebase.initializeApp(firebaseConfig)