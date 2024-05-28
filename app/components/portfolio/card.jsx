import Image from "next/image";
const Card = ({ mainPhotoUrl, mainPhotoAlt }) => {
  console.log(mainPhotoUrl);
  return (
    <div
      className="border-4 border-darkBlue shadow-shadowEffect flex"
      role="none presentation"
    >
      <div className="w-[500px]">
        <Image src={mainPhotoUrl} alt={mainPhotoAlt} width={500} height={345} />
      </div>
      <div></div>
    </div>
  );
};
export default Card;
