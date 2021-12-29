import styled from "styled-components";
import { css } from "styled-components";

export const StyledCard = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1em;

    padding: 2em calc(1.8em + 3%) 3rem;
    text-align: center;
    border-radius: 5px;
    box-shadow: 2px 5px 8px -2px ${theme.colors.darkBlue3};
    background-color: ${theme.colors.darkBlue1};
    max-width: 50rem;
    margin: 8rem 0 -20rem;
    position: relative;

    form {
      display: flex;
      flex-direction: column;
      margin-top: 1.5em;
      gap: 2em;
    }

    @media screen and (min-width: 650px) {
      form {
        margin-top: 1em;
        flex-direction: row;

        .email {
          flex: 4 1 90%;
        }
        .btn {
          flex: 1 1 10%;
        }
      }
    }
  `}
`;
