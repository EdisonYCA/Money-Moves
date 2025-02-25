import styled from 'styled-components';
import Feature from './Feature';
import { features } from './features';

export default function Hero() {

  return (
    <>
      <Main>
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
              <HeroSubtitle>Through MoneyMoves you can track your spending, set goals, and make smarter financial decisions.</HeroSubtitle>
              <GetStartedBtn>Get Started</GetStartedBtn>
            </HeroContainer>
            <HeroPhotoContainer>
              <Image src="/dddynamite.svg"/>
            </HeroPhotoContainer>
          </HeroSpan>
        </Section1>
        <Section2>
            {features.map(([title, desc, logo], i) => {
              return <Feature key={i} feature={title} description={desc} logo={logo}></Feature>
            })}
        </Section2>
        <Section3>
            <p> Section 3 </p>
        </Section3>
      </Main>
    </>
  );
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
`;

const Section1 = styled.section`
  background-color: #FDFFFC; 
  height: 650px;
  position: relative;
`;

const Section2 = styled.section`
  background-color: #2AA84A; 
  height: 650px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section3 = styled.section`
  background-color: #FDFFFC; 
  height: 650px;
  position: relative;
  text-align: center;
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