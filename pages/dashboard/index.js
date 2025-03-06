import styled from "styled-components";
import { PieChart } from "@/components/Graphs/Pie";
import SideNavBar from "@/components/Dashboard/SideNavBar";
import { useRouter } from "next/router";
import { useStateContext } from "@/context/StateContext";
import { useEffect } from "react";
import TransactionTable from "@/components/Table/TransactionTable";
import ExpenseTable from "@/components/Table/ExpenseTable";
import { useState } from "react";
import { getSalary, getSavingsRate } from "@/backend/Database";
import { getTransactionData } from "@/library/transactionData";
import { SeeAll } from "@/components/Dashboard/SeeAllButton";
import { getExpenses } from "@/backend/Database";

export default function Dashboard() {
  const {
    user,
    salary,
    expenseArr,
    savingsRate,
    setTransactions,
    setExpenses,
    setSalary,
    setSavingsRate,
    firstLoad,
    setFirstLoad,
    moneyOverview, 
    setMoneyOverview,
    accounts
  } = useStateContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  useEffect(() => {
    if (!firstLoad) return;
  
    const formatDashboard = async () => {
      try {
        const [transactionsData, dbExpenses, dbSalary, dbSavingsRate] =
          await Promise.all([
            getTransactionData(),
            getExpenses(),
            getSalary(),
            getSavingsRate(),
          ]);
  
        setTransactions(transactionsData || []);
        setExpenses(dbExpenses);
        setSalary(dbSalary);
        setSavingsRate(dbSavingsRate);
  
        setFirstLoad(false);
      } catch (err) {
        console.log("Error in formatDashboard:", err);
      }
    };
  
    formatDashboard();
  }, [firstLoad]);
  
  const updateMoneyOverview = (expenseArr, salary, savingsRate) => {
    let expensesAmount = expenseArr.reduce((sum, e) => sum + e.amount, 0);
  
    const expenseContainerData = [
      ["#1d6829", "Monthly Income", `$${(salary / 12 / 1000).toFixed(1)}k`],
      [
        "#2AA84A",
        "Monthly Expenses",
        `$${(expensesAmount / 1000).toFixed(1)}k`,
      ],
      [
        "#2D3A3A",
        "Monthly Net Income",
        `$${(((salary / 12) - expensesAmount) / 1000).toFixed(1)}k`,
      ],
      ["black", "Monthly Savings Rate", `${(savingsRate / 100).toFixed(1)}%`],
    ];
  
    const updatedExpenseData = expenseContainerData.map(
      ([color, title, amount], i) => (
        <ExpenseContainer key={i} color={color}>
          <ExpenseText>{title}</ExpenseText>
          <ExpenseHeader>{amount}</ExpenseHeader>
        </ExpenseContainer>
      )
    );
  
    setMoneyOverview(updatedExpenseData);
  };
  
  useEffect(() => {
    updateMoneyOverview(expenseArr, salary, savingsRate);
  }, [salary, savingsRate, expenseArr]);

  return (
    <PageContainer>
      <NavigationPanel>
        <Image src="/dashboard_dddynamite.svg" />
        <NavigationHeader>MoneyMoves</NavigationHeader>
        <SideNavBar />
      </NavigationPanel>

      <MainContentContainer>
        <MoneyOverview>{moneyOverview}</MoneyOverview>
        <TransactionsAnalytics>
          <GraphContainer>
            <HeaderContainer>
              <Header>Expenses</Header>
            </HeaderContainer>
            <PieDiv>
              <PieChart />
            </PieDiv>
          </GraphContainer>
        </TransactionsAnalytics>

        <TransactionsAndBills>
          <TransactionsContainer>
            <HeaderContainer>
              <Header>Transactions</Header>
            </HeaderContainer>
            <TransactionTable />
            <SeeAll
              text={"Transactions"}
              routeTo={"/dashboard/transactions"}
              isExpense={false}
            />
          </TransactionsContainer>
          <TransactionsContainer>
            <HeaderContainer>
              <Header>Upcoming Expenses</Header>
            </HeaderContainer>
            <ExpenseTable />
            <SeeAll text={"Expenses"} routeTo={"/dashboard/expenses"} />
          </TransactionsContainer>
        </TransactionsAndBills>
      </MainContentContainer>
    </PageContainer>
  );
}

const PieDiv = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.div`
  padding: 10px;
  width: 100%;
`;

const Header = styled.h1`
  font-size: 20px;
  color: black;
`;

export const Image = styled.img`
  width: 150px;
  height: 120px;
`;

const PageContainer = styled.div`
  width: 100vw;
  height: 950px;
  background-color: #f0f0f0;
  display: flex;
`;

const NavigationPanel = styled.div`
  width: 20%;
  height: 100%;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavigationHeader = styled.h1`
  color: #f0f0f0;
  font-size: 1.7rem;
`;

const MainContentContainer = styled.div`
  width: 80%;
  height: 100%;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
`;

const MoneyOverview = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin: 20px 0 20px 0;
`;

const ExpenseContainer = styled.div`
  width: 210px; /* Increased for better visibility */
  height: 100px;
  background-color: ${(props) => (props.color ? props.color : "white")};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  justify-content: center;
  padding: 10px;
  border-radius: 16px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

const TransactionsAnalytics = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

const GraphContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 16px;
  margin: 0 10px 0 10px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

const TransactionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  max-height: 400px;
  overflow-y: auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 16px;
  margin-left: 10px;
  margin-right: 10px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

const TransactionsAndBills = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  gap: 5px;
  margin: 10px 0 10px 0;
  background-color: #f0f0f0;
`;

const ExpenseHeader = styled.p`
  color: ${(props) => (props.color ? props.color : "white")};
  font-size: 2.5rem;
  margin-top: 20px;
`;

const ExpenseText = styled.p`
  color: ${(props) => (props.color ? props.color : "white")};
`;
