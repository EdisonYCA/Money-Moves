import styled from 'styled-components';
import Link from 'next/link';

export default function Navbar(){
    return(
        <NavLinks>
            <ButtonLink href="/auth/login">Dashboard</ButtonLink>
            <ButtonLink href="#blog">Blog</ButtonLink>
            <ButtonLink href="/auth/login">Login</ButtonLink>
            <ButtonLink href="/auth/signup">Sign Up</ButtonLink>
        </NavLinks>
    );
}

const NavLinks = styled.nav`
    background-color:rgb(234, 0, 255);
    padding: 10px;
    text-align: right;
`;

const ButtonLink = styled(Link) `
    margin-right: 20px;
`;

const Button = styled.button `
    margin-right: 20px;
`;


