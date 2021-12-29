import React from "react";
import { StyledNav } from "./Nav.styled";
import Logo from "../icons/Logo";

function Nav() {
  return (
    <StyledNav>
      <Logo />

      <ul className="nav-links">
        <li className="nav-link">
          <a href="/">Features</a>
        </li>
        <li className="nav-link">
          <a href="/">Team</a>
        </li>
        <li className="nav-link">
          <a href="/">Sign in</a>
        </li>
      </ul>
    </StyledNav>
  );
}

export default Nav;
