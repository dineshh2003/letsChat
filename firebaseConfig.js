// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getReactNativePersistence, initializeAuth} from 'firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";

import {getFireStore, collection} from 'firebase/app'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUNTPg_XUkr1h2YNQCmmpG7SeWlhzObaw",
  authDomain: "native-chat-app-c59ec.firebaseapp.com",
  projectId: "native-chat-app-c59ec",
  storageBucket: "native-chat-app-c59ec.appspot.com",
  messagingSenderId: "642892459241",
  appId: "1:642892459241:web:5ebfbd951ada9c4296d478",
  measurementId: "G-NGFBWJY3DW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, 
    {
        persistence: getReactNativePersistence(AsyncStorage)
    }
)


export const db = getFireStore(app);

export const userRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');