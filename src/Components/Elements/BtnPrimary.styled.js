import styled from "styled-components";
import { css } from "styled-components";

export const BtnPrimary = styled.button`
  ${({ theme }) => css`
    padding: 0.9rem 3rem;
    min-width: 14rem;

    font-weight: ${theme.font.weight.bold};
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.size.small};
    background: linear-gradient(
      to right,
      ${theme.colors.cyan} -100%,
      ${theme.colors.blue} 140%
    );
    color: ${theme.colors.white};

    border: none;
    border-radius: 4rem;
  `}
`;
