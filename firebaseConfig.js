// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEc0CZzr_WLJoB-33kxmP_6d6EPRqLD_g",
  authDomain: "app-autenticacao-c4644.firebaseapp.com",
  projectId: "app-autenticacao-c4644",
  storageBucket: "app-autenticacao-c4644.appspot.com",
  messagingSenderId: "470169603766",
  appId: "1:470169603766:web:f1b1af53ada514dac7e017",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
