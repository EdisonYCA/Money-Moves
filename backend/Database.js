import { addDoc, getDocs, collection, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '@/library/firebaseConfig.js'


export async function addDataToFirestore(data) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      ...data,
      timestamp: serverTimestamp()
    });
    console.log("wrote: " + docRef)
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function addDataToFirestore2(data) {
  const access_token = data.access_token
  const userid = JSON.parse(localStorage.getItem("linkToken"));
  
  try {
    const docRef = await setDoc(collection(db, "users", userid), {
      access_token
    });
    console.log("wrote: " + docRef)
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