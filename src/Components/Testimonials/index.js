import React from "react";
import testimonialData from "./testimonialData";
import { Testimonial, StyledTestimonials } from "./Testimonials.styled";
import CtaCard from "../CtaCard";

function Testimonials() {
  return (
    <StyledTestimonials>
      {testimonialData.map((item, index) => {
        return (
          <Testimonial key={index}>
            <p>{item.testimony}</p>
            <div className="person">
              <img src={item.image} alt={item.testifier} />
              <div>
                <h5>{item.testifier}</h5>
                <span>{item.testifierRole}</span>
              </div>
            </div>
          </Testimonial>
        );
      })}
      <CtaCard />
    </StyledTestimonials>
  );
}

export default Testimonials;
