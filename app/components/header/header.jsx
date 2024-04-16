import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo.png";
import Container from "../utilities/container";
const Header = () => (
  <header className="bg-white h-20 w-full">
    <Container className="h-full items-center flex justify-between">
      <Link href="/">
        <Image src={Logo} alt="logo" priority />
      </Link>
      <nav className="flex h-full items-center text-lg">
        {/* TODO add href to links  */}
        <Link href="#" className="p-4 hover:text-green">
          PORTFOLIO
        </Link>
        <Link href="#" className="p-4 hover:text-green">
          KONTAKT
        </Link>
      </nav>
    </Container>
  </header>
);

export default Header;
