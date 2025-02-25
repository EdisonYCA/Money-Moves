import styled from "styled-components"
import { MicrosoftLoginButton, GoogleLoginButton } from "react-social-login-buttons"
import React, { useState } from 'react'
import { auth } from '@/library/firebaseConfig.js'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { HeroPhotoContainer, Image, SpanYourMoney as SpanMake, SpanYourFuture as SpanMove, SpanYourPlan
    as SpanYour
 } from "@/components/landing/Hero";

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
                <DisplayContainer>
                    <HeroPhotoContainer signup>
                        <Image src="/dddynamite_signup.svg"/>
                    </HeroPhotoContainer>
                </DisplayContainer>
                <SignUpContainter>
                    <Header>
                        <SpanMake signup>
                            Make
                        </SpanMake>
                        <SpanYour signup>
                            Your
                        </SpanYour>
                        <SpanMove>
                            Move.
                        </SpanMove>
                    </Header>
                    <StyledGoogledButton />
                    <StyledMicrosoftButton />
                    <Divider>
                        <Line>
                        </Line>
                        <OrContainer>
                            <OrHeader>OR</OrHeader>
                        </OrContainer>
                    </Divider>
                    <Form>
                        <InputContainer>
                            <Icon src="/profile-2.svg"></Icon>
                            <Input type="text" placeholder="Enter your Email" onChange={(e) => {setUserEmail(e.target.value)}}/>
                        </InputContainer>
                        <InputContainer>
                            <Icon src="/lock-2.svg"></Icon>
                            <Input type="text" placeholder="Enter your Password" onChange={(p) => {setUserPassword(p.target.value)}}/>
                        </InputContainer>
                        <SignUpBtn onClick={() => {createUser(email, password)}}>Sign Up</SignUpBtn>
                    </Form>
                </SignUpContainter>
            </PageContainter>
        </>
    );
}

const Icon = styled.img`
    position: absolute;
    left: 12px;
    width: 20px;
    height: 20px;
`;

const InputContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

const PageContainter = styled.div`
    background-color: #FDFFFC;
    width: 100vw;
    height: 100vh;
    display: flex;
`;

const SignUpContainter = styled.div`
    width: 45%;
    height: 100%;
    background-color: #FDFFFC;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledGoogledButton = styled(GoogleLoginButton)`
    background-color: #000000 !important;
    color: white !important;
    margin-top: 20px !important;
    width: 349px !important;
    height: 40px !important;
    font-size: 16px !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    padding: 12px !important;
`;

const StyledMicrosoftButton = styled(MicrosoftLoginButton)`
    background-color: #000000 !important;
    color: white !important;
    width: 349px !important;
    height: 40px !important;
    font-size: 16px !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    padding: 12px !important;
`;

const Header = styled.h1`
    font-size: 2.5rem;
`;

const SignUpBtn = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #2AA84A;
    color: white;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;

    &:hover {
        background-color: #22803a;
        transform: scale(1.05);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    &:active {
        transform: scale(0.95);
    }
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0px;
`;

const Input = styled.input`
    width: 300px;
    padding: 7px;
    padding-left: 40px;
    font-size: 16px;
    border: 1.25px solid rgba(45, 58, 58, 0.69);
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
        border-color: #2AA84A;
        box-shadow: 0 0 8px rgba(42, 168, 74, 0.3);
    }
`;

const Label = styled.label`
    font-size: 16px;
    font-weight: bold;
    color: #2D3A3A;
    margin-top: 30px;
    margin-bottom: 6px;
    display: block;
`;

const Divider = styled.div`
    width: 65%;
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
const DisplayContainer = styled.div`
    background-color: #2AA84A;
    width: 55%;
    height: 100%;
`;

const InvalidEmailText = styled.p``;