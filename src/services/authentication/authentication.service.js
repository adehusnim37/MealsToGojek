// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
