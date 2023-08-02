import { Conteiner } from "./styles";
import Header from "../Header/Header/Header";
import Redes from "../Button/Social/Redes";
import { FaCheck } from "react-icons/fa";
function AboutComponent() {
  return (
    <Conteiner>
      <div className="content">
        <Header
          class="header"
          categorie="About Us"
          title="The best SEO solution with 10 years of experience"
        />
        <p className="paragraph">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit.
          Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit,
          sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod
          magna dolore erat amet
        </p>
        <ul className="list">
          <div>
            <span>
              <FaCheck className="icon" />
              <li>Award Winning</li>
            </span>
            <span>
              <FaCheck className="icon" />
              <li>Professional Staff</li>
            </span>
          </div>
          <div>
            <span>
              <FaCheck className="icon" />
              <li>24/7 Support</li>
            </span>
            <span>
              <FaCheck className="icon" />
              <li>Fair Prices</li>
            </span>
          </div>
        </ul>
        <footer>
          <a href="#" className="btn">Read More</a>
          <Redes />
        </footer>
      </div>
      <div className="img"></div>
    </Conteiner>
  );
}

export default AboutComponent;
