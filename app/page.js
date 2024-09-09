"use client";
import HeroSection from "./components/hero-section/hero-section";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
// import { useEffect } from "react";
// import { scroller } from "react-scroll";
// import { usePathname } from "next/navigation";

export default function Home() {
  // useEffect(() => {
  //   const hash = usePathname().includes("#");

  //   if (hash) {
  //     const id = hash.split("#")[1];
  //     scroller.scrollTo(id, {
  //       duration: 500,
  //       smoth: "easeInOutQuart",
  //       delay: 0,
  //     });
  //   }
  // }, []);
  return (
    <main>
      <HeroSection />
      <Portfolio />
      <Contact />
    </main>
  );
}
