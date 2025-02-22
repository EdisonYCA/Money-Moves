import styled from "styled-components";

export default function Feature({logo, feature, description}){
    return (
        <>
            <FeatureContainer>
                <Logo src={logo}></Logo>
                <Name>{feature}</Name>
                <Description>{description}</Description>
            </FeatureContainer>
        </>
    );
}

const Logo = styled.img`
    width: 10%;
    height: 10%; `;

const Name = styled.h1``;

const Description = styled.p``;

const FeatureContainer = styled.div`
    width: 300px;
    height: 450px;
    background-color: white;
    margin: 10px;
    display: flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    text-align: center; 
`;