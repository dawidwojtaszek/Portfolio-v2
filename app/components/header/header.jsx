"use client";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import LinkNext from "next/link";
import Container from "../utilities/container";
import { usePathname } from "next/navigation";
import { Link } from "react-scroll";
const Header = () => {
  const isProjectsPath = usePathname().includes("/projects/");

  return (
    <header className="bg-white h-20 w-full">
      <Container className="h-full items-center flex justify-between">
        <LinkNext href="/">
          <Image src={Logo} alt="logo" priority />
        </LinkNext>

        {isProjectsPath ? (
          <nav className="flex h-full items-center text-lg">
            <LinkNext
              href="/#portfolio"
              className="p-4 hover:text-green cursor-pointer"
            >
              PORTFOLIO
            </LinkNext>
            <LinkNext
              href="/#contact"
              className="p-4 hover:text-green cursor-pointer"
            >
              KONTAKT
            </LinkNext>
          </nav>
        ) : (
          <nav className="flex h-full items-center text-lg">
            <Link
              to="portfolio"
              className="p-4 hover:text-green cursor-pointer"
              smooth={true}
              duration={500}
            >
              PORTFOLIO
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="p-4 hover:text-green cursor-pointer"
            >
              KONTAKT
            </Link>
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;
