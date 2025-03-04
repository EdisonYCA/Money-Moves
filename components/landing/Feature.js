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
    width: 80px;
    height: 80px;
`;

const Name = styled.h1`
    margin-top: 40px;
`;

const Description = styled.p`
    margin-top: 40px;
    color: #2D3A3A;
`;

const FeatureContainer = styled.div`
    width: 450px;
    height: 400px;
    background-color: white;
    margin: 10px;
    padding: 10px;
    display: flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    text-align: center; 
    background-color: #FDFFFC; 
    border-radius: 16px; 
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
    padding: 20px
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
    }
`;