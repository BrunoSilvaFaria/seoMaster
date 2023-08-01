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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Service</a>
              </li>
              <li>
                <a href="/projects">Project</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
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
