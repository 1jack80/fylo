import React from "react";
import { BtnPrimary } from "../Elements/BtnPrimary.styled";
// import { InputPrimary } from "../Elements/InputPrimary.styled";
import { StyledCard } from "./Card.styled";

function CtaCard() {
  return (
    <StyledCard>
      <h3>Get early access today</h3>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>

      {/* <InputPrimary> */}
      <BtnPrimary>Get Started For Free</BtnPrimary>
    </StyledCard>
  );
}

export default CtaCard;
