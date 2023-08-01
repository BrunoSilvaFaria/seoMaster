import Header from "../../Header/Header/Header";
import Member from "./Member";
import "./styles";
import { Conteiner } from "./styles";
function Members() {
  const dados = [
    {
      name: "Jhon Doe",
      cargo: "Ceo",
      img: "#",
    },
    {
      name: "Emma William",
      cargo: "Manager",
      img: "#",
    },
    {
      name: "Noah Michael",
      cargo: "Designer",
      img: "#",
    },
  ];
  const member = dados.map((item) => {
    return <Member key={item.id} item={item} />;
  });
  return (
    <Conteiner>
      <Header categorie="Our Team" title="Meet Our Team Members" />
      <div className="cards">{member}</div>
    </Conteiner>
  );
}

export default Members;
