import { getExpenses, getSalary, getSavingsRate, userActive } from "@/backend/Database";

const formatSalary = async () => {
    const userSalary = await getSalary();

    if (userSalary == 0) {
        return "$0k"
    } 
    return `$${((userSalary / 12) / 1000).toFixed(1)}k`;
}

const formatExpenses = async () => {
    const userExpenses = await getExpenses();

    let expensesAmount = 0;

    for(const e of userExpenses){
        expensesAmount += e.amount;
    }

    return `$${expensesAmount / 1000}k`;
}

const formatUsersSavingRate = async () => {
    const usersSavingsRate = await getSavingsRate();
    return `${(usersSavingsRate / 12).toFixed(1)}%`;
}

const formatNetIncome = async () => {
        return `$${0}k`
}

export const expenseContainerData = [
    ["#1d6829", "Monthly Income", userActive() ? formatSalary() : "$0k"],
    ["#2AA84A", "Monthly Expenses", userActive() ? formatExpenses() : "$0k"],
    ["#2D3A3A", "Monthly Net Income", userActive() ? formatNetIncome() : "$0k"],
    ["black", "Monthly Savings Rate", userActive() ? formatUsersSavingRate() : "0.0%" ],
  ];