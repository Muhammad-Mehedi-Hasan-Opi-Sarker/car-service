// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvVAHD7WD8aY0ab8hYR15zzq6RLXSce6M",
  authDomain: "car-service-7ab6d.firebaseapp.com",
  projectId: "car-service-7ab6d",
  storageBucket: "car-service-7ab6d.appspot.com",
  messagingSenderId: "632238518567",
  appId: "1:632238518567:web:1a0ae7463fbaf4a23af902"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth;