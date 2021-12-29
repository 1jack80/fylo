import styled from "styled-components";
import { css } from "styled-components";

export const StyledFeatures = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    padding: 10rem ${theme.layout.containerPadding};
    gap: 7rem;

    background-color: ${theme.colors.darkBlue2};
  `}
`;

export const Feature = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1em;
    max-width: 25rem;

    .icon {
      width: 5rem;
    }
  `}
`;
