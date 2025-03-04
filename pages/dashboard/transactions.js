import styled from "styled-components";

export default function transactions() {
  const headers = [
    { id: 1, label: "Account" },
    { id: 2, label: "Balance" },
    { id: 3, label: "Account Number" },
  ];

  return (
    <PageContainer>
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
            <Tr>
              <Td>Uber</Td>
              <Td>Well's Fargo Checking</Td>
              <Td>$36.55</Td>
            </Tr>
            <Tr>
              <Td>Starbucks</Td>
              <Td>Chase Savings</Td>
              <Td>$4.25</Td>
            </Tr>
            <Tr>
              <Td>Amazon</Td>
              <Td>Bank of America</Td>
              <Td>$120.99</Td>
            </Tr>
            
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