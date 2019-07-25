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

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, email, createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating users', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;