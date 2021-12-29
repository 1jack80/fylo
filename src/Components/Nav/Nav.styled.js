import styled from "styled-components";
import { css } from "styled-components";

export const StyledNav = styled.nav`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    padding: 2em ${theme.layout.containerPadding};
    font-family: ${theme.font.family.secondary};
    font-weight: ${theme.font.weight.bold};
    background-color: ${theme.colors.darkBlue1};
    .icon-logo {
      width: clamp(4rem, 15%, 8rem);
    }

    .nav-links {
      margin-left: auto;
      display: flex;
      justify-content: space-between;
      gap: clamp(1em, 1%, 3em);
      align-items: flex-end;
    }

    .nav-link {
      text-transform: captialize;
    }
  `}
`;
