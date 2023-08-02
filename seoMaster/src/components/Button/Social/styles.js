import { styled } from "styled-components";
import { displayFlex } from "../../styles";
import { colors } from "../../../helpers/colors";

export const Conteiner = styled.nav`
  .redes,
  .redes__link {
    ${displayFlex};
  }

  .redes {
    width: fit-content;
    gap: 5px;
  }

  .redes__link {
    ${displayFlex};
    justify-content: center;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    background: ${colors.white};
    border: 1px solid ${colors.blue[200]};
    .redes__icon path {
      color: ${colors.blue[200]};
    }
    &:hover {
      background: ${colors.blue[200]};
      border-color: ${colors.blue[200]};
      .redes__icon path {
        color: ${colors.white};
      }
    }
  }
`;
