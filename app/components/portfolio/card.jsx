import Image from "next/image";
import Button from "../utilities/button";
import Link from "next/link";
import { faUpDownLeftRight, faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { spaceGrotesk } from "../utilities/fonts";

const Card = ({
  mainPhotoUrl,
  mainPhotoAlt,
  projectName,
  shortDescription,
  previewUrl,
  githubUrl,
  slug,
}) => {
  return (
    <div
      className="border-4 border-darkBlue shadow-shadowEffect flex h-[345px] mb-12"
      role="none presentation"
    >
      <Image src={mainPhotoUrl} alt={mainPhotoAlt} width={500} height={345} />

      <div className="flex flex-col justify-between w-full">
        <div className=" px-9 pt-9 pb-5" role="none presentation">
          <h3
            className={`${spaceGrotesk.className} text-darkBlue font-bold text-4xl`}
          >
            {projectName}
          </h3>
          {/* TODO add tags to this component */}
          {/* TODO add mobile styles */}
          <p className=" text-xl">{shortDescription}</p>
        </div>
        <div
          className="flex justify-between w-full p-[5px] gap-[5px] text-xl"
          role="none presentation"
        >
          <Link href={`/projects/${slug}`} className="w-full">
            <Button icon={faUpDownLeftRight} className="w-full h-[50px]">
              Więcej
            </Button>
          </Link>
          <Link href={previewUrl} className="w-full">
            <Button icon={faEye} className="w-full h-[50px]">
              Podgląd
            </Button>
          </Link>
          <Link href={githubUrl} className="w-full">
            <Button icon={faGithub} className="w-full h-[50px]">
              Github
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;
