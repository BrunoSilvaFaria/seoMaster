import { Conteiner } from "./styles";
import { ButtonMenu } from "../Button/styles";
import { FaSearch } from 'react-icons/fa';
function Header() {
  return (
    <Conteiner>
      <div className="align">
          <a href="">
            <img src="" alt="Logo do site" className="logo" />
          </a>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Project</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
                  </ul>
                  
                  <div className="buttons">
                      <FaSearch className="icon"/>
                      <ButtonMenu>Pro Version</ButtonMenu>
                  </div>
          </nav>
      </div>
    </Conteiner>
  );
}

export default Header;
