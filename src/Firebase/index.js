import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCMja-mtX74azQ6FpOl2gry0xWhLOK-Jnc",
    authDomain: "netflix-clone-e3204.firebaseapp.com",
    projectId: "netflix-clone-e3204",
    storageBucket: "netflix-clone-e3204.appspot.com",
    messagingSenderId: "248244475577",
    appId: "1:248244475577:web:e7ffb4b9a2162ff4966d68",
    measurementId: "G-GC2S8KKSH8"

})
export const db = firebaseApp.firestore();