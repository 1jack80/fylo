import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  ${({ theme }) => css`
    padding: 3rem 0 0;
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
    text-align: center;
    background-color: ${theme.colors.darkBlue1};
    background: url(./images/bgs/bg-curvy-mobile.svg) no-repeat
      ${theme.colors.darkBlue1};
    background-size: 140%;
    background-position: 40% 100%;

    article {
      line-height: 1.5em;
      display: flex;
      margin: 1rem 0 0rem;
      flex-direction: column;
      align-items: center;
      padding: 0 ${theme.layout.containerPadding};
      justify-items: center;
      gap: 2em;

      p {
        max-width: 28rem;
      }
    }
    .header-title {
      padding: 0rem 10%;
      line-height: 1.4em;
      max-width: 45rem;
    }

    img {
      width: 90%;
      max-width: 45rem;
    }

    @media screen and (min-width: 650px) {
      background: url(./images/bgs/bg-curvy-desktop.svg) no-repeat
        ${theme.colors.darkBlue1};

      background-size: 120%;
      background-position: 40% 101%;
    }
  `}
`;
