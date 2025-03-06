import {
  getAccounts,
  updateNewTransactions,
  getTransactions,
} from "@/backend/Database";

export const getTransactionData = async () => {
  try {
    const accounts = await getAccounts();
    let allTransactions = [];

    for (const account of accounts) {
      const response = await fetch("/api/transactionsSync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_token: account.access_token,
          cursor: null,
        }),
      });

      const { added, removed, modified } = await response.json();

      const filteredAdded = filterTransactionData(added);

      await updateNewTransactions(filteredAdded);

      allTransactions.push(
        ...filteredAdded
      );
    }

    const finalTransactions = await getTransactions();
    return finalTransactions || allTransactions;
  } catch (err) {
    console.log(err);
  }
};

const filterTransactionData = (transactions) => {
  return transactions.map((trans) => ({
    name: trans.name,
    transactionID: trans.transaction_id,
    amount: trans.amount,
    date: trans.authorized_date,
  }));
};
