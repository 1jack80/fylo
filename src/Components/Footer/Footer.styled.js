import styled from "styled-components";
import { css } from "styled-components";

export const StyledFooter = styled.footer`
  ${({ theme }) => css`
    padding: 15rem ${theme.layout.padding} 2em;
    display: grid;
    gap: 2em;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: ${theme.font.size.medium};

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
    }

    .socialIcons {
      display: flex;
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
      }
    }

    .attribution {
      text-align: center;

      a {
        color: ${theme.colors.blue};
      }
    }

    @media screen and (min-width: 650px) {
      grid-template-columns: 3fr 2fr 1fr 1fr 2fr;
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
