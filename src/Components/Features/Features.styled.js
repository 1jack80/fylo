import styled from "styled-components";
import { css } from "styled-components";

export const StyledFeatures = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    padding: 10rem ${theme.layout.containerPadding};
    gap: 7rem;

    background-color: ${theme.colors.darkBlue2};

    @media screen and (min-width: 650px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      justify-content: center;
      justify-items: center;
      align-items: flex-end
      gap: 0em;
      width: 100%;
      max-width: 60rem;
      margin: auto;

    }
  `}
`;

export const Feature = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
    gap: 1em;

    p {
      max-width: 22rem;
    }

    .icon {
      width: 5rem;
    }
  `}
`;
