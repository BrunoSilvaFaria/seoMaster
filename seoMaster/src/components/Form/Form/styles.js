import { styled } from "styled-components";
import { align, displayFlex } from "../../styles";
export const Conteiner = styled.section`
  background: blue;
  height: 250px;
  margin-bottom: 130px;
  .align{
    ${displayFlex}
    ${align};
  }
  
  .form{
    width: 420px;
  }

  .img{
    background-color: red;
    width: 415px;
    height: 250px;
    position: relative;
    top: 65px
  }
`;
