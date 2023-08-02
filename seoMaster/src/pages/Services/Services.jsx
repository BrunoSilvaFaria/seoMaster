import Service from "../../components/Card/Service/Service";
import { Conteiner } from "./styles";
import services from "../../data/services";
import HeaderPages from "../../components/Header/HeaderPages/HeaderPages";
import Header from "../../components/Header/Header/Header";
function Services() {
  const servicos = services.map((item) => {
    return <Service key={item.id} item={item} />;
  });
  return (
    <>
      <HeaderPages title="Services" current="Services" />
      <Conteiner>
        <Header title="What Solutions We Provide" categorie="Our Services" />
        <section className="cards">{servicos}</section>
      </Conteiner>
    </>
  );
}

export default Services;
