import { Conteiner } from "./styles";
import Newsletter from "../Newsletter/Newsletter";
function Form() {
  return (
    <Conteiner>
      <div className="align">
        <Newsletter
          class="form"
          title="Ready to get started"
          paragraph=" Diam elitr est dolore at sanctus nonumy. "
        />
        <div className="img"></div>
      </div>
    </Conteiner>
  );
}

export default Form;
