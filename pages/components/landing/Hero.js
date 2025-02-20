import styled from 'styled-components';
import Feature from './Feature';

export default function Hero() {
  return (
    <>
      <Main>
        <Section1>
          <HeroSpan>
            <HeroContainer>
              <HeroTitle>Your Money, Your Plan, Your Future.</HeroTitle>
              <HeroSubtitle>Through MoneyMoves you can track your spending, set goals, and make smarter financial decisions.</HeroSubtitle>
              <GetStartedBtn>Get Started</GetStartedBtn>
            </HeroContainer>
            <HeroPhotoContainer>
              <Image src="/temp_money.jpg"/>
            </HeroPhotoContainer>
          </HeroSpan>
        </Section1>
        <Section2>
            <Feature/>
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
  background-color: blue; 
  height: 650px;
  position: relative;
`;

const Section2 = styled.section`
  background-color: red; 
  height: 650px;
  position: relative;
  text-align: center;
`;

const Section3 = styled.section`
  background-color: green; 
  height: 650px;
  position: relative;
  text-align: center;
`;

const Image = styled.img`
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

const HeroPhotoContainer = styled.div`
  background-color: black;
  left: 45%;
  top: 10%;
  height: 80%;
  width: 700px;
  position: absolute;
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: 3rem;
`;

const HeroSubtitle = styled.p`
  color: white;
  font-size: 1.25rem;
`;

const GetStartedBtn = styled.button``;

const HeroSpan = styled.span``;