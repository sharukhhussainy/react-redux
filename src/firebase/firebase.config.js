import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnv9IjsfyMZAkKrVQWK-n2yhNYXv9B2w8",
  authDomain: "expensesv2-67fbe.firebaseapp.com",
  projectId: "expensesv2-67fbe",
  storageBucket: "expensesv2-67fbe.appspot.com",
  messagingSenderId: "281196140358",
  appId: "1:281196140358:web:b6a8d8f1e413856611f747",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
