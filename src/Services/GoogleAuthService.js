// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDoHiUU5VEkxb-80M3yBw9bCcxyImOy7u4",
    authDomain: "rateradar-61bb7.firebaseapp.com",
    projectId: "rateradar-61bb7",
    storageBucket: "rateradar-61bb7.firebasestorage.app",
    messagingSenderId: "878617432597",
    appId: "1:878617432597:web:37f5298693c0596ed6f41c",
    measurementId: "G-SHMV0RSQ1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({
    'login_hint': 'user@example.com'
});
export const auth = getAuth(app);
auth.languageCode = 'it';