import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
   return (

<nav>
<ul className="navbar">
      <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/about">About</Link></li> */}
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
