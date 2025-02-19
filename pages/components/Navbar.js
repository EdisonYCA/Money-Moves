import styled from 'styled-components';

export default function Navbar(){
    return(
        <Nav>
            <Link href="#dasboard">Dashboard</Link>
            <Link href="#blogs">Blog</Link>
            <Button>Log In</Button>
            <Button>Try Money Moves</Button>
        </Nav>
    );
}

const Nav = styled.nav`
    background-color:rgb(234, 0, 255);
    padding: 10px;
    text-align: right;
`;

const Link = styled.a `
    margin-right: 20px;
`;

const Button = styled.button `
    margin-right: 20px;
`;


