import styled from "styled-components";
import Link from "next/link";

export default function SideNavBar() {
  return (
    <NavLinks>
        <ButtonLink href="/dashboard/statistics">Spending</ButtonLink>
    </NavLinks>
  );
}

const NavLinks = styled.nav`
  background-color: white;
`;

const ButtonLink = styled(Link)`
  color: black;
  text-align: center;
  padding: 13px 16px;
  text-decoration: none;

  &:hover {
    background-color: #1d6829;
    transform: scale(1.05);
    color: white;
  }
`;

const SignUpLink = styled(Link)`
  color: black;
  text-align: center;
  padding: 13px 16px;
  text-decoration: none;

  &:hover {
    background-color: #1d6829;
    transform: scale(1.05);
    color: white;
  }
`;
