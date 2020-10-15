import firebase from "firebase";

// Config que me da firebase en el proyecto
const firebaseConfig = {
  apiKey: "AIzaSyCnCS_ibgyEp40ULoVM3VfZmzwt7qiv1gM",
  authDomain: "clone-d9ccf.firebaseapp.com",
  databaseURL: "https://clone-d9ccf.firebaseio.com",
  projectId: "clone-d9ccf",
  storageBucket: "clone-d9ccf.appspot.com",
  messagingSenderId: "637583647922",
  appId: "1:637583647922:web:f73d516e1df7c8995c15ab"
};

// Inicializar firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Inicializar la base de datos en tiempo real 
const db = firebaseApp.firestore();

// Poder usar authentication
const auth = firebase.auth();

export { db, auth }
