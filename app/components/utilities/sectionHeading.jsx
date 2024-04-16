import { spaceGrotesk } from "./fonts";
const SectionHeading = ({ children, className }) => (
  <div className="flex justify-start h-[30px] items-center">
    <div className="w-[20px] h-[30px] bg-green mr-2"></div>
    <h2
      className={`${spaceGrotesk.className} ${className} text-3xl font-bold text-darkGray`}
    >
      {children}
    </h2>
  </div>
);

export default SectionHeading;
