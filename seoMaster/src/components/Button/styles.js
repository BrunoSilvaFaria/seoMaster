import { styled, css } from "styled-components";
import { colors } from "../../helpers/colors";
import { fonts } from "../../helpers/tipografia";

export const Button = css`
  border-radius: 50px;
  padding: 8px 24px;
`;
export const ButtonMenu = styled.button`
  ${Button};
  background-color: ${colors.blue[400]};
  border: 1px solid ${colors.blue[400]};
  font-size: 16px;
  font-weight: ${fonts.weight[500]};

  &:hover {
    background-color: ${colors.blue[600]};
    border: 1px solid ${colors.blue[500]};
  }
`;
