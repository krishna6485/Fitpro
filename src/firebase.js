import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4BDIttGDlLxz4pdYjmO7rZxQbh6aa_RU",
  authDomain: "fir-auth-30602.firebaseapp.com",
  projectId: "fir-auth-30602",
  storageBucket: "fir-auth-30602.appspot.com",
  messagingSenderId: "460337189672",
  appId: "1:460337189672:web:f86b81bc219699f9d8761d",
  measurementId: "G-6SPQJ845XH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth}