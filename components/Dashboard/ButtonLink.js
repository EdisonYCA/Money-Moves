import styled from "styled-components";
import Link from "next/link";

export default function ButtonLink({ icon, text, href }) {
  return (
    <BLink href={href}>
      <Icon src={icon} />
      <Span>{text}</Span>
    </BLink>
  );
}

const Span = styled.span``;

const BLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 30px;
  transition: all 0.3s ease-in-out;
  border-radius: 6px;
  margin-bottom: 15px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1); 
    transform: scale(1.05);
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease-in-out;

  ${BLink}:hover & {
    transform: rotate(10deg) scale(1.1);
  }
`;