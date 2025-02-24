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
                    <ButtonLink href="/dashboard"></ButtonLink>
                    <ButtonLink href="#blog">Blog</ButtonLink>
                    <ButtonLink href="/auth/login">Login</ButtonLink>
                    <ButtonLink href="/auth/signup">Sign Up</ButtonLink>
                </>
            )
            }
        </NavLinks>
    );
}

const NavLinks = styled.nav`
    background-color: #3F6C51;
    padding: 13px;
    padding-left: 0px;
    text-align: ${({dashboard}) => (dashboard ? 'right': 'left')};
    box-shadow: 0px 10px 15px hsla(0, 0.00%, 0.00%, 0.46);
`;

const ButtonLink = styled(Link) `
    color: white;
    text-align: center;
    padding: 13px 16px;
    text-decoration: none;
    &:hover{
            background-color: #4a4a4a;
    }
`;

const Button = styled.button `
    margin-right: 20px;
`;
