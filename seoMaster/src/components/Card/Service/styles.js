import { styled } from "styled-components";
import { align, cardSmall, displayFlex } from "../../styles";
import { colors } from "../../../helpers/colors";
export const Conteiner = styled.article`
  ${cardSmall}
  height: 350px;
  width: 270px;
  &:hover {
    background-color: ${colors.blue[200]};
    h4,
    p {
      color: ${colors.whiteLigth};
    }
    span {
      background-color: ${colors.white};
      border-radius: 30px;
      padding: 5px 15px;
    }
  }
  .align {
    ${align};
    text-align: center;
    ${displayFlex};
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    height: inherit;
    width: 87%;
  }
  img {
    width: 90px;
    height: 90px;
  }
  h4 {
    color: ${colors.black};
    font-size: 20px;
    line-height: 24px;
  }
  p,
  a {
    font-size: 16px;
    line-height: 24px;
  }
  p {
    color: ${colors.grey};
  }

  a {
    color: ${colors.blue[200]};
  }
`;
