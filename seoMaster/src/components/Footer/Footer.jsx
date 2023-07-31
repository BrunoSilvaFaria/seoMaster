import { Conteiner, Get, Newsletter, Popular, Project } from "./styles";
import {
  FaPhone,
  FaEnvelope,
  FaAngleRight,
  FaPaperPlane,
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
                  <FaTwitter className="redes__icon"/>
                </a>
              </li>
              <li>
                <a href="#" className="redes__link">
                  <FaFacebookF className="redes__icon"/>
                </a>
              </li>
              <li>
                <a href="#" className="redes__link">
                  <FaYoutube className="redes__icon"/>
                </a>
              </li>
              <li>
                <a href="#" className="redes__link">
                  <FaInstagram className="redes__icon"/>
                </a>
              </li>
              <li>
                <a href="#" className="redes__link">
                  <FaLinkedinIn className="redes__icon"/>
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
                  <img src="" alt="Foto ilustrativa do projeto" />
                </a>
              </li>
              <li>
                <a href="#" className="project__img">
                  <img src="" alt="Foto ilustrativa do projeto" />
                </a>
              </li>
              <li>
                <a href="#" className="project__img">
                  <img src="" alt="Foto ilustrativa do projeto" />
                </a>
              </li>
              <li>
                <a href="#" className="project__img">
                  <img src="" alt="Foto ilustrativa do projeto" />
                </a>
              </li>
              <li>
                <a href="#" className="project__img">
                  <img src="" alt="Foto ilustrativa do projeto" />
                </a>
              </li>

              <li>
                <a href="#" className="project__img">
                  <img src="" alt="Foto ilustrativa do projeto" />
                </a>
              </li>
            </ul>
          </nav>
        </Project>

        <Newsletter className="newsletter">
          <h3>Newsletter</h3>
          <p>
            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur
            facilisis ornare velit non vulpu
          </p>

          <div className="input__conteiner">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Yout Email"
            />
            <button type="submit">
              <FaPaperPlane className="newsletter__icon" />
            </button>
          </div>
        </Newsletter>
      </div>
    </Conteiner>
  );
}

export default Footer;
