import firebase  from 'firebase/compat/app'
import 'firebase/compat/firestore'
//  use compat in directory
const firebaseConfig = {
    apiKey: "AIzaSyBsgrf1aGhG_wLFoTfjWhNvVSRsm00RXIQ",
    authDomain: "vue-firebase-sites-55a5d.firebaseapp.com",
    projectId: "vue-firebase-sites-55a5d",
    storageBucket: "vue-firebase-sites-55a5d.appspot.com",
    messagingSenderId: "1033501920722",
    appId: "1:1033501920722:web:9122ebacc8f95c40c60c0b"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
// creating firebase timestamp function
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }