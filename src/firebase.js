import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD7QOGCobpTNIiQCMaUto6VF6_QW4wAq4s",
    authDomain: "yt-clone-karthik.firebaseapp.com",
    projectId: "yt-clone-karthik",
    storageBucket: "yt-clone-karthik.appspot.com",
    messagingSenderId: "1058577593948",
    appId: "1:1058577593948:web:5485e60c85868f25fb1899"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();