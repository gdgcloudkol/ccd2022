// import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";

// require('dotenv').config()

const firebaseConfig = {
    apiKey: "AIzaSyCeb6YO1f4x2FU91SoJKGxRiaQCwZYUfJ4",
    authDomain: "gdgcp-ccd.firebaseapp.com",
    projectId: "gdgcp-ccd",
    storageBucket: "gdgcp-ccd.appspot.com",
    messagingSenderId: "84693050568",
    appId: "1:84693050568:web:db63873d4a23ea99ef71fd",
    measurementId: "G-4S3NVYTEV8"
}

const app = initializeApp(firebaseConfig)

export default app;