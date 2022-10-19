import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDNWZcdfiCKxh-GSHqLBR406ViiisgzGyM",
  authDomain: "sgp-3-18dd8.firebaseapp.com",
  databaseURL:
    "https://sgp-3-18dd8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sgp-3-18dd8",
  storageBucket: "sgp-3-18dd8.appspot.com",
  messagingSenderId: "689866949899",
  appId: "1:689866949899:web:0d2a19a2d10452e10ace0e",
};

const app = firebase.initializeApp(firebaseConfig);
export const projectAuth = app.auth();

export const database = app.database();
