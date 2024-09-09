"use client";
import HeroSection from "./components/hero-section/hero-section";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import ScrollToTop from "./components/scroll-to-top/scrollToTop";
// import { useEffect } from "react";
// import { scroller } from "react-scroll";
// import { usePathname } from "next/navigation";

export default function Home() {
  // const pathName = usePathname();
  // useEffect(() => {
  // if (hash) {
  //   const id = hash.split("#")[1];
  //   scroller.scrollTo(id, {
  //     duration: 500,
  //     smoth: "easeInOutQuart",
  //     delay: 0,
  //   });
  // }
  //   console.log(pathName);
  // }, [pathName]);
  return (
    <main>
      <ScrollToTop />
      <HeroSection />
      <Portfolio />
      <Contact />
    </main>
  );
}
