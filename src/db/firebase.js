// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzQriRUeWkMB1cCSFfOTf1crdR19ATkYw",
  authDomain: "met-gg-web.firebaseapp.com",
  projectId: "met-gg-web",
  storageBucket: "met-gg-web.appspot.com",
  messagingSenderId: "20718140146",
  appId: "1:20718140146:web:c35fb73df739c12f49ee6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);