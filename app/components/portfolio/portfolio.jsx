import Container from "../utilities/container";
import SectionHeading from "../utilities/sectionHeading";
import Card from "./card";
const Portfolio = () => (
  <Container className="my-[70px]">
    <SectionHeading>Portfolio</SectionHeading>
    <Card mainPhotoUrl="/images/mockupLorem.jpg" mainPhotoAlt="Lorem mockup" />
  </Container>
);

export default Portfolio;
