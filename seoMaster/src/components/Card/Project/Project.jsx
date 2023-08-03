import { useState } from "react";
import { Conteiner } from "./styles";
import { FaFolder } from "react-icons/fa";
function Project(props) {
  const bgImg = `url(${props.item.img})`;
  const bgColor = "#2124b1";
  const [background, setBackground] = useState(bgImg);

  const handleBackground = () => {
    background === bgImg ? setBackground(bgColor) : setBackground(bgImg);
  };
  return (
    <Conteiner
      style={{ background: `${background}` }}
      onMouseOver={handleBackground}
      onMouseOut={handleBackground}
    >
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
