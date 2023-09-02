import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCys5qamYLtNH9-tujMNQ7mz6KKPXl0CRg",
    authDomain: "e-library-f7b3c.firebaseapp.com",
    projectId: "e-library-f7b3c",
    storageBucket: "e-library-f7b3c.appspot.com",
    messagingSenderId: "593957101004",
    appId: "1:593957101004:web:4d9cf0d6d2f89c5a249169"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


