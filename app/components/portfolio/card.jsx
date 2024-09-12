"use client";
import Image from "next/image";
import Button from "../utilities/button";
import Link from "next/link";
import Tags from "./tags";
import { motion } from "framer";
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
  tags,
  date,
}) => {
  return (
    <motion.div
      className="border-4 border-darkBlue shadow-shadowEffect flex min-h-[345px] mb-12"
      role="none presentation"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      layout
    >
      <div className=" relative hidden md:block min-w-[500px] min-h-[345px] object-fill">
        <Image
          className="hidden md:block"
          src={mainPhotoUrl}
          alt={mainPhotoAlt}
          // width={500}
          // height={345}
          fill
          sizes="max-width:500px; max-height:345px"
          priority={true}
        />
      </div>
      <div className="flex flex-col justify-between w-full">
        <div className="w-full flex justify-end">
          <span className="p-1 bg-darkBlue text-white font-bold m-1">
            {date}
          </span>
        </div>
        <div className=" px-9 pt-2 pb-5" role="none presentation">
          <h3
            className={`${spaceGrotesk.className} text-darkBlue font-bold text-4xl`}
          >
            {projectName}
          </h3>

          <Tags tags={tags} />
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
    </motion.div>
  );
};
export default Card;
