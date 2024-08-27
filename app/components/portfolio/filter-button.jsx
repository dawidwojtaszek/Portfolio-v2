"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faRemove } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer";
import { useAppContext } from "@/app/context/context";
const FilterButton = ({ name, className, onClick, active }) => {
  const { projects } = useAppContext();

  console.log(projects);
  return (
    <motion.button
      className={`${
        active
          ? "bg-darkBlue text-white hover:opacity-90"
          : "hover:bg-darkBlue hover:opacity-90 hover:text-white"
      } border py-1 px-2   rounded-[32px] flex justify-start items-center gap-1 transition-all${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      {name}
      <div className="h-[20px] w-[20px] flex justify-center items-center text-base">
        {active ? (
          <FontAwesomeIcon icon={faRemove} />
        ) : (
          <FontAwesomeIcon icon={faAdd} />
        )}
      </div>
    </motion.button>
  );
};

export default FilterButton;
