import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//default firebase used to test login
var firebaseConfig = {
  apiKey: "AIzaSyBMdx6kTkwrWMwILzVAySNQv85Gkp-Oepo",
    authDomain: "tid-project.firebaseapp.com",
    databaseURL: "https://tid-project.firebaseio.com",
    projectId: "tid-project",
    storageBucket: "tid-project.appspot.com",
    messagingSenderId: "509329465039",
    appId: "1:509329465039:web:a8b352253c928f6039e1ba"
};

const fire = firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore();
const docRef = firestore.collection("Items").doc();
const admin = require('firebase-admin');
admin.initializeApp();

const saveButton = document.querySelector("#saveButton");
const item = document.querySelector("#nameItem");
const description = document.querySelector("#descriptionItem");
const location = document.querySelector("#locationItem");
const note = document.querySelector("#noteItem");

saveButton.addEventListener("click", function() {
    
    const nameValue = item.value;
    const DescriptionValue = description.value;
    const locationValue = location.value;
    const noteValue = note.value;
    console.log("save " + nameValue + " to Firestore");
    docRef.set({
        Name: nameValue,
        Description: DescriptionValue,
        Location: locationValue,
        Note: noteValue,
    }).then(function() {
        console.log("Status saved!");
        item.value = "";
        description.value = "";
        location.value = "";
        note.value = "";
    }).catch(function (error) {
        console.log("Got an error " + error);
    });
})

export default fire;

