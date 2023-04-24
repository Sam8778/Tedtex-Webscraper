import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlddqidNmGZOKSyukDkReHehocEZJzm04",
  authDomain: "brightdata-webscraper-build.firebaseapp.com",
  projectId: "brightdata-webscraper-build",
  storageBucket: "brightdata-webscraper-build.appspot.com",
  messagingSenderId: "801565869206",
  appId: "1:801565869206:web:317a00a87e76ee0b5b2eb7"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };