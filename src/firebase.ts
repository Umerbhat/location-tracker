import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyDLqk4mQnFXQw5sCFOs3GJdHXFQQ0CsYSs",
  authDomain: "map-listing-c780e.firebaseapp.com",
  databaseURL: "https://map-listing-c780e.firebaseio.com",
  projectId: "map-listing-c780e",
  storageBucket: "map-listing-c780e.appspot.com",
  messagingSenderId: "117367299131",
  appId: "1:117367299131:web:45b4880635a174212f101e",
  measurementId: "G-4FFFPFZY0G",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
export const analytics = firebase.analytics();
export const auth = firebase.auth();
