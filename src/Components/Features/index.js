import React from "react";
import { StyledFeatures, Feature } from "./Features.styled";
import featuresData from "./featuresData";

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
