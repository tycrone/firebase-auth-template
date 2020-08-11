import app from 'firebase/app';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyDtNa2-9-or2j5CTuIzYb15PQ_JJnXk9Fk",
	authDomain: "react-firebase-authentic-5cd6e.firebaseapp.com",
	databaseURL: "https://react-firebase-authentic-5cd6e.firebaseio.com",
	projectId: "react-firebase-authentic-5cd6e",
	storageBucket: "react-firebase-authentic-5cd6e.appspot.com",
	messagingSenderId: "628696716058",
	appId: "1:628696716058:web:61614161869943be8ad2a3"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  // ***AUTH API***
  doCreateUserWithEmailAndPassword = (email, password) =>
  	this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
  	this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
  	this.auth.currentUser.updatePassword(password);
}
 
export default Firebase;