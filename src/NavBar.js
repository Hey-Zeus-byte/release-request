import React from "react";
import {Link} from "react-router-dom";
import "./NavBarStyle.css";

const NavBar = () => {
  return (
    <ul className="NavBar">
      <li>
        <Link to="/release-request"> Release Request </Link>
      </li>
      <li>
        <Link to="/release-request/emails"> Emails </Link>
      </li>
      {/* <li><Link>CO LOG</Link></li> */}
    </ul>
  );
};

export default NavBar;
