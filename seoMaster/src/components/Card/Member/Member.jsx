import React from "react";
import { Card } from "./styles";
function Member(props) {
  return (
    <Card>
      <div className="align">
        <img src={props.item.img} alt="Imagem ilustrativa" />
        <h2>{props.item.name}</h2>
        <span>{props.item.cargo}</span>
      </div>
    </Card>
  );
}

export default Member;
