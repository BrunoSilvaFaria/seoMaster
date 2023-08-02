import { styled } from "styled-components";
import { displayFlex } from "../styles";
import { colors } from "../../helpers/colors";

export const InputConteiner = styled.div`
    ${displayFlex};
    background-color: ${colors.white};
    border-radius: 50px;
    height: 48px;
    justify-content: center;
    width: 100%;
    input {
      color: ${colors.black};
      font-size: 18px;
      width: 85%;
    }

    .newsletter__icon {
      font-size: 18px;
      & path {
        color: ${colors.blue[200]};
      }
    }
`;
