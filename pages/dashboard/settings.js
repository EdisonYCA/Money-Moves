import { useState } from "react";
import styled from "styled-components";
import { GoBackButton } from "@/components/Page Navigation/GoBackButton";
import { updateSalary, updateSavingsRate } from "@/backend/Database";

export default function settings() {
  const [salary, setSalary] = useState(50000);
  const [savingsRate, setSavingsRate] = useState(20); 
  const yearlySavings = ((salary * savingsRate) / 100).toFixed(2);

  return (
    <PageContainer>
       <GoBackButton returnTo={"/dashboard"}/>
      <PageTitle>Settings</PageTitle>
      <Section>
        <Header>Annual Salary $</Header>
        <Input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </Section>
      <Section>
        <Header>Savings Rate %</Header>
        <Input
          type="number"
          value={savingsRate}
          onChange={(e) => setSavingsRate(e.target.value)}
        />
      </Section>
      <SavingsRateContainer>
        <p>Annual Savings: <strong>${yearlySavings}</strong></p>
      </SavingsRateContainer>
      <SaveButton onClick={() => {
        updateSalary(salary)
        updateSavingsRate(savingsRate)
      }}>Save Changes</SaveButton>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FDFFFC;
`;

const PageTitle = styled.h1`
  color: #2D3A3A;
  margin-bottom: 20px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 15px;
`;

const Header = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid black;
  border-radius: 6px;
  font-size: 16px;
`;

const SavingsRateContainer = styled.div`
  margin: 15px 0;
  font-size: 16px;
`;

const SaveButton = styled.button`
  color: white;
  background-color: #248232;
  width: 20%;
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
