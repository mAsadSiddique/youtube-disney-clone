import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBQcqH4ZTRygxkhABPXW3WPNXHoug9guZo",
  authDomain: "disneyplus-clone-f24e2.firebaseapp.com",
  projectId: "disneyplus-clone-f24e2",
  storageBucket: "disneyplus-clone-f24e2.appspot.com",
  messagingSenderId: "852360525610",
  appId: "1:852360525610:web:9c6c83f6d35851596b5053",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
