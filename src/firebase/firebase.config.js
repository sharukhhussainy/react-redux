import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCI5aetKAIu0P5RX_Msg6dFP94R1oGdgC0",
  authDomain: "myexpenses-a8209.firebaseapp.com",
  projectId: "myexpenses-a8209",
  storageBucket: "myexpenses-a8209.appspot.com",
  messagingSenderId: "699415048200",
  appId: "1:699415048200:web:5aad12bef86ed001c121bd",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
