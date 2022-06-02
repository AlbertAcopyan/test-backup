import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCgT0hFqMa1xz-mnlFLjh1byGMxk9hniqA",
  authDomain: "test-6d573.firebaseapp.com",
  databaseURL: "https://test-6d573-default-rtdb.firebaseio.com",
  projectId: "test-6d573",
  storageBucket: "test-6d573.appspot.com",
  messagingSenderId: "181848958073",
  appId: "1:181848958073:web:6d69cac45ca0a54b5060a8"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();