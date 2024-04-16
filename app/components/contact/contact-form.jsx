import Button from "../utilities/button";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { spaceGrotesk } from "../utilities/fonts";
const ContactForm = () => (
  <form className="flex flex-col items-start w-full">
    <label
      className={`${spaceGrotesk.className} bg-green text-darkGray p-1 text-lg`}
    >
      Email:
    </label>
    <input
      type="email"
      className=" border-4 border-darkBlue w-11/12 text-lg h-12 shadow-shadowEffect p-2 "
    />
    <label
      className={`${spaceGrotesk.className} bg-green text-darkGray p-1 text-lg mt-7`}
    >
      Wiadomość:
    </label>
    <textarea className=" border-4 border-darkBlue w-11/12 text-lg h-[250px] shadow-shadowEffect p-2"></textarea>
    <Button
      className="h-[50px] w-[170px] mt-7"
      icon={faPaperPlane}
      type="submit"
    >
      Wyślij
    </Button>
  </form>
);

export default ContactForm;
