import { Conteiner } from "./styles";
function HeaderPages(props) {
  return (
    <Conteiner className={props.class}>
      <div className="text">
        <h1>{
          props.title}
        </h1>
        <div className="border"></div>
        <nav>
          <ul className="bread">
            <li>
              <a href="#">Home</a>
              <span className="slash">/</span>
            </li>
            <li>
              {props.current}
            </li>
          </ul>
        </nav>
      </div>
    </Conteiner>
  );
}

export default HeaderPages;
