import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBiw2aasKdofBvS7JAFilm71TTiEAywyr0",
    authDomain: "resume-ai-scorer-2f685.firebaseapp.com",
    projectId: "resume-ai-scorer-2f685",
    storageBucket: "resume-ai-scorer-2f685.firebasestorage.app",
    messagingSenderId: "967216479871",
    appId: "1:967216479871:web:d94e4a473eb496389ac94a",
    measurementId: "G-Z9Y43J5RC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider};