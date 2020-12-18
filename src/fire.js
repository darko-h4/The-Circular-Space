import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//default firebase used to test login
var firebaseConfig = {
    apiKey: "AIzaSyBe-OeEr2qLebNEpkSp9jVsi6eSLQ9nzq8",
    authDomain: "circular-space-985dd.firebaseapp.com",
    projectId: "circular-space-985dd",
    storageBucket: "circular-space-985dd.appspot.com",
    messagingSenderId: "1068509296256",
    appId: "1:1068509296256:web:f8ab88903e044a0499d865",
};

export const fire = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const collection = firestore.collection("Items");
export const borrowcollection = firestore.collection("BorrowedItems");
export const docRef = collection.doc();
const admin = require('firebase-admin');
admin.initializeApp(); 

export default fire;

