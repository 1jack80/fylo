import styled from "styled-components";
import { css } from "styled-components";

export const StyledCard = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1em;

    padding: 2em ${theme.layout.containerPadding};
    text-align: center;
    border-radius: 5px;
    bax-shadow: 1px 4px 8px ${theme.colors.black};
    background-color: ${theme.colors.darkBlue1};

    button {
      width: 18rem;
      margin: auto;
    }
  `}
`;
