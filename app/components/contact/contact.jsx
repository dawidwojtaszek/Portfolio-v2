import Container from "../utilities/container";
import SectionHeading from "../utilities/sectionHeading";
import ContactInfo from "./contact-info";
import ContactAnimation from "./contact-animation";
import ContactForm from "./contact-form";
import ContactSvg from "./contact-svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
const Contact = () => (
  <div className=" bg-gray" role="none presentation">
    <Container className="py-[70px]">
      <SectionHeading>Kontakt</SectionHeading>
      <div
        className="flex justify-between mt-5 items-center"
        role="none presentation"
      >
        <ContactInfo />
        <ContactAnimation />
      </div>
      <div
        className="flex justify-start items-center mt-5 mb-10"
        role="none presentation"
      >
        <div className=" w-7 h-7 text-darkBlue mr-5" role="none presentation">
          <FontAwesomeIcon icon={faArrowDown} />
        </div>

        <p className=" text-2xl">
          Możesz skorzystać również z poniższego formularza.
        </p>
      </div>
      <div
        role="none presentation"
        className="flex justify-between items-center w-full"
      >
        <ContactForm />
        <div className="w-[300px] h-auto hidden sm:block">
          <ContactSvg />
        </div>
      </div>
    </Container>
  </div>
);

export default Contact;
