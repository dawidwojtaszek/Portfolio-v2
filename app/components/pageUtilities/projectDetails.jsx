import Container from "@/app/components/utilities/container";
import { spaceGrotesk } from "@/app/components/utilities/fonts";
import Button from "@/app/components/utilities/button";
import Link from "next/link";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import SectionHeading from "@/app/components/utilities/sectionHeading";
import { notFound } from "next/navigation";
import { loadProjectData } from "@/app/utilities/apiUtilities";
import TagsPage from "./tagsPage";
import { Suspense } from "react";
const ProjectDetails = async ({ slug }) => {
  const data = await loadProjectData(slug);
  const project = data !== null ? data[0] : null;
  if (project !== null) {
    return (
      <div className="min-h-[calc(100vh-200px)]">
        <div className=" bg-gray md:min-h-[480px]">
          <Container className="flex flex-col-reverse md:flex-row md:justify-between md:items-center h-full">
            <Suspense>
              <div
                className="flex flex-col h-full justify-center items-center md:items-start"
                role="none presentation"
              >
                <h2
                  className={`${spaceGrotesk.className} text-2xl text-center  font-bold uppercase max-w-[440px] mb-10 md:text-left md:text-4xl`}
                >
                  {project.title}
                </h2>
                <div className="flex  gap-4" role="none presentation">
                  <Link href={project.previewUrl}>
                    <Button className=" w-[170px] h-[50px]" icon={faEye}>
                      Podgląd
                    </Button>
                  </Link>
                  <Link href={project.githubUrl}>
                    <Button className=" w-[170px] h-[50px]" icon={faGithub}>
                      Github
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="h-full w-auto " role="none presentation">
                <div className="relative w-[320px] h-[200px] mx-auto md:w-[755px] md:h-[420px] ">
                  <Image
                    className=" object-contain"
                    src={project.sesoundaryPhotoUrl}
                    alt={`${project.slug} screenshot`}
                    fill
                    sizes="max-width:755px; max-height:420px"
                    priority={true}
                  />
                </div>
              </div>
            </Suspense>
          </Container>
        </div>
        <Container>
          <SectionHeading className="mb-9 mt-11">O projekcie</SectionHeading>
          <div className="flex gap-3 items-center justify-start">
            <span className="font-bold p-1 bg-darkBlue text-white">
              {project.date}
            </span>
            <TagsPage tags={project.tags} />
          </div>

          <div
            className=" text-xl py-9 md-file"
            dangerouslySetInnerHTML={{ __html: project.content }}
            role="none presentation"
          ></div>
        </Container>
      </div>
    );
  } else {
    return notFound();
  }
};

export default ProjectDetails;
