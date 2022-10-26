// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBeqnQFUXk5KR0kz3LPZOsmHI6SBhyaJxo",
      authDomain: "ema-john-with-auth-a8c1e.firebaseapp.com",
      projectId: "ema-john-with-auth-a8c1e",
      storageBucket: "ema-john-with-auth-a8c1e.appspot.com",
      messagingSenderId: "95251798199",
      appId: "1:95251798199:web:74413dad16c97547aa5532"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;