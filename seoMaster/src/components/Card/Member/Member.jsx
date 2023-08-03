import React from "react";
import { Card, CardConteiner } from "./styles";
import Redes from "../../Button/Social/Redes";
function Member(props) {
  return (
    <CardConteiner>
      <Card className="card">
          <div className="card-img">
            <Redes class="redes--member" />
            <img
              className="img"
              src={props.item.img}
              alt="Imagem ilustrativa"
            />
          </div>
          <div className="name">
            <h2>{props.item.name}</h2>
            <span>{props.item.cargo}</span>
          </div>
      </Card>
    </CardConteiner>
  );
}

export default Member;
