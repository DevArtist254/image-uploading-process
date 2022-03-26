// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLEtwTfzBHE_bulauE3O4nMXwDnatkm9g",
  authDomain: "react-file-upload-13127.firebaseapp.com",
  projectId: "react-file-upload-13127",
  storageBucket: "react-file-upload-13127.appspot.com",
  messagingSenderId: "205603702527",
  appId: "1:205603702527:web:e4cbbdb7645864351aeeca",
  measurementId: "G-H38HCFGPHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, ref, uploadBytesResumable, getDownloadURL }