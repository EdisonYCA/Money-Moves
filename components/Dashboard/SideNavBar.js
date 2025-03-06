import styled from "styled-components";
import { sideNavBarData } from "@/library/sideNavbarData";
import ButtonLink from "./ButtonLink";

export default function SideNavBar() {
  return (
    <NavLinks>
      {sideNavBarData.map(([icon, text, href], i) => {
        return <ButtonLink icon={icon} text={text} href={href} key={i}/>
      })}
    </NavLinks>
  );
}

const NavLinks = styled.nav`
  margin-top: 50px;
  display: block;
`;

