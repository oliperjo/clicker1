import { ReactNode } from "react";
import HoneyJar from "../assets/honey-jar.png";
import styled from "styled-components";
import { colorPalette } from "../styles";
import { Link } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

export const Navbar = ({ children }: Props) => {
  const hasContent = children !== undefined;
  return (
    <Nav hasContent={hasContent}>
      <Link to="/">
        <LogoContainer>
          <LogoImage src={HoneyJar} />
          <LogoTxt>Honey Clicker</LogoTxt>
        </LogoContainer>
      </Link>
      <AboutLink to="/about">About</AboutLink>
      {children}
    </Nav>
  );
};

interface NavProps {
  hasContent: boolean;
}

export const Nav = styled.nav<NavProps>`
  position: fixed;
  top: 0;
  width: 100%;
  background: #ffffffcb;
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.hasContent ? "center" : "left")};
  color: black;
  z-index: 40;
  user-select: none;
`;
const LogoContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoImage = styled.img`
  width: 72px;
  height: 72px;
  margin-left: 8vw;
  flex-shrink: 0;
`;

const AboutLink = styled(Link)`
  font-size: 22px;
  margin-left: 30px;
  color: ${colorPalette.orange};
  text-decoration: underline;
  transition: 0.3s all;
  &:hover {
    text-shadow: 0px 0px 12px ${colorPalette.orange};
  }
`;

const LogoTxt = styled.p`
  font-size: 26px;
  color: ${colorPalette.orange};
  font-weight: bold;
  text-shadow: 0px 0px 4px ${colorPalette.orange};
  transition: 0.3s all;
  ${LogoContainer}:hover > & {
    text-shadow: 0px 0px 12px ${colorPalette.orange};
  }
`;
