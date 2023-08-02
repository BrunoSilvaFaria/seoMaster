import React from "react";
import { Card, CardConteiner } from "./styles";
import Redes from "../../Button/Social/Redes";
function Member(props) {
  return (
    <CardConteiner>
      {/* <img src={props.item.img} alt="Imagem ilustrativa" /> */}
      <Card className="card">
        <div className="align">
          <Redes class="redes--member" />
          <h2>{props.item.name}</h2>
          <span>{props.item.cargo}</span>
        </div>
      </Card>
      <div className="img"></div>
    </CardConteiner>
  );
}

export default Member;
