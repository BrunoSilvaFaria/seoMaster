import { styled, css } from "styled-components";
import { colors } from "../../helpers/colors";
import { displayFlex, align, cards } from "../../components/styles";
export const active = css`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: ${colors.blue[200]};
  color: ${colors.white};
`;
export const Conteiner = styled.section`
  ${align};
  margin: 100px auto;
  
  .cards {
    ${cards}
  }
  @media (max-width: 989px) {
    .cards {
      gap: 18px;
    }
  }
  ul {
    ${displayFlex};
    width: fit-content;
    gap: 15px;
    margin: auto auto 50px auto;
  }

  button {
    color: ${colors.grey};
    font-size: 16px;
    font-weight: 500;
    display: inline-block;
    padding: 10px 25px 10px 15px;
    position: relative;
    width: fit-content;
    &:hover {
      ${active};
    }
  }
  button::after {
    position: absolute;
    content: "";
    right: -1px;
    bottom: -1px;
    border-left: 20px solid transparent;
    border-right: 0 solid transparent;
    border-bottom: 50px solid #ffffff;
  }
  .active {
    ${active};
  }
`;
