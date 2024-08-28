"use client";
import Container from "../utilities/container";
import SectionHeading from "../utilities/sectionHeading";
import Card from "./card";
import Button from "../utilities/button";
import { useState, useEffect } from "react";
import Filters from "./filters";
import { useAppContext } from "@/app/context/context";
const Portfolio = () => {
  const [filters, setFilters] = useState([]);
  const { setProjects, projects } = useAppContext();
  let tags;
  if (projects) {
    const allTagsList = projects
      .map((e) => {
        return e.tags;
      })
      .flat();
    tags = Array.from(new Set(allTagsList));
  }
  console.log(projects);
  // TODO add date to projects info
  if (!projects) {
    return <div>Loading...</div>;
  }
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
      <Button>Załaduj więcej</Button>
    </Container>
  );
};

export default Portfolio;
