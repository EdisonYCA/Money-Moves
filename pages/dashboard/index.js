import styled from "styled-components";
import { BarChart } from "@/components/Graphs/Bar";
import { PieChart } from "@/components/Graphs/Pie";
import SideNavBar from "@/components/Dashboard/SideNavBar";
import { useRouter } from "next/router";
import { useStateContext } from "@/context/StateContext";
import { useEffect } from "react";
import { Title } from "chart.js";
import TransactionTable from "@/components/Table/TransactionTable";
import ExpenseTable from "@/components/Table/ExpenseTable";

export default function Dashboard() {
  const { user } = useStateContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  const expenseContainerData = [
    ["#1d6829", "Monthly Income", "$4.1k"],
    ["#2AA84A", "Monthly Expenses", "2k"],
    ["#2D3A3A", "Net Income", "$1.1k"],
    ["black", "Savings Rate", "3.2%"],
  ];

  return (
    <PageContainer>
      <NavigationPanel>
        <Image src="/dashboard_dddynamite.svg" />
        <NavigationHeader>MoneyMoves</NavigationHeader>
        <SideNavBar />
      </NavigationPanel>

      <MainContentContainer>
        <MoneyOverview>
          {expenseContainerData.map(([color, title, amount], i) => (
            <ExpenseContainer key={i} color={color}>
              <ExpenseText>{title}</ExpenseText>
              <ExpenseHeader>{amount}</ExpenseHeader>
            </ExpenseContainer>
          ))}
        </MoneyOverview>
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
            <ButtonContainer>
              <AddAccount
                onClick={() => {
                  router.push("/dashboard/transactions");
                }}
              >
                View All Transactions
              </AddAccount>
            </ButtonContainer>
          </TransactionsContainer>
          <TransactionsContainer>
            <HeaderContainer>
              <Header>Upcoming Expenses</Header>
            </HeaderContainer>
            <ExpenseTable />
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

const ButtonContainer = styled.div`
  margin: 20px 0 10px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddAccount = styled.button`
  color: white;
  background-color: #248232;
  width: 70%;
  height: 40px;
  font-size: 15px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #1d6829;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
