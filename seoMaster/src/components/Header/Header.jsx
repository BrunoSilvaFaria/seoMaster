import { Conteiner } from "./styles";
function Header() {
  return (
    <Conteiner>
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
      </nav>
    </Conteiner>
  );
}

export default Header;
