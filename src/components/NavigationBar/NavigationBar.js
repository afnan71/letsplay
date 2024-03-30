import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons.js";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo" onClick={handleClick}>
          <span>Lets Play</span>
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Facilities
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/blog"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Teams
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/contact"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Challenges
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/LoginSignup"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Signin/SignUp
            </NavLink>
          </li>
        </ul>

        <div className="nav-icon" onClick={handleClick}>
          {click ? (
            <span className="icon">
              <HamburgetMenuOpen />
            </span>
          ) : (
            <span className="icon">
              <HamburgetMenuClose />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
