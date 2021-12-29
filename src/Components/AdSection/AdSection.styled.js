import styled from "styled-components";
import { css } from "styled-components";

export const StyledAdSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    gap: 1.5em;
    padding: ${theme.layout.containerPadding};
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
      /* width: max-content; */

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
  `}
`;
