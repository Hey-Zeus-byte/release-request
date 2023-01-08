import React from "react";
import { Link } from "react-router-dom";
import { ContentWrapper } from "./pages/ContentWrapper";
import "./NavBarStyle.css";

const NavBar = () => {
  return (
    <ContentWrapper>
      <ul className="NavBar">
        <li>
          <Link to="/"> Release Request </Link>
        </li>
        <li>
          <Link to="/emails"> Emails </Link>
        </li>
      </ul>
    </ContentWrapper>
  );
};

export default NavBar;
