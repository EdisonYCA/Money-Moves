import styled from "styled-components";

export default function ExpenseTable() {
  return (
    <StyledTable>
      <tbody>
        <Tr>
          <Td>Rent</Td>
          <Td>$1,800</Td>
          <Td>03/01/2024</Td>
        </Tr>
        <Tr>
          <Td>Groceries</Td>
          <Td>$250.75</Td>
          <Td>03/01/2024</Td>
        </Tr>
        <Tr>
          <Td>Electricity Bill</Td>
          <Td>$95.30</Td>
          <Td>03/01/2024</Td>
        </Tr>
        <Tr>
          <Td>Internet</Td>
          <Td>$60.00</Td>
          <Td>03/01/2024</Td>
        </Tr>
        <Tr>
          <Td>Car Insurance</Td>
          <Td>$120.50</Td>
          <Td>03/01/2024</Td>
        </Tr>
        <Tr>
          <Td>Gas</Td>
          <Td>$45.90</Td>
          <Td>03/01/2024</Td>
        </Tr>
        <Tr>
          <Td>Streaming Services (Netflix, Hulu)</Td>
          <Td>$29.99</Td>
          <Td>03/01/2024</Td>
        </Tr>
        <Tr>
          <Td>Dining Out</Td>
          <Td>$78.25</Td>
          <Td>03/01/2024</Td>
        </Tr>
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
