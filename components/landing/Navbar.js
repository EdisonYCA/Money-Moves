import styled from 'styled-components';
import Link from 'next/link';

export default function Navbar({dashboard}){
    return(
        <NavLinks>
            {dashboard ? (
                <>
                    <ButtonLink href="/dashboard/statistics">Spending</ButtonLink>
                    <ButtonLink href="/dashboard/profile">Profile</ButtonLink>
                    <ButtonLink href="/dashboard/income">Income</ButtonLink>
                    <ButtonLink href="/dashboard/expenses">Expenses</ButtonLink>
                </>
            ) : 
            (   <>
                    <ButtonLink href="/dashboard">Dashboard</ButtonLink>
                    <ButtonLink href="#blog">Blog</ButtonLink>
                    <ButtonLink href="/auth/login">Login</ButtonLink>
                    <SignUpLink href="/auth/signup">Sign Up</SignUpLink>
                </>
            )
            }
        </NavLinks>
    );
}

const NavLinks = styled.nav`
    background-color: white;
    padding: 13px;
    padding-left: 0px;
    text-align: ${({dashboard}) => (dashboard ? 'left': 'right')};
    position: absolute; 
    z-index: 1;
    width: 100%;
    margin: 0px auto;
`;

const ButtonLink = styled(Link) `
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

const SignUpLink = styled(Link) `
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

const Button = styled.button `
    margin-right: 20px;
`;
