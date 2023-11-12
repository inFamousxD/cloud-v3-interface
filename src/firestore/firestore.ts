import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAmJ63Vk0QtSBiStFG8ILk6d-4uj50P-AQ",
    authDomain: "xcloud-v3.firebaseapp.com",
    projectId: "xcloud-v3",
    storageBucket: "xcloud-v3.appspot.com",
    messagingSenderId: "327014759741",
    appId: "1:327014759741:web:ced808373b347b1d2b9954",
    measurementId: "G-FL8ZKPRZ21"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics);