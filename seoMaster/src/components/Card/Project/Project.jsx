import React from "react";
import { Conteiner } from "./styles";
import { FaFolder } from 'react-icons/fa';
function Project(props) {
  return (
    <Conteiner>
      <div className="align">
        <img src="" alt="Icone de decorativo" />
        <div>
          <span>
            <FaFolder className="icon" />
            <h3>{props.item.type}</h3>
          </span>
            <h2>{props.item.title}</h2>
        </div>
      </div>
    </Conteiner>
  );
}

export default Project;
