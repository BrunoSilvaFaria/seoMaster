import { styled } from "styled-components";
import { card, cards } from "../../styles";
import { colors } from "../../../helpers/colors";
import { displayFlex } from "../../styles";
export const Conteiner = styled.section`
  .cards {
    ${cards};
  }
`;

export const CardConteiner = styled.section`
  width: 275px;
  height: 335px;
  margin-top: 35px;
  ${displayFlex};
  &:hover {
    .card {
      background-color: ${colors.blue[200]};
    }
  }
  .img {
    ${card};
    background: red;
    width: 195px;
    height: 255px;
    position: relative;
    z-index: 1;
    left: 70px;
    bottom: 75px;
  }
`;
export const Card = styled.section`
  ${card};
  width: 225px;
  height: 290px;
  position: absolute;
  
  &:hover {
    background-color: ${colors.blue[200]};
    h2,
    span {
      color: ${colors.white};
    }
  }

  .align{
    display: inline-block;
    margin-left: 20px;
    margin-top: 25px;
  }

  .redes--member {
    ul {
      flex-direction: column;
      margin-bottom: 25px;
    }
    .redes__link {
      background: ${colors.white};
      border: none;
      .redes__icon path {
        color: ${colors.blue[200]};
      }
      &:hover {
        background: ${colors.white};
        border: none;
        .redes__icon path {
          color: ${colors.blue[200]};
        }
      }
    }
  }
`;
