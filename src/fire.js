import firebase from "firebase";

//default firebase used to test login
var firebaseConfig = {
  apiKey: "AIzaSyBnNf2So17O7NkLyRHI68mDTIJGfNd0ZoM",
  authDomain: "login-3fad3.firebaseapp.com",
  databaseURL: "https://login-3fad3.firebaseio.com",
  projectId: "login-3fad3",
  storageBucket: "login-3fad3.appspot.com",
  messagingSenderId: "832964385063",
  appId: "1:832964385063:web:205b2536dd64fd438fb102",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
