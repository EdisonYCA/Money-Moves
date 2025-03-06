import styled from "styled-components";
import Link from "next/link";
import { useStateContext } from "@/context/StateContext";
import { useRouter } from "next/router";


export default function Navbar() {
  const { user, setUser, setFirstLoad, setSalary, 
    setSavingsRate, setTransactions, setLinkToken, setExpenses, setAccounts, setMoneyOverview
  } = useStateContext();
  const router = useRouter();

  const logOut = (e) => {
    e.preventDefault();
    setUser(null);
    setFirstLoad(true);
    setSalary(0);
    setSavingsRate(0);
    setLinkToken(null);
    setTransactions([]);
    setExpenses([]);
    setAccounts([]);
    setMoneyOverview(null);
    router.push("/");
  }

  return (
    <NavLinks>
      <>
        {user && <ButtonLink href="/dashboard">Dashboard</ButtonLink>}
        {user ? (<LogOut onClick={logOut}>Log Out</LogOut>)
            :
            <>
                <ButtonLink href="/auth/login">Log In</ButtonLink>
                <SignUpLink href="/auth/signup">Sign Up</SignUpLink>
            </>
        }
      </>
    </NavLinks>
  );
}

const NavLinks = styled.nav`
  background-color: white;
  padding: 13px;
  padding-left: 0px;
  text-align: right;
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

const LogOut = styled.a`
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

const Button = styled.button`
  margin-right: 20px;
`;
