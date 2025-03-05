import { getAccounts, updateNewTransactions, getTransactions } from "@/backend/Database";

export const getTransactionData = async () => {
  try {
    const accounts = await getAccounts();
    const results = await fetch("/api/transactionsSync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ access_token: accounts[0].access_token, cursor: null }),
    });

    const {added, removed, modified} = await results.json();

    const filteredAdded = filterTransactionData(added)
    const filteredRemoved = filterTransactionData(removed)
    const filteredModified = filterTransactionData(removed)

    await updateNewTransactions(filteredAdded);

    const finalTransactions = await getTransactions();
    return finalTransactions || []

  } catch (err) {
    console.log(err);
  }
};

const filterTransactionData = (transactions) => {
    return transactions.map(trans => ({
      name: trans.name,
      transactionID: trans.transaction_id,
      amount: trans.amount,
      date: trans.authorized_date
    }));
};
  
