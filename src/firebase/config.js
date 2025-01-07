// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore/lite'; 
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrkMK86MKUWhsabeVMRaJCx3dCghWSoKs",
    authDomain: "beclever-reac.firebaseapp.com",
    projectId: "beclever-reac",
    storageBucket: "beclever-reac.firebasestorage.app",
    messagingSenderId: "757596952999",
    appId: "1:757596952999:web:4fc1a1a945cd99cf69fe82"
  };

// Initialize Firebase
export const FirebaseApp    = initializeApp(firebaseConfig);
export const FirebaseAuth   = getAuth( FirebaseApp ); 
export const FirebaseDB     = getFirestore( FirebaseApp ); 