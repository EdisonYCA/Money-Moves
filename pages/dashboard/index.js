import styled from "styled-components";
import { BarChart } from "@/components/Graphs/Bar";
import SideNavBar from "@/components/Dashboard/SideNavBar";
import { useRouter } from "next/router";
import { useStateContext } from "@/context/StateContext";
import { useEffect } from "react";
import { Title } from "chart.js";
import TransactionTable from "@/components/Table/TransactionTable";

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
            <BarChart />
          </GraphContainer>
          <PieContainer></PieContainer>
          <TransactionsContainer>
            <HeaderContainer>
              <Header>Transactions</Header>
            </HeaderContainer>
            <TransactionTable />
            <ButtonContainer>
              <AddAccount onClick={() => {router.push('/dashboard/transactions')}}>View All Transactions</AddAccount>
            </ButtonContainer>
          </TransactionsContainer>
        </TransactionsAnalytics>
        <InvestmentsAndBills></InvestmentsAndBills>
      </MainContentContainer>
    </PageContainer>
  );
}

const HeaderContainer = styled.div`
  padding: 10px;
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
  height: 100vh;
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
  gap: 10px;
  padding: 13px;
`;

const GraphContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  background-color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 16px;
`;

const PieContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  background-color: yellow;
`;

const TransactionsContainer = styled.div`
  width: 25%;
  height: 100%;
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const InvestmentsAndBills = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  background-color: green;
`;

const Investments = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  margin: 0 90px 0 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Bills = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  margin: 0 90px 0 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
