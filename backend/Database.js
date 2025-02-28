import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/library/firebaseConfig.js'


export async function addDataToFirestore(data) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      ...data,
      timestamp: serverTimestamp()
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}