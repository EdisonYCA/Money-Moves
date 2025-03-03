import {
  addDoc,
  setDoc,
  getDocs,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/library/firebaseConfig.js";

export async function addDataToFirestore(data) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      ...data,
      timestamp: serverTimestamp(),
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function addAccessToken(user, access_token) {
  const userDocRef = doc(db, "users", user);
  try {
    await db.runTransaction(async (transaction) => {
      const userDocSnap = await transaction.get(userDocRef);

      if (!userDocSnap.exists()) {
        transaction.set(userDocRef, {
          access_tokens: [access_token],
        });
      } else {
        transaction.update(userDocRef, {
          access_tokens: arrayUnion(access_token),
        });
      }
    });

    return true
  } catch (error) {
    throw error
  }
}

async function getSingleDocument() {
  const docRef = doc(db, "users", "someId"); // Replace someId with actual document ID
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
}
