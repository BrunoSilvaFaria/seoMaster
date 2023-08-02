import { styled } from "styled-components";
import { align, displayFlex } from "../../components/styles";
import { colors } from "../../helpers/colors";
export const Conteiner = styled.section`
  ${align};
  ${displayFlex};
  align-items: flex-start;
  margin: 100px auto;
  .img{
    background-color: ${colors.black};
    width: 410px;
    height: 290px;
  }
  .content {
    width: 400px;
    .header {
      h1 {
        margin-bottom: 25px;
      }
      h1,
      p {
        text-align: left;
      }
    }
    .paragraph {
      font-size: 16px;
      line-height: 24px;
      color: ${colors.grey};
      margin-bottom: 20px;
    }

    .list,
    span{
      ${displayFlex}
    }
    .list{
      justify-content: space-between;
    }
    .list div:first-child{
      margin-right: 20px;
    }

    div span{
      margin-bottom: 15px;
    }

    div{
      margin-bottom: 5px;
    }

    li {
      font-size: 16px;
      line-height: 19px;
      color: ${colors.black};
      font-weight: 500;
    }

    .icon path{
      color: ${colors.blue[200]};
    }

    span,
    footer {
      ${displayFlex};
      width: fit-content;
      gap: 15px;
    }

    .btn{
      background-color: ${colors.blue[200]};
      color: ${colors.white};
      padding: 12px 20px;
      border-radius: 30px;
      font-weight: 500;
    }
  }
`;
