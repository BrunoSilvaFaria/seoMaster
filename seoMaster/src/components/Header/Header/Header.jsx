import { Conteiner } from "./styles";
function Header(props) {
  return (
    <Conteiner className={props.class}>
      <p>{props.categorie}</p>
      <h1>{props.title}</h1>
    </Conteiner>
  );
}

export default Header;
