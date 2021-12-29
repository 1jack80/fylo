import styled from "styled-components";
import { css } from "styled-components";

export const StyledCard = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1em;

    padding: 2em calc(1.8em + 3%);
    text-align: center;
    border-radius: 5px;
    bax-shadow: 1px 4px 8px ${theme.colors.black};
    background-color: ${theme.colors.darkBlue1};
    max-width: 50rem;

    /* button {
      width: 18rem;
      margin: auto;
    } */

    form {
      display: flex;
      flex-direction: column;
      gap: 1em;
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
