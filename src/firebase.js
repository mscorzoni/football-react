import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyDth-9RqAQkYICIj3ZsxR_rgV-9fv1Z_lw",
  authDomain: "m-city-407fc.firebaseapp.com",
  databaseURL: "https://m-city-407fc.firebaseio.com",
  projectId: "m-city-407fc",
  storageBucket: "m-city-407fc.appspot.com",
  messagingSenderId: "34918308054"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');

export {
  firebase,
  firebaseMatches
}

