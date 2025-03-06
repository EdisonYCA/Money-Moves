import { useRouter } from "next/router";
import styled from "styled-components";

export const SeeAll = ({ text, routeTo }) => {
  const router = useRouter();

  return (
    <ButtonContainer>
      <AddAccount
        onClick={() => {
          router.push(routeTo);
        }}
      >
        View All {text}
      </AddAccount>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  margin: 20px 0 10px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddAccount = styled.button`
  color: white;
  background-color: #2C497F;
  width: 70%;
  height: 40px;
  font-size: 15px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: grey;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
