"use client";
import { spaceGrotesk } from "./fonts";
import { motion } from "framer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ children, className, icon, type }) => (
  <motion.button
    className={`${className} flex justify-center items-center bg-darkGray text-white uppercase text-xl hover:bg-green `}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.97 }}
    type={type}
  >
    <div className=" w-5 h-5 mr-1 flex items-center " role="none presentation">
      <FontAwesomeIcon icon={icon} />
    </div>
    <span className={`${spaceGrotesk.className}`}>{children}</span>
  </motion.button>
);

export default Button;
