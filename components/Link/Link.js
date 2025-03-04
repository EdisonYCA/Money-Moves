import { usePlaidLink } from "react-plaid-link";
import { useStateContext } from "@/context/StateContext";
import styled from "styled-components";

export default function Link() {
  const { linkToken, user } = useStateContext();
  localStorage.setItem("linkToken", JSON.stringify(user.uid));

  const onSuccess = async (public_token) => {
    try {
      const response = await fetch("/api/createAccessToken", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ public_token: public_token }),
      });

      if (response.ok) {
        console.log("success");
      } else {
        const error = await response.json();
        console.error("Error:", error);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  const config = {
    token: linkToken,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <ButtonContainer>
      <AddAccount
        onClick={() => {
          open();
        }}
        disabled={!ready}
      >
        Add Account
      </AddAccount>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  margin-top: 15px;
  width: 100%;
`;

const AddAccount = styled.button`
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
