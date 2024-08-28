import Card from "./card";
const ProjectList = ({ projects }) => {
  return (
    <div>
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
      {/* TODO Add load more button */}
    </div>
  );
};

export default ProjectList;
