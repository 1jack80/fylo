import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.size.medium};
    font-weight: ${theme.font.weight.normal};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.font.family.secondary};
  }
  h1 {
    font-size: ${theme.font.size.xxLarge};
  }
  h2 {
    font-size: ${theme.font.size.xLarge};
  }
  h3 {
    font-size: ${theme.font.size.large};
  }
  h4 {
    font-size: ${theme.font.size.medium};
  }
`}
`;

export default GlobalStyles;
