import styled from "styled-components";
import { useStateContext } from "@/context/StateContext";
export default function TransactionTable() {
  const { transactions } = useStateContext();

  return (
    <StyledTable>
      <tbody>
        {transactions.slice(0, 7).map((t) => (
          <Tr key={t.transaction_id}>
            <Td>{t.name}</Td>
            <Td>${t.amount.toFixed(2)}</Td>
            <Td>{t.date}</Td>
          </Tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

const StyledTable = styled.table`
  border-collapse: collapse;
  font-size: 13px;
`;

const Tr = styled.tr`
  padding: 12px;
  color: white;
  border-bottom: 1px solid #eee;
`;

const Th = styled.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  color: white;
`;

const Td = styled.td`
  padding: 12px;
  color: #555;
`;
