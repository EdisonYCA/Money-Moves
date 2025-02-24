import Navbar from "@/components/landing/Navbar";
import styled from "styled-components";
import { BarChart } from "@/components/Graphs/Bar";
export default function Dashboard() {
  return (
    <PageContainer>
      <Navbar dashboard={true}></Navbar>
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
    </PageContainer>
  );
}
const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
`;

const PaycheckContainer = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: left;
`;

const ExpenseContainer = styled.div`
  width: 500px;
  height: 200px;
  background-color: white;
  margin: 0 90px 0 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
`;

const ExpenseHeader = styled.h1`
  color: ${props => props.expense ? 'red' : 'green'};
  font-size: 50px;
`;
const ExpenseText = styled.h5`
  color: grey;
  font-size: 40px;
`;

const BarChartContainer = styled.div`
    width: 49%;
    height: 2000px;
    display: flex;
    background-color: red;
    margin-left: 90px;
`;

