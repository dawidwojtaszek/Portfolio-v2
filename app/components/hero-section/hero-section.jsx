import HeroSvg from "./hero-svg";
import HeroInfo from "./hero-info";
import Container from "../utilities/container";
const HeroSection = () => {
  return (
    <div className=" bg-gray w-full" role="none presentation">
      <Container className="flex items-center justify-around h-[250px] md:h-[500px]">
        <HeroInfo />
        <HeroSvg />
      </Container>
    </div>
  );
};

export default HeroSection;
