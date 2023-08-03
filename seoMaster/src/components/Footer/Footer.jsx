import { Conteiner, Get, Popular, Project } from "./styles";
import Newsletter from "../../components/Form/Newsletter/Newsletter";
import {
  FaPhone,
  FaEnvelope,
  FaAngleRight,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
function Footer() {
  return (
    <Conteiner>
      <div className="align">
        <Get className="location">
          <h3>Get In Touch</h3>
          <div className="location__conteiner">
            <MdLocationPin className="location__icon" />
            <a href="#" className="location__link">
              123 Street, New York, USA
            </a>
          </div>

          <div className="location__conteiner">
            <FaPhone className="location__icon" />
            <a href="tel:+012 345 67890" className="location__link">
              +012 345 67890
            </a>
          </div>

          <div className="location__conteiner">
            <FaEnvelope className="location__icon" />
            <a href="mailto:info@example.com" className="location__link">
              info@example.com
            </a>
          </div>

          <nav>
            <ul className="redes">
              <li>
                <a href="#" className="redes__link">
                  <FaTwitter className="redes__icon" />
                </a>
              </li>
              <li>
                <a href="#" className="redes__link">
                  <FaFacebookF className="redes__icon" />
                </a>
              </li>
              <li>
                <a href="#" className="redes__link">
                  <FaYoutube className="redes__icon" />
                </a>
              </li>
              <li>
                <a href="#" className="redes__link">
                  <FaInstagram className="redes__icon" />
                </a>
              </li>
              <li>
                <a href="#" className="redes__link">
                  <FaLinkedinIn className="redes__icon" />
                </a>
              </li>
            </ul>
          </nav>
        </Get>

        <Popular className="popular">
          <h3>Popular Links</h3>
          <nav>
            <ul>
              <li>
                <a href="#" className="popular__conteiner">
                  <FaAngleRight className="popular__icon" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="popular__conteiner">
                  <FaAngleRight className="popular__icon" />
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="popular__conteiner">
                  <FaAngleRight className="popular__icon" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="popular__conteiner">
                  <FaAngleRight className="popular__icon" />
                  Terms & Condition
                </a>
              </li>
              <li>
                <a href="#" className="popular__conteiner">
                  <FaAngleRight className="popular__icon" />
                  Career
                </a>
              </li>
            </ul>
          </nav>
        </Popular>

        <Project className="project">
          <h3>Project Gallery</h3>
          <nav>
            <ul>
              <li>
                <a href="#" className="project__img">
                  <img src="./assets/portfolio-1.jpg" alt="Foto ilustrativa do projeto" />
                </a>
              </li>
              <li>
                <a href="#" className="project__img">
                  <img src="./assets/portfolio-2.jpg" alt="Foto ilustrativa do projeto" />
                </a>
              </li>
              <li>
                <a href="#" className="project__img">
                  <img src="./assets/portfolio-3.jpg" alt="Foto ilustrativa do projeto" />
                </a>
              </li>
              <li>
                <a href="#" className="project__img">
                  <img src="./assets/portfolio-4.jpg" alt="Foto ilustrativa do projeto" />
                </a>
              </li>
              <li>
                <a href="#" className="project__img">
                  <img src="./assets/portfolio-5.jpg" alt="Foto ilustrativa do projeto" />
                </a>
              </li>

              <li>
                <a href="#" className="project__img">
                  <img src="./assets/portfolio-6.jpg" alt="Foto ilustrativa do projeto" />
                </a>
              </li>
            </ul>
          </nav>
        </Project>

        <Newsletter
          class="newsletter"
          title="Newsletter"
          paragraph="Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu"
        />
      </div>
    </Conteiner>
  );
}

export default Footer;
