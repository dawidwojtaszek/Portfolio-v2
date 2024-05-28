import Container from "../utilities/container";
import SectionHeading from "../utilities/sectionHeading";
import Card from "./card";
const Portfolio = () => (
  <Container className="my-[70px]">
    <SectionHeading>Portfolio</SectionHeading>
    <Card
      mainPhotoUrl="/images/mockupLorem.jpg"
      mainPhotoAlt="Lorem mockup"
      projectName="Aplikcja Ecomerce z użyciem React.js"
      shortDescription="W ramach nauki Reacta stworzyłem aplikację ecomerce. Projekt okazał się świetnym sposobem na poszerzenie swoich umiejętności."
    />
  </Container>
);

export default Portfolio;
