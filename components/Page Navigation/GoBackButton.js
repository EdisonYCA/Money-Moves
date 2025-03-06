import styled from "styled-components";
import ButtonLink from "../Dashboard/ButtonLink";
export const GoBackButton = ({returnTo}) => {
    return (
        <ButtonContainer>
            <ButtonLink icon={"/left-arrow.svg"} text={""} href={returnTo}/>
        </ButtonContainer>
    );
}

const ButtonContainer = styled.div`
    width: 100%;
`;

