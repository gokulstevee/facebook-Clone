import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpi4qGFSR_bGmiE-ugt86fzBVYaqC07Uk",
  authDomain: "fb-clone-c9370.firebaseapp.com",
  databaseURL: "https://fb-clone-c9370.firebaseio.com",
  projectId: "fb-clone-c9370",
  storageBucket: "fb-clone-c9370.appspot.com",
  messagingSenderId: "555435726810",
  appId: "1:555435726810:web:4e5a52988f6973585e92e3",
  measurementId: "G-YGZEE8YPEE",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
