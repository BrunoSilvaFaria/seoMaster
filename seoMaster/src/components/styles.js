import { css } from "styled-components";
const displayFlex = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const align = css`
  width: 90%;
  margin: auto;
`;

const card = css`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
`;

const cardSmall = css`
  ${card};
  @media (max-width: 990px) {
    width: 336px;
  }
  @media (min-width: 576px) and (max-width: 765px) {
    width: 516px;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
`;
const cards = css`
  ${displayFlex};
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export { displayFlex, align, cards, card, cardSmall };
