import ProjectDetails from "@/app/components/pageUtilities/projectDetails";

// TODO Change method of fetching data
export default function ProjectsPage({ params: { slug } }) {
  return (
    <>
      <ProjectDetails slug={slug} />
    </>
  );
}
