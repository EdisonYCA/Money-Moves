import styled from "styled-components";
import Link from "../Link/Link";

export default function Table() {
  const headers = [
    { id: 1, label: "Account" },
    { id: 2, label: "Type" },
    { id: 3, label: "Balance" },
  ];

  const accounts = async () => {
    null;
  }


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
            
          </tbody>
        </StyledTable>
        <Link/>
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
  background: #fdfffc;
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

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #eee;
  color: #555;
`;

const TdCheckbox = styled.td`
  border-bottom: 1px solid #eee;
`;

