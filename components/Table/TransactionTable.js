import styled from "styled-components";
export default function TransactionTable() {
  const headers = [
    { id: 1, label: "Name" },
    { id: 2, label: "Account" },
    { id: 3, label: "Amount" },
  ];

  return (
    <StyledTable>
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
