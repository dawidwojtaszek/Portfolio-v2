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
      <SectionHeading className="mb-12">Portfolio</SectionHeading>
      {projects.map((project) => (
        <Card
          key={project.id}
          mainPhotoUrl={project.mainPhotoUrl}
          mainPhotoAlt={`${project.slug} mockup`}
          projectName={project.title}
          shortDescription={project.description}
          githubUrl={project.githubUrl}
          previewUrl={project.previewUrl}
        />
      ))}
    </Container>
  );
};

export default Portfolio;
