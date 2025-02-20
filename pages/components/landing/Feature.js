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
    width: 20%;
    height: 20%; 
`;

const Name = styled.h1``;

const Description = styled.p``;

const FeatureContainer = styled.div`
    width: 350px;
    height: 350px;
    background-color: white;
`;