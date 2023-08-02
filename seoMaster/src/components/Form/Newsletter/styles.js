import { styled } from "styled-components";
import { colors } from "../../../helpers/colors";
export const Conteiner = styled.section`
  &,
  .conteiner {
    .title {
      font-weight: 700;
      margin-bottom: 10px;
      font-size: 28px;
      line-height: 33px;
    }
    .title,
    .paragraph {
      color: ${colors.white};
    }
    .paragraph {
      font-size: 14px;
      line-height: 21px;
      margin-bottom: 15px;
    }
  }
`;
