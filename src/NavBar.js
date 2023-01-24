import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ContentWrapper } from "./pages/ContentWrapper";

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  font-size: 20px;
`;

const Links = styled.div`
  display: flex;
  gap: 100px;

  .link {
    text-decoration: none;
    color: black;
  }
`;

const NavBar = () => {
  return (
    <ContentWrapper>
      <NavBarContainer>
        <Title>GSCF</Title>
        <Links>
          <Link to="/" className="link">
            Emails
          </Link>
          <Link to="/release-request" className="link">
            Release Request
          </Link>
        </Links>
      </NavBarContainer>
    </ContentWrapper>
  );
};

export default NavBar;
