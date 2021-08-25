import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDt1FK5eMA6UlZmQKX7Ux2_mnqxj-vKmlE",
    authDomain: "netflix-build-9f707.firebaseapp.com",
    projectId: "netflix-build-9f707",
    storageBucket: "netflix-build-9f707.appspot.com",
    messagingSenderId: "399933095779",
    appId: "1:399933095779:web:1a74688504b46a780f1d56"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;