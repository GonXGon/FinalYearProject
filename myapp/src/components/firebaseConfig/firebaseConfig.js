import { initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"                                                          

const firebaseConfig = {
    apiKey: "AIzaSyA0SvNfBpE5lR6E14qCn_-TXSlp9bab4HI",
    authDomain: "finalyearproject-723c0.firebaseapp.com",
    databaseURL: "https://finalyearproject-723c0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "finalyearproject-723c0",
    storageBucket: "finalyearproject-723c0.appspot.com",
    messagingSenderId: "262855561664",
    appId: "1:262855561664:web:86e443d07cbb2be2d9f825",
    measurementId: "G-5L48M3Y1MB"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const dbfirestore = getFirestore();

export const auth = getAuth(app);

export const provider  = new GoogleAuthProvider();


