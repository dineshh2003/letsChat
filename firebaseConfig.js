// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAUNTPg_XUkr1h2YNQCmmpG7SeWlhzObaw",
    authDomain: "native-chat-app-c59ec.firebaseapp.com",
    projectId: "native-chat-app-c59ec",
    storageBucket: "native-chat-app-c59ec.appspot.com",
    messagingSenderId: "642892459241",
    appId: "1:642892459241:web:5ebfbd951ada9c4296d478",
    measurementId: "G-NGFBWJY3DW"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const userRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');

export default app;
