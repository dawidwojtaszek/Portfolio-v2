"use client";
import Container from "../utilities/container";
import SectionHeading from "../utilities/sectionHeading";
import Card from "./card";
import { useState, useEffect } from "react";
import Filters from "./filters";

const Portfolio = ({ data }) => {
  const [projects, setProjects] = useState(data);
  const [filters, setFilters] = useState([]);

  const allTagsList = data
    .map((e) => {
      return e.tags;
    })
    .flat();
  const tags = Array.from(new Set(allTagsList));

  useEffect(() => {
    if (filters.length === 0) {
      setProjects(data);
    } else {
      const filteredProjects = data.filter((project) =>
        project.tags.some((e) => filters.includes(e))
      );
      setProjects(filteredProjects);
    }
  }, [filters]);
  // TODO add date to projects info

  return (
    <Container className="my-[70px]">
      <SectionHeading className="mb-12">Portfolio</SectionHeading>
      <Filters tags={tags} currentFilters={filters} setFilters={setFilters} />
      {projects.map((project) => (
        <Card
          key={project.id}
          mainPhotoUrl={project.mainPhotoUrl}
          mainPhotoAlt={`${project.slug} mockup`}
          projectName={project.title}
          shortDescription={project.description}
          githubUrl={project.githubUrl}
          previewUrl={project.previewUrl}
          slug={project.slug}
        />
      ))}
    </Container>
  );
};

export default Portfolio;
