import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { Conteiner } from "./styles";
function Redes(props) {
  return (
    <Conteiner className={props.class}>
      <ul className="redes">
        <li>
          <a href="#" className="redes__link">
            <FaFacebookF className="redes__icon" />
          </a>
        </li>

        <li>
          <a href="#" className="redes__link">
            <FaTwitter className="redes__icon" />
          </a>
        </li>

        <li>
          <a href="#" className="redes__link">
            <FaInstagram className="redes__icon" />
          </a>
        </li>
        <li>
          <a href="#" className="redes__link">
            <FaLinkedinIn className="redes__icon" />
          </a>
        </li>
      </ul>
    </Conteiner>
  );
}

export default Redes;
