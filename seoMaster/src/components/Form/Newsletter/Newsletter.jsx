import Input from "../Input";
import { Conteiner } from "./styles";
function Newsletter(props) {
  return (
    <Conteiner className={props.class}>
      <h3 className="title">{props.title}</h3>
      <p className="paragraph">{props.paragraph}</p>
      <Input className="input-conteiner" />
    </Conteiner>
  );
}

export default Newsletter;
