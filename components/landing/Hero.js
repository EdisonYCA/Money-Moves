import styled from 'styled-components';
import {heroFeatureData} from '@/library/heroFeatureData';
import Feature from '@/components/Landing/Feature';
import { useRouter } from "next/router";


export default function Hero() {
  const router = useRouter();

  return (
    <>
      <Page>
        <Section1>
          <HeroSpan>
            <HeroContainer>
              <HeroTitle>
                <SpanYourMoney>
                Your Money, 
                </SpanYourMoney>
                <SpanYourPlan>
                Your Plan, 
                </SpanYourPlan>
                <SpanYourFuture>
                  Your Future.
                </SpanYourFuture>
                </HeroTitle>
              <HeroSubtitle>With MoneyMoves, you can track your spending, view your salary breakdown, and stay on top of upcoming bills to make smarter financial decisions.</HeroSubtitle>
              <GetStartedBtn onClick={() => {router.push("/auth/signup")}}>Get Started</GetStartedBtn>
            </HeroContainer>
            <HeroPhotoContainer>
              <Image src="/dddynamite.svg"/>
            </HeroPhotoContainer>
          </HeroSpan>
        </Section1>
        <Section2>
            {heroFeatureData.map(([title, desc, logo], i) => {
              return <Feature key={i} feature={title} description={desc} logo={logo}></Feature>
            })}
        </Section2>
      </Page>
    </>
  );
}

const Page = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`;

const Section1 = styled.section`
  background-color: #FDFFFC; 
  width: 100vw;
  height: 50%;
  position: relative;
`;

const Section2 = styled.section`
  background-color: #2AA84A; 
  height: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%
`;


export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const HeroContainer = styled.div`
  position: absolute;
  left: 7%;
  top: 10%;
  height: 80%;
  width: 400px;
`;

export const HeroPhotoContainer = styled.div`
  left: ${props => props.signup ? '0' : '45%'};
  top: 10%;
  height: 80%;
  width: 700px;
  position: absolute;
`;

const HeroTitle = styled.h1`
  color: black;
  font-size: 3rem;
  margin-bottom: 10px;
`;

const HeroSubtitle = styled.p`
  color: #2D3A3A;
  font-size: 1.3rem;
  margin-bottom: 20px;
`;

export const SpanYourMoney = styled.span`
  margin-right: ${props => props.signup ? '5px' : '15px'};
`;
export const SpanYourPlan = styled.span`
  color: #2D3A3A;
  margin-right: ${props => props.signup ? '5px' : '15px'};
`;
export const SpanYourFuture = styled.span`
  color: #248232;
`;
const GetStartedBtn = styled.button`
  color: white;
  background-color: #248232;
  width: 120px;
  height: 40px;
  font-size: 15px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  
  &:hover {
    background-color: #1d6829;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const HeroSpan = styled.span``;