import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ContactInfo = () => (
  <div className="flex flex-col w-[360px] h-[120px] justify-around">
    <div className="flex justify-start w-full h-10">
      <div className="w-[35px] h-[35px] mr-5 flex justify-center ">
        <FontAwesomeIcon icon={faEnvelope} className="h-[35px] text-darkBlue" />
      </div>
      <div className="bg-green text-2xl text-darkGray py-1 px-3 md:text-[27px]">
        dawidw22@gmail.com
      </div>
    </div>

    <div className="flex justify-start w-full h-10">
      <div className="w-[35px] h-[35px] mr-5 flex justify-center">
        <FontAwesomeIcon
          icon={faMobileScreenButton}
          className="h-[35px] text-darkBlue"
        />
      </div>
      <div className="bg-green text-2xl text-darkGray py-1 px-3 md:text-[27px]">
        609 156 740
      </div>
    </div>
  </div>
);

export default ContactInfo;
