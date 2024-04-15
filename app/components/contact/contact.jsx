import Container from "../utilities/container";
import SectionHeading from "../utilities/sectionHeading";
import ContactInfo from "./contact-info";
const Contact = () => (
  <div className=" bg-gray" role="none presentation">
    <Container className="py-[70px]">
      <SectionHeading>Kontakt</SectionHeading>
      <div className="flex justify-between">
        <ContactInfo />
      </div>
    </Container>
  </div>
);

export default Contact;
