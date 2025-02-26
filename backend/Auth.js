import { auth } from '@/library/firebaseConfig.js'
import { createUserWithEmailAndPassword } from "firebase/auth"
  
export const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
}