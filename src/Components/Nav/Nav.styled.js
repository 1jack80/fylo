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
      gap: clamp(1em, 1%, 5em);
      align-items: flex-end;
      width: max-content;
    }

    .nav-link {
      text-transform: captialize;
      transition: 0.15s ease-in-out;

      &:hover {
        color: ${theme.colors.cyan};
        transition: 0.15s ease-in-out;
      }
    }

    @media screen and (min-width: 650px) {
      .nav-links {
        gap: 4em;
      }
    }
  `}
`;
