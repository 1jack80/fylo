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
      width: 10rem;
    }

    .footerItemWithIcon {
      display: grid;
      grid-template-columns: 1.5em 1fr;
      gap: 1em;
      align-items: center;
      justify-items: flex-start;
      height: max-content;
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
      color: ${theme.colors.blue};
    }
  `}
`;
