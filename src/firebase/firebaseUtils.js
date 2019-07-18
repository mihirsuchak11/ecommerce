import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBNpasrmWEylNze0L9CvvPw7Lrc5l1MMzo",
    authDomain: "crwn-db-3078e.firebaseapp.com",
    databaseURL: "https://crwn-db-3078e.firebaseio.com",
    projectId: "crwn-db-3078e",
    storageBucket: "",
    messagingSenderId: "255263661501",
    appId: "1:255263661501:web:2eccb7e9e314960f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;