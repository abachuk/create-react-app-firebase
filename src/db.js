import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBTtmVBx8upEJOGtJKbpWdBbFs0-yynWog",
    authDomain: "test-c5e5d.firebaseapp.com",
    databaseURL: "https://test-c5e5d.firebaseio.com",
    projectId: "test-c5e5d",
    storageBucket: "test-c5e5d.appspot.com",
    messagingSenderId: "780405288632"
  };

export const fb = firebase.initializeApp(config);
export const db = fb.database().ref();
export const firebaseGoogle = new firebase.auth.GoogleAuthProvider();
