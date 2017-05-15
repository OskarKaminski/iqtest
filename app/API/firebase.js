import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAoCL3pwoM2JMU3VSo0oMbEKL9dH5g34BA",
    authDomain: "testiq-253e0.firebaseapp.com",
    databaseURL: "https://testiq-253e0.firebaseio.com",
    projectId: "testiq-253e0",
    storageBucket: "testiq-253e0.appspot.com",
    messagingSenderId: "967997256063"
};
export const db = firebase.initializeApp(config);