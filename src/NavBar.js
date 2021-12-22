import React from "react";
import {Link} from "react-router-dom";
import "./NavBarStyle.css";

const NavBar = () => {
  return (
    <ul className="NavBar">
      <li>
        <Link to="/"> Release Request </Link>
      </li>
      <li>
        <Link to="/emails"> Emails </Link>
      </li>
      {/* <li><Link>CO LOG</Link></li> */}
    </ul>
  );
};

export default NavBar;
