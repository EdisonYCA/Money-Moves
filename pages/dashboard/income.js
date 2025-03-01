import { useEffect, useState } from "react";
import Link from "@/components/Link/Link";
import styled from "styled-components";
import TableRow from "@/components/Income/TableRow";

export default function Income() {
  // const [linkToken, setLinkToken] = useState(null);

  // useEffect(() => {
  //     const oldLinkToken = JSON.parse(localStorage.getItem("linkToken"))

  //     if (!oldLinkToken || new Date() >= new Date(oldLinkToken.expiration)){
  //         const fetchData = async () => {
  //             try {
  //                 const response = await fetch("/api/createToken");
  //                 const tokenData = await response.json()
  //                 localStorage.setItem("linkToken", JSON.stringify(tokenData));
  //                 setLinkToken(JSON.stringify(tokenData).link_token)
  //             } catch (err) {
  //                 console.log(err)
  //             }
  //         }
  //         fetchData();
  //     } else {
  //         setLinkToken(oldLinkToken.link_token)
  //     }
  // }, [])

  const fakeData = [
    { id: 1, name: "Salary", amount: 5000, date: "2025-02-28" },
    { id: 2, name: "Freelance", amount: 1200, date: "2025-02-20" },
    { id: 3, name: "Investment", amount: 800, date: "2025-02-15" },
  ];

  return (
    <Page>
      <TableContainer>
        <Table>
          <Thead>
            <tr>
              <Th>Income Source</Th>
              <Th>Amount ($)</Th>
              <Th>Date</Th>
            </tr>
          </Thead>
          <tbody>
            {fakeData.map((entry) => (
              <tr key={entry.id}>
                <Td>{entry.name}</Td>
                <Td>${entry.amount.toLocaleString()}</Td>
                <Td>{entry.date}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Page>
  );
}

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #2D3A3A;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TableContainer = styled.div`
    background-color: #FDFFFC;
    width: 50%;
    height: 80%;
`;

const Table = styled.table`
  width: 100%;
  text-align: left;
  
`;

const Thead = styled.thead`
  color: black;
  text-transform: uppercase;
`;
const Td = styled.td``;

const Th = styled.th`
`;
