// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCGFUKMaRVZJCKkrlJvBOKvHV5cLrzeNwA",
  authDomain: "netflix-clone-890b3.firebaseapp.com",
  projectId: "netflix-clone-890b3",
  storageBucket: "netflix-clone-890b3.appspot.com",
  messagingSenderId: "1051988060315",
  appId: "1:1051988060315:web:02414394ba9cbb5731fe3e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();

export { auth };
export default db;


