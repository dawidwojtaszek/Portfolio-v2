import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animateScroll } from "react-scroll";
import { motion } from "framer";
const ScrollToTop = () => {
  return (
    <motion.button
      className="bg-darkerGray fixed right-16 top-[90vh] rounded-full justify-center items-center p-4 hidden lg:flex"
      onClick={() => {
        animateScroll.scrollToTop({ smooth: true, duration: 500 });
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </motion.button>
  );
};
export default ScrollToTop;
