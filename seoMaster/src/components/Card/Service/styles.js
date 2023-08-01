import { styled } from "styled-components";
import { align, displayFlex } from "../../styles";
import { colors } from "../../../helpers/colors";
export const Conteiner = styled.article`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  height: 350px;
  width: 270px;
  @media (max-width: 990px) {
    width: 336px;
  }
  @media (min-width: 576px) and (max-width: 765px) {
    width: 516px;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
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
