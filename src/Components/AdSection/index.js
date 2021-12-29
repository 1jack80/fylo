import React from "react";
import { StyledAdSection } from "./AdSection.styled";
import IconArrow from "../icons/IconArrow";

function AdSection() {
  return (
    <StyledAdSection>
      <img src="./images/illustrations/illustration-stay-productive.png" />
      <h3>Stay productive, wherever you are</h3>

      <p>
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.
      </p>

      <p>
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required.
      </p>

      <span className="link">
        See how Fylo works <IconArrow />
      </span>
    </StyledAdSection>
  );
}

export default AdSection;
