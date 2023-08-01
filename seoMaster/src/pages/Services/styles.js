import { styled } from "styled-components";
import { colors } from "../../helpers/colors";
import { displayFlex, align } from "../../components/styles";
export const Conteiner = styled.section`
  ${align};
  margin: 100px auto;
  p:first-child {
    color: ${colors.blue[200]};
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 15px;
  }
  h1 {
    color: ${colors.black};
    font-size: 31px;
    margin-bottom: 50px;
  }
  h1, p{
    text-align: center;
  }
  .cards {
    ${displayFlex};
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
  }
`;
