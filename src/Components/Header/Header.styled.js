import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  ${({ theme }) => css`
    padding: 3rem ${theme.layout.containerPadding};
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;
    text-align: center;
    background: url(./images/bgs/bg-curvy-mobile.svg) no-repeat
      ${theme.colors.darkBlue1};
    background-size: 110%;
    background-position: 30% 60%;

    article {
      padding: 0 8%;
      line-height: 1.5em;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-items: center;
      gap: 2em;
    }
    .header-title {
      padding: 0 8%;
      line-height: 1.4em;
    }

    button {
    }

    img {
      width: 90%;
    }
  `}
`;
