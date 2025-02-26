import styled from "styled-components";
import Link from "next/link";

export default function DashNavBar() {
  return (
    <NavLinks>
      <>
      </>
    </NavLinks>
  );
}

const NavLinks = styled.nav`
  background-color: white;
  padding: 30px;
  padding-left: 0px;
  text-align: 'left';
  position: absolute;
  z-index: 1;
  width: 100%;
  margin: 0px auto;
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
