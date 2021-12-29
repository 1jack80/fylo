import styled from "styled-components";
import { css } from "styled-components";

export const StyledFooter = styled.footer`
  ${({ theme }) => css`
    padding: 15rem ${theme.layout.containerPadding} 2em;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2em;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: ${theme.font.size.medium};
    margin: auto;

    background-color: ${theme.colors.darkBlue3};

    .icon-logo {
      width: 8rem;
    }

    .footerItemWithIcon {
      display: grid;
      grid-template-columns: 1.5em 1fr;
      gap: 1em;
      align-items: center;
      justify-items: flex-start;
      height: max-content;
      max-width: 20rem;
      margin-bottom: 1em;

      .icon {
        width: 1em;
        height: 1em;
      }
    }
    .fiwi1 {
      align-items: flex-start;

      .icon {
        padding-top: 0.4em;
        height: 1.5em;
      }
    }

    .footerLinks {
      display: grid;
      gap: 0.8em;

      .footerLink {
        transition: 0.15s ease-in-out;
        cursor: pointer;

        &:hover {
          color: ${theme.colors.cyan};
          transition: 0.15s ease-in-out;
        }
      }
    }

    .socialIcons {
      display: flex;
      width: 100%;
      text-align: center;
      gap: 1em;
      align-items: center;
      justify-content: center;

      .social-icon {
        width: 2em;
        height: 2em;
        border-radius: 50%;
        border: 1.2px solid currentcolor;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.15s ease-in-out;
        cursor: pointer;

        &:hover {
          color: ${theme.colors.cyan};
          transition: 0.15s ease-in-out;
        }
      }
    }

    .attribution {
      text-align: center;
      font-family: ${theme.font.family.secondary};
      a {
        color: ${theme.colors.white};
        font-weight: ${theme.font.weight.bold};
      }
    }

    @media screen and (min-width: 650px) {
      grid-template-columns: 3fr 2fr 1fr 1fr 1fr;
      gap: 2rem;

      .icon-logo {
        grid-column: 1 / -1;
      }

      .attribution {
        grid-column: 1 / -1;
        justify-self: center;
        font-size: inherit;
        padding: 4rem;
      }
    }
  `}
`;
