import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBUwIBNzHhoVkvDb36wfQvefgmtL8p-19w",
    authDomain: "netflix-clone-1ef85.firebaseapp.com",
    projectId: "netflix-clone-1ef85",
    storageBucket: "netflix-clone-1ef85.appspot.com",
    messagingSenderId: "644576563348",
    appId: "1:644576563348:web:ed010134e2e7a54ad4e481",
    measurementId: "G-YHFZYG3J7T"

})
export const db = firebaseApp.firestore();