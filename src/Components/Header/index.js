import React from "react";
import { StyledHeader } from "./Header.styled";
import { BtnPrimary } from "../Elements/BtnPrimary.styled";

function Header() {
  return (
    <StyledHeader>
      <img src="./images/illustrations/illustration-intro.png" />

      <article>
        <h1 className="header-title">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="header-text">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <BtnPrimary>Get Started</BtnPrimary>
      </article>
    </StyledHeader>
  );
}

export default Header;
