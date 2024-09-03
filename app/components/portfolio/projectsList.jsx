"use client";
import { useAppContext } from "@/app/context/context";
import Card from "./card";
const ProjectList = () => {
  const { setCurrentProjects, currentProjects, projects } = useAppContext();
  const handleLoadMore = () => {
    if (currentProjects.length <= 4) {
      setCurrentProjects(projects);
    } else {
      setCurrentProjects(projects.slice(0, 4));
    }
  };

  return (
    <div>
      {currentProjects.map((project) => (
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
      <button className="p-2 bg-darkGray text-white" onClick={handleLoadMore}>
        {currentProjects.length <= 4 ? "Załaduj wszystkie" : "Zwiń"}
      </button>
    </div>
  );
};

export default ProjectList;
