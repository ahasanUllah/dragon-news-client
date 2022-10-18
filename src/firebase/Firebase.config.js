// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: 'AIzaSyDgzXGmAvHEMLsth3nFbVKfnYkIQ0A8K_Q',
   authDomain: 'dragon-news-7c73c.firebaseapp.com',
   projectId: 'dragon-news-7c73c',
   storageBucket: 'dragon-news-7c73c.appspot.com',
   messagingSenderId: '466210221008',
   appId: '1:466210221008:web:b26d270465e1edfcac67d5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
