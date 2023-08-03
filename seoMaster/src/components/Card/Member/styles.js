import { styled } from "styled-components";
import { card, cards } from "../../styles";
import { colors } from "../../../helpers/colors";
import { displayFlex, align } from "../../styles";
export const Conteiner = styled.section`
  margin: 500px auto;
  @media (min-width: 990px) {
    .cards {
      ${cards};
    }
  }
`;

export const CardConteiner = styled.section`
  width: 275px;
  height: 335px;
  @media (min-width: 576px) and (max-width: 990px) {
    & {
      width: 514px;
      height: 632px;
    }
  }
  @media (max-width: 575px) {
    & {
      width: 95%;
    }
  }
  margin: auto;
  margin-top: 25px;
  &:hover {
    .card {
      background-color: ${colors.blue[200]};
      .align h2,
      .align span {
        color: ${colors.white};
      }
    }
  }
`;
export const Card = styled.section`
  ${card};
  width: 225px;
  @media (min-width: 576px) and (max-width: 990px) {
    & {
      width: 514px;
      height: 632px;
    }
  }
  @media (max-width: 575px) {
    & {
      width: 100%;
      padding-bottom: 20px;
    }
    .card-img {
      width: 100%;
      height: fit-content;
    }
  }

  &:hover {
    background-color: ${colors.blue[200]};
    h2,
    span {
      color: ${colors.white};
    }
  }

  .img {
    ${card};
    width: 100%;
    height: auto;
    position: relative;
    left: 25px;
    bottom: 25px;
  }
  .card-img {
    ${displayFlex};
    align-items: flex-start;
  }
  .align {
    ${displayFlex};
    flex-direction: column;
  }

  .name {
    margin-left: 25px;
  }

  
  .redes--member {
    margin-top: 25px;
    margin-left: 25px;
    ul {
      flex-direction: column;
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
