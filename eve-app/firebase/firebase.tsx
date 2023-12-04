// firebase.ts

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import firebaseConfig from './firebase-config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export the database
const database = getDatabase(app);

export { database };
