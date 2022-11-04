import React from 'react';


// import {Firebase} from 'firebase/app';

// import * as firebase from "firebase/app";

// import firebase from 'firebase/app';
import { initializeApp } from "firebase/app"



// import firebase from 'firebase/compat/';

// var firebaseConfig = {
//     apiKey: "AIzaSyDOvA6h8jbbJMQ-kQhJXKwyJd29BXQ0tXM",
//     authDomain: "iotproject-186c5.firebaseapp.com",
//     databaseURL: "https://iotproject-186c5-default-rtdb.firebaseio.com",
//     projectId: "iotproject-186c5",
//     storageBucket: "iotproject-186c5.appspot.com",
//     messagingSenderId: "283110270522",
//     appId: "1:283110270522:web:55080979d0807a5eb87703",
//     measurementId: "G-KBCJV02BS1"
//   };
var firebaseConfig = {
    apiKey: "AIzaSyAGCQzmkw0Z5nFybbCcld5mH9QChGlWcBc",
    authDomain: "water-quality-6bd52.firebaseapp.com",
    databaseURL: "https://water-quality-6bd52-default-rtdb.firebaseio.com",
    projectId: "water-quality-6bd52",
    storageBucket: "water-quality-6bd52.appspot.com",
    messagingSenderId: "863954228121",
    appId: "1:863954228121:web:df083c8dd8de716e25f908",
    measurementId: "G-E5WT34V2RP"
  };
  firebase = initializeApp(firebaseConfig)

  export default firebase