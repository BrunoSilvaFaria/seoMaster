import Service from "../../components/Card/Service/Service";
import { Conteiner } from "./styles";
import services from "../../data/services";
function Services() {
  const servicos = services.map((item) => {
    return <Service key={item.id} item={item} />;
  });
  return (
    <Conteiner>
      <p>Our Services</p>
      <h1>What Solutions We Provide</h1>
      <section className="cards">{servicos}</section>
    </Conteiner>
  );
}

export default Services;
