import { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "../Link/Link";
import { expenseHeaders } from "@/library/addExpenseHeaders";
import { accountHeaders } from "@/library/addAccountHeaders";
import { GoBackButton } from "../Page Navigation/GoBackButton";
import { updateExpenses, getExpenses } from "@/backend/Database";
import { useStateContext } from "@/context/StateContext";
import { getAccounts } from "@/backend/Database";

export default function Table({ expense }) {
  const headers = expense ? expenseHeaders : accountHeaders;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState(0);
  const [dueDate, setDueDate] = useState(null);
  const { accounts, expenseArr, setExpenses, setAccounts } = useStateContext();

  const saveExpense = () =>
    updateExpenses({
      expense_name: expenseName,
      amount: Number(amount),
      date: new Date(dueDate),
    });

  useEffect(() => {
    const fetchData = async () => {
      if (expense) {
        const dbExpenses = await getExpenses();
        setExpenses((prevExpenses) => [...dbExpenses]);
      } else {
        const getAccountsArr = async () => {
          try {
            let allAccounts = []
            const accessTokens = await getAccounts();

            for (const acc of accessTokens) {
              const accInfoResponse = await fetch("/api/getAccountInfo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ access_token: acc.access_token }),
              });
              const accInfo = await accInfoResponse.json();
              allAccounts.push(...accInfo.accounts);
            }
            setAccounts(allAccounts)
          } catch (err) {
            console.log(err);
          }
        };

        getAccountsArr();
      }
    };

    fetchData();
  }, [isModalOpen]);

  return (
    <PageContainer>
      <GoBackButton returnTo={"/dashboard"} />
      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              {headers.map((header, i) => (
                <Th key={i}>{header.label}</Th>
              ))}
              <Th />
            </tr>
          </thead>
          <tbody>
            {expense
              ? expenseArr.map((expenseObj, i) => (
                  <Tr key={i}>
                    <Td>{expenseObj.expense_name}</Td>
                    <Td>${expenseObj.amount}</Td>
                    <Td>
                      {new Date(
                        expenseObj.date.seconds * 1000
                      ).toLocaleDateString()}
                    </Td>
                  </Tr>
                ))
              : accounts.map((accountObj, i) => (
                  <Tr key={i}>
                    <Td>{accountObj.name}</Td>
                    <Td>${accountObj.balance}</Td>
                    <Td>{accountObj.subtype.toUpperCase()}</Td>
                  </Tr>
                ))}
          </tbody>
        </StyledTable>
        {!expense && <Link />}
        {expense && (
          <ButtonContainer>
            <AddExpense onClick={() => setIsModalOpen(true)}>
              Add Expense
            </AddExpense>
          </ButtonContainer>
        )}
      </TableContainer>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2>Add Expense</h2>
            <ExpenseForm>
              <label>
                Expense Name:
                <input
                  type="text"
                  placeholder="e.g., Rent"
                  onChange={(e) => {
                    setExpenseName(e.target.value);
                  }}
                />
              </label>
              <label>
                Amount:
                <input
                  type="number"
                  placeholder="$0.00"
                  onChange={(a) => {
                    setAmount(a.target.value);
                  }}
                />
              </label>
              <label>
                Due Date:
                <input
                  type="text"
                  placeholder="03/01/2024"
                  onChange={(d) => {
                    setDueDate(d.target.value);
                  }}
                />
              </label>
              <ButtonGroup>
                <SaveButton
                  onClick={() => {
                    saveExpense();
                    setIsModalOpen(false);
                  }}
                >
                  Save
                </SaveButton>
                <CancelButton onClick={() => setIsModalOpen(false)}>
                  Cancel
                </CancelButton>
              </ButtonGroup>
            </ExpenseForm>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageContainer>
  );
}

const Tr = styled.tr`
  padding: 12px;
  border-bottom: 1px solid #eee;
`;

const Td = styled.td`
  padding: 12px;
  color: #555;
`;

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fdfffc;
  flex-direction: column;
`;

const TableContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 60%;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  color: white;
  background: #2d3a3a;
`;

const ButtonContainer = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const AddExpense = styled.button`
  color: white;
  background-color: red;
  width: 120px;
  height: 40px;
  font-size: 15px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: grey;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  width: 350px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const ExpenseForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    display: flex;
    flex-direction: column;
    font-size: 14px;
  }

  input {
    padding: 8px;
    margin-top: 4px;
    border: 1px solid grey;
    border-radius: 6px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const SaveButton = styled.button`
  background-color: #2aa84a;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: grey;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const CancelButton = styled.button`
  background-color: red;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: grey;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.95);
  }
`;
