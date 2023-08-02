import { Conteiner } from "./styles";
import Members from "../../components/Card/Member/Members";
import AboutComponent from "../../components/About/About";
import Form from "../../components/Form/Form/Form";
import HeaderPages from "../../components/Header/HeaderPages/HeaderPages";
function About() {
  return (
    <>
        <HeaderPages
          title="About"
          current="About"
        />
      <Conteiner>
        <AboutComponent />
        <Form/>
        <Members />
      </Conteiner>
    </>
  );
}

export default About;
