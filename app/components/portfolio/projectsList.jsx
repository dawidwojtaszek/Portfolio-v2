"use client";
import { useAppContext } from "@/app/context/context";
import Card from "./card";
import { spaceGrotesk } from "../utilities/fonts";
const ProjectList = () => {
  const { setCurrentProjects, currentProjects, projects, currentFilters } =
    useAppContext();
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
          tags={project.tags}
          date={project.date}
        />
      ))}
      {currentFilters.length != 0 ? (
        ""
      ) : (
        <div className="w-full flex justify-center">
          <button
            className={`py-2 px-3 border  uppercase ${spaceGrotesk.className}`}
            onClick={handleLoadMore}
          >
            {currentProjects.length <= 4 ? "Załaduj wszystkie" : "Zwiń"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
