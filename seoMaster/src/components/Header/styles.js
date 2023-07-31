import { styled } from "styled-components";
import { colors } from "../../helpers/colors";

import { align, displayFlex } from "../styles";


const Conteiner = styled.header`
  background: ${colors.blue[200]};
  border-bottom: 1px solid ${colors.blue[300]};
  height: 100px;
  .align,
  ul,
  .buttons,
  nav {
    ${displayFlex};
    height: inherit;
  }

  .align {
    ${align}
  }

  nav{
    align-items: baseline;
  }
  * {
    color: ${colors.white};
  }

  ul {
    width: 425px;
  }
  li a:hover {
    color: ${colors.blue[400]};
  }

  .buttons {
    width: fit-content;
    .icon path {
      color: ${colors.blue[400]};
    }
    button {
      margin-left: 25px;
    }
  }
`;

export { Conteiner };
