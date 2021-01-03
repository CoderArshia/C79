import firebase from 'firebase';
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyATfqfB4ctopKSPFW-Jor0jPY0fwVSV4lw",
    authDomain: "book-santa-app-3f145.firebaseapp.com",
    projectId: "book-santa-app-3f145",
    storageBucket: "book-santa-app-3f145.appspot.com",
    messagingSenderId: "808743069569",
    appId: "1:808743069569:web:684ec490497e24a149ea80",
    measurementId: "G-0XQF9ZW61X"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore();