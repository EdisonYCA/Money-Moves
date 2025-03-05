import { setDoc, doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db, auth } from "@/library/firebaseConfig.js";

export async function initFirestoreNewUser(uid) {
  try {
    await setDoc(doc(db, "users", uid), {
      annual_salary: 0,
      savings_rate: 0,
      expenses: [],
      accounts: [],
      transactions: [],
    });
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function getUserData() {
  try {
    const docSnap = await getDoc(doc(db, "users", getCurrentUser()));
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getExpenses() {
  try {
    const docSnap = await getDoc(doc(db, "users", getCurrentUser()));
    if (docSnap.exists()) {
      return docSnap.data().expenses;
    } else {
      return null;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getSalary() {
  try {
    const docSnap = await getDoc(doc(db, "users", getCurrentUser()));
    if (docSnap.exists()) {
      return docSnap.data().annual_salary;
    } else {
      return null;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getSavingsRate() {
  try {
    const docSnap = await getDoc(doc(db, "users", getCurrentUser()));
    if (docSnap.exists()) {
      return docSnap.data().savings_rate;
    } else {
      return null;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function updateSalary(salary) {
  try {
    const docRef = await doc(db, "users", getCurrentUser());
    await updateDoc(docRef, {
      annual_salary: salary
    })
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function updateSavingsRate(rate) {
  try {
    const docRef = await doc(db, "users", getCurrentUser());
    await updateDoc(docRef, {
      savings_rate: rate
    })
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function updateExpenses(expense) {
  try {
    const docRef = await doc(db, "users", getCurrentUser());
    await updateDoc(docRef, {
      expenses: arrayUnion(expense)
    })
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

const getCurrentUser = () => {
  const user = auth.currentUser;
  return user ? user.uid : null;
};

export const userActive = () => {
  const user = auth.currentUser;
  return user ? true : false;
};
