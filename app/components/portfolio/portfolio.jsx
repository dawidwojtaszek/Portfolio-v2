"use client";
import Container from "../utilities/container";
import SectionHeading from "../utilities/sectionHeading";
import Card from "./card";
import { useState } from "react";

const Portfolio = ({ data }) => {
  const [projects, setProjects] = useState(data);
  const [filters, setFilters] = useState([]);

  return (
    <Container className="my-[70px]">
      <SectionHeading>Portfolio</SectionHeading>
      {projects.map((project) => (
        <Card
          key={project.id}
          mainPhotoUrl={project.mainPhotoUrl}
          mainPhotoAlt={`${project.slug} mockup`}
          projectName={project.title}
          shortDescription={project.description}
        />
      ))}

      {/* <Card
        mainPhotoUrl="/images/mockupLorem.jpg"
        mainPhotoAlt="Lorem mockup"
        projectName="Aplikcja Ecomerce z użyciem React.js"
        shortDescription="W ramach nauki Reacta stworzyłem aplikację ecomerce. Projekt okazał się świetnym sposobem na poszerzenie swoich umiejętności."
      /> */}
    </Container>
  );
};

export default Portfolio;
