import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {set, ref, get, child, update, remove, getDatabase} from 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyCpNXKCMuPpH4fD2d0NgNFrwdge2aTNJi4",
  authDomain: "global-star-22.firebaseapp.com",
  projectId: "global-star-22",
  databaseURL: "https://global-star-22-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "global-star-22.appspot.com",
  messagingSenderId: "709373139489",
  appId: "1:709373139489:web:d983b71a3c69311842a160"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const database = getDatabase(app);
const dbRef = ref(database)

const setToDatabase = async (url, data) => {
  return await set(ref(database, url), data)
}

const getFromDatabase = async (url) => {
  const snapshot = await get(child(dbRef, url))

  if (snapshot.exists()) {
    return snapshot.val()
  }
}

const putToDatabase = async (data) => {
  return await update(ref(database), data)
}

const deleteFromDatabase = async (url) => {
  return await remove(child(dbRef, url))
}


export default app

export {
  storage,
  database,

  setToDatabase,
  getFromDatabase,
  putToDatabase,
  deleteFromDatabase,
}
