import firebase from "firebase/app";
import auth from "firebase";
import "firebase/firestore";

const facebookprovider = new firebase.auth.FacebookAuthProvider();

const signInWithFacebook = () => {
  firebase
    .auth()
    .signInWithPopup(facebookprovider)
    .then(function (result) {
      // The signed-in user info.
      var user = result.user;
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};

export default signInWithFacebook;