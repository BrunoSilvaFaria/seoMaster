import React from "react";
import { Conteiner } from "./styles";
function Service(props) {
  return (
    <Conteiner>
      <div className="align">
        <img src={props.item.img} alt="Imagem ilustrativa" />
        <h4>{props.item.title}</h4>
        <p>
          {props.item.description}
        </p>
        <span><a href="#">Read More</a></span>
      </div>
    </Conteiner>
  );
}

export default Service;
