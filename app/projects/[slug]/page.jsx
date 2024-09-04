import ProjectDetails from "@/app/components/pageUtilities/projectDetails";

// TODO Change method of fetching data
export default function ProjectsPage({ params: { slug } }) {
  // const [project, setProject] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  // const fetchProjectData = async () => {
  //   try {
  //     setIsLoading(true);
  //     const projectData = await loadProjectData(slug);
  //     return projectData;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const data = fetchProjectData();
  // console.log("asdfasdf TUTUAJ");
  // console.log(data);

  return (
    <>
      <ProjectDetails slug={slug} />
    </>
  );
}
