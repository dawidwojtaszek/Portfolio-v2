"use client";
import Container from "../utilities/container";
import SectionHeading from "../utilities/sectionHeading";
import ProjectList from "./projectsList";
import Filters from "./filters";
import { Element } from "react-scroll";

import { useAppContext } from "@/app/context/context";
const Portfolio = () => {
  const { currentProjects, isLoading } = useAppContext();

  return (
    <Element name="portfolio">
      <Container className="py-[70px]" id="portfolio">
        <SectionHeading className="mb-12">Portfolio</SectionHeading>
        <Filters />

        {isLoading ? "loading.." : <ProjectList />}
      </Container>
    </Element>
  );
};

export default Portfolio;
