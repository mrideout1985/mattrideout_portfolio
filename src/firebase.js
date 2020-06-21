import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyC9vFs5iskmKRbxwe_7Aegw9wUJkXIuUSw",
	authDomain: "matthewrideout-ac214.firebaseapp.com",
	databaseURL: "https://matthewrideout-ac214.firebaseio.com",
	projectId: "matthewrideout-ac214",
	storageBucket: "matthewrideout-ac214.appspot.com",
	messagingSenderId: "739445489993",
	appId: "1:739445489993:web:57d393998a28d725605a98",
	measurementId: "G-F4DVSXVL2W",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
