import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAFEdkaL6y6jFAF0unzjAO9z0rkyD4t2GE',
  authDomain: 'twitter-clone-8837c.firebaseapp.com',
  databaseURL: 'https://twitter-clone-8837c.firebaseio.com',
  projectId: 'twitter-clone-8837c',
  storageBucket: 'twitter-clone-8837c.appspot.com',
  messagingSenderId: '737817722905',
  appId: '1:737817722905:web:dce1580c3364c2267eaa88',
  measurementId: 'G-EDK38E5VCF',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
