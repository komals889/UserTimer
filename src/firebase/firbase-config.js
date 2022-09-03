import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyApu7HKm4Vgp8-UhlIFw-VRnBfrrEiQqFk",
    authDomain: "signin-d2f63.firebaseapp.com",
    projectId: "signin-d2f63",
    storageBucket: "signin-d2f63.appspot.com",
    messagingSenderId: "169466245153",
    appId: "1:169466245153:web:3bcb119ce1b2b0e03a7360",
    measurementId: "G-8Z7L0NKTVX"
  };

  const app=initializeApp(firebaseConfig)

  export const firbase =getAuth(app)