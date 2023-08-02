import { FaPaperPlane } from "react-icons/fa";
import { InputConteiner } from "./styles";

function Input() {
  return (
    <InputConteiner>
      <input type="email" name="email" id="email" placeholder="Enter your Email" />
      <button type="submit">
        <FaPaperPlane className="newsletter__icon" />
      </button>
    </InputConteiner>
  );
}

export default Input;
