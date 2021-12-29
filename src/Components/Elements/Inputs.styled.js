import styled from "styled-components";
import { css } from "styled-components";

export const InputPrimary = styled.input.attrs((props) => ({
  type: props.type || "button",
  value: props.value,
}))`
  ${({ theme }) => css`
    padding: 0.9rem 2rem;
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
    text-transform: capitalize;

    border: none;
    border-radius: 4rem;
    outline: none;
  `}
`;

export const InputEmail = styled(InputPrimary).attrs((props) => ({
  type: "email",
  placeholder: "email@example.com",
}))`
  ${({ theme }) => css`
    background: none;
    background-color: ${theme.colors.white};
    padding-left: 2em;
    color: ${theme.colors.black};
    text-transform: initial;

    &::placeholder {
      color: ${theme.colors.gray};
      font-size: ${theme.font.size.small};
    }
  `}
`;
