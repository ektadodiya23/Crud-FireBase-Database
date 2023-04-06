



import firebase from 'firebase/compat/app';
import 'firebase/compat/database'


const firebaseConfig = {
    apiKey: "AIzaSyAnSilmqljWtlDcT3Nw6hGwcPQv8cNOd7A",
    authDomain: "react-crud-2a50c.firebaseapp.com",
    databaseURL: "https://react-crud-2a50c-default-rtdb.firebaseio.com",
    projectId: "react-crud-2a50c",
    storageBucket: "react-crud-2a50c.appspot.com",
    messagingSenderId: "1053752091997",
    appId: "1:1053752091997:web:0fb03b3768cf11413334b4"
  };


firebase.initializeApp(firebaseConfig);
 export const  db = firebase.database();

  
export default firebase;




