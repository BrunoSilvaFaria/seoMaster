import { styled } from "styled-components";
import { colors } from "../../helpers/colors";
import { fonts } from "../../helpers/tipografia";
import { align, displayFlex } from "../styles";

const Conteiner = styled.footer`
  background: ${colors.blue[200]};
  border-bottom: 1px solid ${colors.blue[300]};
  .align {
    ${align};
    ${displayFlex};
    align-items: flex-start;
    flex-wrap: wrap;
  }
  * {
    color: ${colors.whiteLigth};
    transition: all, 0.3s;
  }
  h3,
  .newsletter h3 {
    color: ${colors.white};
    font-weight: ${fonts.weight[500]};
    margin-bottom: 25px;
    font-size: 20px;
    line-height: 24px;
  }
  a:hover:not(.project__img) {
    letter-spacing: 1px;
  }

  section,
  .newsletter {
    width: 228px;
    margin-bottom: 20px;
  }
  .newsletter {
    .paragraph {
      font-size: 16px;
      font-weight: 24px;
    }
    input {
      width: 75%;
    }
  }
`;

const Get = styled.section`
  .location__conteiner,
  .redes,
  .redes__link {
    ${displayFlex};
  }

  .redes,
  .location__conteiner {
    width: fit-content;
    gap: 5px;
  }
  .location__conteiner {
    margin-bottom: 20px;
    gap: 15px;
  }
  .redes__link {
    ${displayFlex};
    justify-content: center;
    border: 1px solid ${colors.blue[300]};
    border-radius: 50%;
    height: 40px;
    width: 40px;
    &:hover {
      background: ${colors.white};
      border-color: ${colors.white};
      .redes__icon path {
        color: ${colors.blue[200]};
      }
    }
  }
`;

const Popular = styled.section`
  .popular__conteiner {
    ${displayFlex};
    width: fit-content;
    margin-bottom: 15px;
  }
`;

const Project = styled.section`
  ul {
    ${displayFlex};
    flex-wrap: wrap;
    gap: 10px;
    width: inherit;
  }
  img {
    width: 50px;
    height: 50px;
  }
`;

export { Conteiner, Get, Popular, Project };
