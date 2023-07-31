import { styled } from "styled-components";
import { colors } from "../../helpers/colors";

import { displayFlex } from "../styles";


const Conteiner = styled.header`
  background: blue;
  color: ${colors.white};
  ul{
    ${displayFlex};
  }
  li a:hover{
    color: ${colors.blue};
  }
`;

export { Conteiner };
