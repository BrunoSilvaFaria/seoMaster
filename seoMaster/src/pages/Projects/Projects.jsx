import Project from "../../components/Card/Project/Project";
import Header from "../../components/Header/Header/Header";
import { Conteiner } from "./styles";
import { useState, useEffect } from "react";
import projects from "../../data/projects";

function Projects() {
  const [buttonAtivo, setButtonAtivo] = useState("all");
  const [filtroAtivo, setFiltroAtivo] = useState("all");
  const [projetos, setProjetos] = useState([]);

  const handleActive = (value) => {
    setButtonAtivo(value);
    setFiltroAtivo(value);
  };

  useEffect(() => {
    // função responsável pelo filtro
    const filtraElementos = (arquivo, filtroAtivo, campo) => {
      return arquivo.filter((item) => {
        return item[campo] && item[campo].includes(filtroAtivo);
      });
    };

    if (filtroAtivo === "all") {
      // gera todos os cards
      setProjetos(
        projects.map((item) => <Project key={item.id} item={item} />)
      );
    } else {
      // gera os cards que tem a categoria
      setProjetos(
        filtraElementos(projects, filtroAtivo, "types").map((item) => (
          <Project key={item.id} item={item} />
        ))
      );
    }
  }, [filtroAtivo]);
  return (
    <Conteiner>
      <Header categorie="Our Projects" title="Recently Launched Projects" />
      <ul>
        <li>
          <button
            onClick={() => {
              handleActive("all");
            }}
            value="all"
            className={buttonAtivo === "all" ? " active" : ""}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              handleActive("design");
            }}
            value="design"
            className={buttonAtivo === "design" ? " active" : ""}
          >
            Design
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              handleActive("development");
            }}
            value="development"
            className={buttonAtivo === "development" ? " active" : ""}
          >
            Development
          </button>
        </li>
      </ul>
      <section className="cards">{projetos}</section>
    </Conteiner>
  );
}

export default Projects;
