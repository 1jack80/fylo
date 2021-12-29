import React from "react";
import { StyledNav } from "./Nav.styled";
import Logo from "../icons/Logo";

function Nav() {
  return (
    <StyledNav>
      <Logo />

      <ul className="nav-links">
        <li className="nav-link">Features</li>
        <li className="nav-link">Team</li>
        <li className="nav-link">Sign in</li>
      </ul>
    </StyledNav>
  );
}

export default Nav;
