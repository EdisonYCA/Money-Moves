import Navbar from "./components/Navbar";
import styled from 'styled-components';


export default function Home() {
  return (
    <>
      <Navbar/>
      <Main>
        <Section>
          <HeadLinerSpan>
            <EyeCatcherContainer>
              <HeadLine>Your Money, Your Plan, Your Future.</HeadLine>
              <HeadLineFollower>Through MoneyMoves you can track your spending, set goals, and make smarter financial decisions.</HeadLineFollower>
              <GetStartedBtn>Get Started</GetStartedBtn>
            </EyeCatcherContainer>
            <EyeCatcherPhoto>
              <Image src="/temp_money.jpg"/>
            </EyeCatcherPhoto>
          </HeadLinerSpan>
        </Section>
        <Section>
            <p> Section 2 </p>
        </Section>
        <Section> 
            <p> Section 3 </p>
        </Section>
      </Main>
    </>
  );
}

const Main = styled.main`

`;

const Section = styled.section`
  background-color: blue; 
  height: 650px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const EyeCatcherContainer = styled.div`
  position: absolute;
  left: 5%;
  top: 10%;
  height: 80%;
  width: 400px;
  padding-left: 15px;
`;

const EyeCatcherPhoto = styled.div`
  background-color: black;
  left: 45%;
  top: 10%;
  height: 80%;
  width: 600px;
  position: absolute;
`;

const HeadLine = styled.h1`
  color: white;
`;

const HeadLineFollower = styled.p`
  color: white;
`;

const GetStartedBtn = styled.button``;

const HeadLinerSpan = styled.span``;
