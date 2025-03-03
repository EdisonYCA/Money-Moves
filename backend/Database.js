import { addDoc, getDocs, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/library/firebaseConfig.js'


export async function addDataToFirestore(data) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      ...data,
      timestamp: serverTimestamp()
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getSingleDocument(){
  const docRef = doc(db, "users", "someId"); // Replace someId with actual document ID
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
}