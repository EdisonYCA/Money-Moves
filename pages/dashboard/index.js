import DashNavBar from "@/components/Dashboard/NavBar";
import styled from "styled-components";
import { BarChart } from "@/components/Graphs/Bar";
export default function Dashboard() {
  return (
    <PageContainer>
      <NavigationPanel></NavigationPanel>

      <MainContentContainer>
        <DashNavBar />
        <MoneyOverview>
          <ExpenseContainer color="#1d6829">
            <ExpenseText>Monthly Income</ExpenseText>
            <ExpenseHeader>$4.1k</ExpenseHeader>
          </ExpenseContainer>
          <ExpenseContainer color="#2AA84A">
            <ExpenseText>Monthly Expenses</ExpenseText>
            <ExpenseHeader>$2k</ExpenseHeader>
          </ExpenseContainer>
          <ExpenseContainer color="#2D3A3A">
            <ExpenseText>Net Income</ExpenseText>
            <ExpenseHeader>$1.1k</ExpenseHeader>
          </ExpenseContainer>
          <ExpenseContainer>
            <ExpenseText color="black">Savings Rate</ExpenseText>
            <ExpenseHeader color="black">3.2%</ExpenseHeader>  
          </ExpenseContainer>
        </MoneyOverview>
        <TransactionsAnalytics>
          <GraphContainer>
            <BarChart/>
          </GraphContainer>
          <PieContainer>
            
          </PieContainer>
          <TransactionsContainer>

          </TransactionsContainer>
        </TransactionsAnalytics>
        <InvestmentsAndBills>
        </InvestmentsAndBills>
      </MainContentContainer>
      {/* <Navbar dashboard={true}></Navbar>
      <PaycheckContainer>
        <ExpenseContainer>
          <ExpenseHeader>$4,0000</ExpenseHeader>
          <ExpenseText>TOTAL INCOME</ExpenseText>
        </ExpenseContainer>
        <ExpenseContainer>
          <ExpenseHeader expense>$3,0000</ExpenseHeader>
          <ExpenseText>TOTAL EXPENSES</ExpenseText>
        </ExpenseContainer>
        <ExpenseContainer>
          <ExpenseHeader>$1,0000</ExpenseHeader>
          <ExpenseText>NET INCOME</ExpenseText>
        </ExpenseContainer>
      </PaycheckContainer>
      <BarChartContainer>
        <BarChart/>
      </BarChartContainer>
*/}
    </PageContainer>
  );
}

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
  padding-top: 80px;
`;

const ExpenseContainer = styled.div`
  width: 210px; /* Increased for better visibility */
  height: 100px;
  background-color: ${props => props.color ? props.color : 'white'};
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
  width: 48%;
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
  display: flex;
  background-color: black;
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
  color: ${props => props.color ? props.color : 'white'};
  font-size: 2.5rem;
  margin-top: 20px;
`;

const ExpenseText = styled.p`
  color: ${props => props.color ? props.color : 'white'};
`;
