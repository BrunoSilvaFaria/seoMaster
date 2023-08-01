import { styled } from "styled-components";
import { align, cardSmall, displayFlex } from "../../styles";
import { colors } from "../../../helpers/colors";
export const Conteiner = styled.article`
  ${cardSmall}
  background-color: ${colors.black};
  height: 270px;
  width: 270px;
  @media (min-width: 576px) and (max-width: 765px) {
    height: 516px;
  }
  @media (max-width: 575px) {
    padding-bottom: 100%;
  }
  &:hover {
    background-color: ${colors.blue[200]};
    span,
    .align {
      ${displayFlex};
    }
    .align {
      ${align};
      justify-content: space-between;
      flex-direction: column;
      height: inherit;
      width: 80%;
    }
    img {
      width: 90px;
      height: 90px;
      align-self: flex-end;
      background-color: red;
    }
    div {
      align-self: flex-start;
      margin-bottom: 30px;
    }

    h2,
    h3,
    .icon path {
      color: ${colors.whiteLigth};
    }
    h2 {
      font-size: 20px;
      font-weight: 500;
    }
    h3,
    .icon {
      font-size: 14px;
      font-weight: 400;
    }

    span {
      width: fit-content;
      gap: 5px;
      margin-bottom: 10px;
    }
  }

  span,
  .align {
    display: none;
  }
`;
