import Navbar from "./components/Navbar";
import styled from 'styled-components';


export default function Home() {
  return (
    <>
      <Navbar/>
      <Main>
        <Section>
          <Image src="/temp_money.jpg"/>
          <EyeCatcherContainer>
            <HeadLine>Your Money, Your Plan, Your Future.</HeadLine>
            <HeadLineFollower>Through MoneyMoves you can track your spending, set goals, and make smarter financial decisions.</HeadLineFollower>
          </EyeCatcherContainer>
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
  position: absolute;
`;

const EyeCatcherContainer = styled.div`
  position: absolute;
  background-color: blue;
  left: 5%;
  top: 10%;
  height: 80%;
  width: 400px;
  padding-left: 15px;
`;

const HeadLine = styled.h1`
  color: white;
`;

const HeadLineFollower = styled.p`
  color: white;
`;