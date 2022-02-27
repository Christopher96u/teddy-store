import { initializeApp } from 'firebase/app';
import type { CollectionReference } from 'firebase/firestore';
import { getFirestore, collection } from 'firebase/firestore';
//import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const FIREBASE_CONFIG = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(FIREBASE_CONFIG);
export const db = getFirestore(app);
export const createCollection = <T>(collectionName: string) => collection(db, collectionName) as CollectionReference<T>;
/* export const auth = getAuth();
export const provider = new GoogleAuthProvider(); */
/* provider.setCustomParameters({ prompt: 'select_account' }); */
