import { styled } from "styled-components";
import { colors } from "../../../helpers/colors";
import { displayFlex } from "../../styles";
const Conteiner = styled.header`
  background-color: ${colors.blue[200]};
  height: 400px;
  .text {
    margin: auto;
    padding-top: 100px;
  }
  h1 {
    text-align: center;
    font-size: 39px;
    line-height: 47px;
  }

  .border {
    width: 80px;
    margin: 5px auto 10px auto;
    height: 1px;
    background-color: ${colors.grey};
  }

  h1,
  a,
  li {
    color: ${colors.white};
  }
  .slash {
    color: ${colors.grey};
    margin: 0 5px;
  }
  nav {
    ul {
      ${displayFlex};
      width: fit-content;
      margin: auto;
    }
    .slash,
    a,
    li {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export { Conteiner };
