import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyCp-5iD12LFfzYt38pG4MGCuee1cVeTEgk",
    authDomain: "to-do-list-reectjs-firebase.firebaseapp.com",
    projectId: "to-do-list-reectjs-firebase",
    storageBucket: "to-do-list-reectjs-firebase.appspot.com",
    messagingSenderId: "326656660032",
    appId: "1:326656660032:web:bc8e45186d673c9c6805a5",
    measurementId: "G-W43B6W5HNV"
  };

  firebase.initializeApp(firebaseConfig);

  export const database = firebase.database();

  export default firebase;