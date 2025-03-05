import { setDoc, doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db, auth } from "@/library/firebaseConfig.js";
import transactions from "@/pages/dashboard/transactions";

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

export async function getExpensesCategories() {
  const categories = []

  try {
    const expenses = await getExpenses();
    for (const e of expenses){
      categories.push(e.expense_name)
    }
    return categories
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getCategoryData() {
  const categorieData = []

  try {
    const expenses = await getExpenses();
    for (const e of expenses){
      categorieData.push(e.amount)
    }
    return categorieData
  } catch (err) {
    console.error(err);
    return [];
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

export async function updateAccounts(access_token, item_id, uid) {
  try {
    const docRef = await doc(db, "users", uid);
    await updateDoc(docRef, {
      accounts: arrayUnion({access_token: access_token, item_id: item_id})
    })
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function getAccounts() {
  try {
    const docSnap = await getDoc(doc(db, "users", getCurrentUser()));
    if (docSnap.exists()) {
      return docSnap.data().accounts;
    } else {
      return null;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getTransactions() {
  try {
    const docSnap = await getDoc(doc(db, "users", getCurrentUser()));
    if (docSnap.exists()) {
      return docSnap.data().transactions;
    } else {
      return null;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function updateNewTransactions(newTransactions) {
  try {
    const docRef = await doc(db, "users", getCurrentUser());
    await updateDoc(docRef, {
      transactions: arrayUnion(...newTransactions)
    })
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function filterTransactions() {
  try {
    const docRef = await doc(db, "users", uid);
    await updateDoc(docRef, {
      accounts: arrayUnion({access_token: access_token, item_id: item_id})
    })
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function updateTransactions() {
  try {
    const docRef = await doc(db, "users", uid);
    await updateDoc(docRef, {
      accounts: arrayUnion({access_token: access_token, item_id: item_id})
    })
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export const getCurrentUser = () => {
  const user = auth.currentUser;
  return user ? user.uid : null;
};

export const userActive = () => {
  const user = auth.currentUser;
  return user ? true : false;
};
