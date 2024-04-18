import Image from "next/image";
import MockupLorem from "@images/mockupLorem.jpg";
const Card = ({}) => (
  <div
    className="border-4 border-darkBlue shadow-shadowEffect flex"
    role="none presentation"
  >
    <div className="w-[500px]">
      <Image src={MockupLorem} />
    </div>
    <div></div>
  </div>
);

export default Card;
