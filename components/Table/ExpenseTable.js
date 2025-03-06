import styled from "styled-components";
import { useStateContext } from "@/context/StateContext";

export default function ExpenseTable() {
  const {expenseArr} = useStateContext();

  return (
    <StyledTable>
      <tbody>
        { expenseArr ? expenseArr.map((expenseObj, i) => (
          <Tr key={i}>
            <Td>{expenseObj.expense_name}</Td>
            <Td>${expenseObj.amount}</Td>
            <Td>
              {new Date(expenseObj.date.seconds * 1000).toLocaleDateString()}
            </Td>
          </Tr>
        )) : <Tr>
              <Td>Try Adding Your First Expense!</Td>
              <Td>$0</Td>
              <Td>(new Date()).toLocaleDateString()</Td>
          </Tr>}
      </tbody>
    </StyledTable>
  );
}

const StyledTable = styled.table`
  border-collapse: collapse;
  font-size: 13px;
  width: 100%;
`;

const Tr = styled.tr`
  padding: 12px;
  border-bottom: 1px solid #eee;
`;

const Td = styled.td`
  padding: 12px;
  color: #555;
`;
