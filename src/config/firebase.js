import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCv6ZVn73g1f1bOBkG0e7twlD0fNPJtIIQ",
    authDomain: "sfly-0899.firebaseapp.com",
    projectId: "sfly-0899",
    storageBucket: "sfly-0899.appspot.com",
    messagingSenderId: "812305502342",
    appId: "1:812305502342:web:18d66c67922247f5354107",
    measurementId: "G-E94BLYS4K6"
};
const app = initializeApp(firebaseConfig);

export default app