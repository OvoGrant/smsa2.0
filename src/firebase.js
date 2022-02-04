import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"
import 'firebase/auth'

const app = initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId:  process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MSG_ID,
    appId: process.env.REACT_APP_ID,
    measurementId: process.env.REACT_APP_MS_ID
});

  
export const auth = app.auth();
export const db = getFirestore()