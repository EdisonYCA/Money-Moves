import styled from "styled-components"
import { MicrosoftLoginButton, GoogleLoginButton } from "react-social-login-buttons"
import React, { useState } from 'react'
import { auth } from '@/library/firebaseConfig.js'
import { createUserWithEmailAndPassword } from "firebase/auth"

export default function Signup(){
    console.log(auth)
    
    const [email, setUserEmail] = useState('');
    const [password, setUserPassword] = useState('');

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
                const user = userCredential.user;
                console.log(`User ${user.email} signed up correctly`)
            }
        ).catch(
            
            (error) => {
                const errorCode  = error.code
                const errorMessage = error.message
    
                console.error(`Error ${errorCode}: ${errorMessage}`)
            }
        )
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
                        <Input type="text" onChange={(e) => {setUserEmail(e.target.value)}}/>
                        <Label>Password</Label>
                        <Input type="text" onChange={(p) => {setUserPassword(p.target.value)}}/>
                        <SignUpBtn onClick={() => {createUser(email, password)}}>Sign Up</SignUpBtn>
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