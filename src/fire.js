import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAKcWdQPeCT_ngPSF0ftoUIf6sDecQDGOE",
    authDomain: "pizza-shop-b6e25.firebaseapp.com",
    projectId: "pizza-shop-b6e25",
    storageBucket: "pizza-shop-b6e25.appspot.com",
    messagingSenderId: "7195918256",
    appId: "1:7195918256:web:71d9da0b41afc145c22075",
    databaseURL: "https://pizza-shop-b6e25-default-rtdb.firebaseio.com/",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;