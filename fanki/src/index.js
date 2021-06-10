import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'
import "firebase/auth"
import 'firebase/storage';  
import { BrowserRouter } from 'react-router-dom';


require('firebase/database');
require('firebase/firestore');


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyAfCXrir199LMy4kTM6BLehiINYMJfs1Dg",
  authDomain: "optimal-iris-238613.firebaseapp.com",
  projectId: "optimal-iris-238613",
  storageBucket: "optimal-iris-238613.appspot.com",
  messagingSenderId: "387095380955",
  appId: "1:387095380955:web:09f4c6db2541598609ddfe",
  measurementId: "G-51XQ2DRL7M"
};

const app = firebase.initializeApp(config);
const auth=firebase.auth();
// auth.onAuthStateChanged(user=>{console.log("Firebase user is " +user)});

var database = firebase.firestore();
var storage = firebase.storage();
var storageRef = storage.ref();

ReactDOM.render(
  <React.StrictMode>
          <BrowserRouter>
                 <App app={app}/>
          </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
