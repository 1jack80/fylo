import styled from "styled-components";
import { css } from "styled-components";

export const StyledTestimonials = styled.section`
  ${({ theme }) => css`
    padding: 8rem ${theme.layout.containerPadding} 2rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 5%;
    margin: auto;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;

    .card {
      height: max-content;
      grid-column: 1 / -1;
      margin: 8rem auto -9rem;

      form {
        margin-top: 2rem;
      }
    }

    @media screen and (min-width: 650px) {
      grid-template-columns: repeat(3, 1fr);

      .card {
        margin: 8rem auto -7rem;
      }
    }
  `}
`;

export const Testimonial = styled.section`
  ${({ theme }) => css`
    padding: 2.3em clamp(1.8em, 13%, 2.5em) 1.7em 1.6em;
    margin: 0 auto;
    border-radius: 5px;
    background-color: ${theme.colors.darkBlue4};
    font-size: ${theme.font.size.medium};
    width: 100%;
    max-width: 30rem;

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
