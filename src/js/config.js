import firebase from 'firebase/app'

const config = {
  apiKey: "AIzaSyA-PEfy880E6VlYJNBuKmP_sdB4FaOp3kQ",
  authDomain: "edfirebase-6f24b.firebaseapp.com",
  databaseURL: "https://edfirebase-6f24b.firebaseio.com",
  projectId: "edfirebase-6f24b",
  storageBucket: "edfirebase-6f24b.appspot.com",
  messagingSenderId: "971660403208"
};

const init = () => firebase.initializeApp(config);

init();
