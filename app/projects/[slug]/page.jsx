"use client";
import ProjectDetails from "@/app/components/pageUtilities/projectDetails";
import { loadProjectData } from "@/app/utilities/apiUtilities";
import { useEffect, useState } from "react";

// TODO Change method of fetching data
export default function ProjectsPage({ params: { slug } }) {
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        setIsLoading(true);
        const projectData = await loadProjectData(slug);
        console.log(projectData);
        if (projectData != null) {
          setProject(projectData[0]);
          console.log(projectData);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjectData();
  }, []);
  return <>{isLoading ? "loading..." : <ProjectDetails project={project} />}</>;
}
