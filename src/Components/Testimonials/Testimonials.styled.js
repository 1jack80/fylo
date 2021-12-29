import styled from "styled-components";
import { css } from "styled-components";

export const StyledTestimonials = styled.section`
  ${({ theme }) => css`
    padding: 9rem ${theme.layout.containerPadding};
    display: flex;
    flex-direction: column;
    gap: 3em;
    background: url(./images/bgs/bg-quotes.png) no-repeat;
    background-position: 13% 7.7rem;
    background-size: 8%;
  `}
`;

export const Testimonial = styled.section`
  ${({ theme }) => css`
    padding: 2.3em clamp(1.8em, 13%, 2.5em) 1.7em 1.6em;
    margin: 0 auto;
    border-radius: 5px;
    background-color: ${theme.colors.darkBlue4};
    font-size: ${theme.font.size.small};
    max-width: 20rem;

    .person {
      display: flex;
      gap: 0.4em;
      align-items: center;
      justify-items: flex-start;
      margin-top: 1.7em;

      h5 {
        letter-spacing: 1.4px;
      }

      img {
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
      }
    }
  `}
`;
