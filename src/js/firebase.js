// src/js/firebase.js

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCX02FmDR7xueZ4J482hVWTSBV9JyB2SR0",
  authDomain: "test-bookings-project.firebaseapp.com",
  databaseURL: "https://test-bookings-project-default-rtdb.firebaseio.com",
  projectId: "test-bookings-project",
  storageBucket: "test-bookings-project.appspot.com",
  messagingSenderId: "1071663614831",
  appId: "1:1071663614831:web:ff1ef62be4740fd778f69a",
  measurementId: "G-KQRKRS62L2"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
