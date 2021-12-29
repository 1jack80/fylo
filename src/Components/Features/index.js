import React from "react";
import { StyledFeatures, Feature } from "./Features.styled";
import featuresData from "./featuresData";
import IconAccessAnywhere from "../icons/IconAccessAnywhere";
import IconSecurity from "../icons/IconSecurity";
import IconCollaboration from "../icons/IconCollaboration";
import IconAnyFile from "../icons/IconAnyFile";

function Features() {
  return (
    <StyledFeatures>
      {featuresData.map((feature) => {
        return (
          <Feature>
            {feature.icon}
            <h2>{feature.title}</h2>
            <p>{feature.text}</p>
          </Feature>
        );
      })}
    </StyledFeatures>
  );
}

export default Features;
