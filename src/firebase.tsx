import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPY88MByQp2EERquPDIPcBDdCM6AbZ9Sk",
  authDomain: "codetivate.firebaseapp.com",
  projectId: "codetivate",
  storageBucket: "codetivate.appspot.com",
  messagingSenderId: "737556488682",
  appId: "1:737556488682:web:588399924c59b18b00d293",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
