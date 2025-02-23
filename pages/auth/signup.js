import styled from "styled-components";
import { MicrosoftLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import React, { useState } from 'react'

export default function Signup(){
    const [email, setUserEmail] = useState('');
    const [validEmail, setValidEmail] = useState('');

    const validateUserEmail = (email) => {
        const emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (emailRegex.test(email)){
            return false
        }
    }

    const handleEmailChange = () => {
        setValidEmail(validateUserEmail(email))
    }


    return (
        <>
            <PageContainter>
                <SignUpContainter>
                    <Logo src="/investments.png"></Logo>
                    <Header>Sign up to start making your move</Header>
                    <GoogleLoginButton />
                    <StyledMicrosoftButton />
                    <Divider>
                        <Line>
                        </Line>
                        <OrContainer>
                            <OrHeader>OR</OrHeader>
                        </OrContainer>
                    </Divider>
                    <Form>
                        <Label>Your Email address</Label>
                        <Input type="text" onChange={(e) => setUserEmail(e.target.value)}/>
                        {validEmail && handleEmailChange(email)}
                        <Label>Password</Label>
                        <Input type="text"/>
                        <SignUpBtn>Sign Up</SignUpBtn>
                    </Form>
                </SignUpContainter>
            </PageContainter>
        </>
    );
}

const PageContainter = styled.div`
    background-color: red;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SignUpContainter = styled.div`
    width: 650px;
    height: 1000px;
    background-color: white;
    display: flex;
    flex-direction: column;
`;

const StyledMicrosoftButton = styled(MicrosoftLoginButton)`
    background-color: white !important;
    color: black !important;
`;

const Logo = styled.img``;

const Header = styled.h1``;

const SignUpBtn = styled.button``;

const Form = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 40%;
`;

const Label = styled.label``;

const Divider = styled.div`
    width: 100%;
    height: 40px;
    background-color: white;
    display: flex;
    align-items: center;
    align-text: center;
    position: relative;
`;

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: grey;
`;

const OrHeader = styled.h6`
    color: grey;
    margin-top: 1px;
`;

const OrContainer = styled.div`
    height: 15px;
    width: 20px;
    background-color: white;
    position: absolute;
    margin-left: 46%;
    text-align: center;
`

const InvalidEmailText = styled.p``;