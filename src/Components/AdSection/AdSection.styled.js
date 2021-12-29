import styled from "styled-components";
import { css } from "styled-components";

export const StyledAdSection = styled.section`
  ${({ theme }) => css`
    display: grid;
    align-items: flex-start;
    justify-content: center;
    gap: 2em;
    padding: ${theme.layout.containerPadding};

    p {
      margin: 1em 0;
      /* width: 80%; */
      max-width: 30rem;
    }
    img {
      margin-bottom: 2em;
    }
    .link {
      color: ${theme.colors.cyan};
      display: flex;
      gap: 0.7em;
      align-items: center;
      justify-content: center;
      position: relative;
      width: max-content;

      &::after {
        content: "";
        height: 1px;
        width: 100%;
        position: absolute;
        background-color: currentcolor;
        bottom: -4px;
        left: 0;
      }

      .icon {
        width: 1.5em;
      }
    }

    @media screen and (min-width: 650px) {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      justify-items: space-between;
      justify-content: center;
      margin: auto;
      max-width: 90rem;
      gap: 5em;
    }
  `}
`;
