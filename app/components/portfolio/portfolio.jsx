"use client";
import Container from "../utilities/container";
import SectionHeading from "../utilities/sectionHeading";
import ProjectList from "./projectsList";
import Filters from "./filters";
import { Element } from "react-scroll";
import { Suspense } from "react";
import SkeletonAnimation from "./skeleton-animation-projects";
import { useAppContext } from "@/app/context/context";
const Portfolio = () => {
  const { currentProjects, isLoading } = useAppContext();

  return (
    <Element name="portfolio">
      <Container className="py-[70px]" id="portfolio">
        <SectionHeading className="mb-12">Portfolio</SectionHeading>
        <Suspense>
          {/* <Filters /> */}
          {isLoading ? (
            <SkeletonAnimation />
          ) : (
            <div>
              <Filters /> <ProjectList />
            </div>
          )}
        </Suspense>
      </Container>
    </Element>
  );
};

export default Portfolio;
