import styled from "styled-components";
import { GoBackButton } from "@/components/Page Navigation/GoBackButton";
import { useEffect, useState } from "react";
import { getTransactionData } from "@/library/transactionData";
import { headers } from "@/library/transactionTableHeaders";
import { useStateContext } from "@/context/StateContext";

export default function transactions() {
  const {user} = useStateContext();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await getTransactionData()
      console.log(data)
      setTransactions(data || [])
    }
    fetchTransactions()
  }, [user])

  return (
    <PageContainer>
      <GoBackButton returnTo={"/dashboard"}/>
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
            {
              transactions.map((t) => (
                <Tr key={t.transaction_id}>
                  <Td>{t.name}</Td>
                  <Td>${t.amount.toFixed(2)}</Td> 
                  <Td>{t.date}</Td> 
                </Tr>
              ))
            }
          </tbody>
        </StyledTable>
      </TableContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
  color: black;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #eee;
  color: #555;
`;

const TdCheckbox = styled.td`
  border-bottom: 1px solid #eee;
`;

const Tr = styled.tr`
  padding: 12px;
  color: white;
  border-bottom: 1px solid #eee;
`;