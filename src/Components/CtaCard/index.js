import React from "react";
import { InputEmail, InputPrimary } from "../Elements/Inputs.styled";
import { StyledCard } from "./Card.styled";

function CtaCard() {
  return (
    <StyledCard className="card">
      <h3>Get early access today</h3>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        <InputEmail className="email" />
        <InputPrimary value="Get Started For Free" className="btn" />
      </form>
    </StyledCard>
  );
}

export default CtaCard;
