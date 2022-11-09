import React from "react";
import { Link } from "react-router-dom";
import "./index.css"

function Navbar() {
  return (
    <nav className="navbar">
      <a className = "site-title">Duke | Swipe-o-Matic</a>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login"> Sign In</Link>
        </li> 
      </ul>
    </nav>
  );
}

export default Navbar;