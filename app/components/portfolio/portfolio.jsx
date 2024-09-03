"use client";
import Container from "../utilities/container";
import SectionHeading from "../utilities/sectionHeading";
import ProjectList from "./projectsList";
import Filters from "./filters";
import { useAppContext } from "@/app/context/context";
const Portfolio = () => {
  const { currentProjects, isLoading } = useAppContext();

  // TODO add date to projects info

  return (
    <Container className="my-[70px]">
      <SectionHeading className="mb-12">Portfolio</SectionHeading>
      <Filters />

      {isLoading ? "loading.." : <ProjectList />}
    </Container>
  );
};

export default Portfolio;
