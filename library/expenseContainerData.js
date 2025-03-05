import { getExpenses, getSalary, getSavingsRate } from "@/backend/Database";

const formatSalary = async () => {
    const userSalary = await getSalary();

    if (userSalary == 0) {
        return "$0k"
    } 
    return `$${(userSalary / 12).toFixed(1)}k`;
}

const formatExpenses = async () => {
    const userExpenses = await getExpenses();

    const expensesAmount = 0;

    for(const e of userExpenses){
        expensesAmount += e.amount;
    }

    return `$${expensesAmount}k`;
}

const formatUsersSavingRate = async () => {
    const usersSavingsRate = await getSavingsRate();
    return `${(usersSavingsRate / 12).toFixed(1)}%`;
}

const formatNetIncome = async () => {
    const userSalary = await getSalary();
    const userExpenses = await getExpenses();
    return `$${((userSalary / 12).toFixed(1)) - ((userExpenses / 12).toFixed(1))}k`
}

export const expenseContainerData = [
    ["#1d6829", "Monthly Income", formatSalary()],
    ["#2AA84A", "Monthly Expenses", formatExpenses()],
    ["#2D3A3A", "Monthly Net Income", formatNetIncome()],
    ["black", "Monthly Savings Rate", formatUsersSavingRate()],
  ];