export default function ExpenseContainer ({color, text, header}) {
    return (
        <>
            <ExpenseContainer color={color}>
                <ExpenseText>{text}</ExpenseText>
                <ExpenseHeader>{header}</ExpenseHeader>
            </ExpenseContainer>
        </>
    );
}

const ExpenseContainer = styled.div`
  width: 210px; /* Increased for better visibility */
  height: 100px;
  background-color: ${props => props.color ? props.color : 'white'};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  justify-content: center;
  padding: 10px;
  border-radius: 16px; 

  &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

const ExpenseHeader = styled.p`
  color: ${props => props.color ? props.color : 'white'};
  font-size: 2.5rem;
  margin-top: 20px;
`;

const ExpenseText = styled.p`
  color: ${props => props.color ? props.color : 'white'};
`;
